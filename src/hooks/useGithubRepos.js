import { useEffect, useState } from 'react';
import site from '../data/site';

const CACHE_KEY = 'gh-repos-cache-v1';
const CACHE_TTL = 1000 * 60 * 60; // 1 hour

// Fetches public repos for the configured GitHub user, with a localStorage
// cache so the unauthenticated API rate limit (60 req/h) is never a problem.
const useGithubRepos = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      try {
        const { at, data } = JSON.parse(cached);
        if (Date.now() - at < CACHE_TTL) {
          setRepos(data);
          setLoading(false);
          return;
        }
      } catch {
        localStorage.removeItem(CACHE_KEY);
      }
    }

    fetch(`https://api.github.com/users/${site.githubUser}/repos?sort=updated&per_page=100`)
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API responded ${res.status}`);
        return res.json();
      })
      .then((data) => {
        const cleaned = data
          .filter((r) => !r.fork)
          .map((r) => ({
            name: r.name,
            description: r.description,
            language: r.language,
            stars: r.stargazers_count,
            url: r.html_url,
            homepage: r.homepage,
            updatedAt: r.updated_at,
            topics: r.topics || [],
          }));
        localStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), data: cleaned }));
        if (!cancelled) {
          setRepos(cleaned);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err);
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { repos, loading, error };
};

export default useGithubRepos;
