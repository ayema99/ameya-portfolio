import site from './site';
import caseStudies from './caseStudies';
import strengths from './strengths';
import about from './about';
import { experience, education } from './experience';

export function buildKnowledgeBase() {
  const caseStudyText = caseStudies
    .map((study) => {
      const outcomes = study.outcomes.map((o) => `- ${o}`).join('\n');
      const skills = study.skills.join(', ');
      const live = study.live ? `Live demo: ${study.live}` : 'No public live demo';
      return `### ${study.title}
Category: ${study.category}
Summary: ${study.summary}
Problem: ${study.problem}
Approach: ${study.approach}
Outcomes:
${outcomes}
Skills: ${skills}
GitHub repo: ${study.repo}
${live}
Featured on homepage: ${study.featured ? 'Yes' : 'No'}`;
    })
    .join('\n\n');

  const strengthsText = strengths
    .map((s) => `- **${s.title}**: ${s.body}`)
    .join('\n');

  const processText = about.process
    .map((p) => `${p.step} ${p.title}: ${p.body}`)
    .join('\n');

  const toolkitText = Object.entries(about.toolkit)
    .map(([group, skills]) => `${group}: ${skills.join(', ')}`)
    .join('\n');

  const experienceText = experience
    .map((job) => {
      const header = `### ${job.company} — ${job.title} (${job.period}, ${job.duration})\n${job.summary}`;
      if (job.roles) {
        const roles = job.roles
          .map(
            (role) =>
              `**${role.title}** (${role.period}):\n${role.bullets.map((b) => `- ${b}`).join('\n')}`
          )
          .join('\n\n');
        return `${header}\n\n${roles}`;
      }
      return `${header}\n${job.bullets.map((b) => `- ${b}`).join('\n')}`;
    })
    .join('\n\n');

  const educationText = education
    .map((e) => `- ${e.degree}, ${e.institution} (${e.period})`)
    .join('\n');

  return `# ${site.name} — Portfolio Knowledge Base

## Profile
- Name: ${site.name}
- Role: ${site.role} (aspiring Associate Product Manager)
- Tagline: ${site.tagline}
- Location: ${site.location}
- Email: ${site.email}
- GitHub: ${site.github} (@${site.githubUser})
- LinkedIn: ${site.linkedin}
- Hiring status: ${about.hiringStatus}

## About
${about.headline}

${about.bio.join('\n\n')}

## Work Experience
${experienceText}

## Education
${educationText}

## Core Strengths
${strengthsText}

## How I Work
${processText}

## Toolkit
${toolkitText}

## Values
${about.values.join(' · ')}

## Hero Summary
I combine user research, data analysis and hands-on technical skills to take products from ambiguous idea to shipped reality. Everything on the portfolio is real, built by me, and live on GitHub.

## Case Studies & Projects
${caseStudyText}
`;
}

export function buildSystemPrompt() {
  const knowledge = buildKnowledgeBase();
  return `You are ${site.firstName}'s portfolio AI assistant. You help recruiters, hiring managers, and collaborators learn about ${site.firstName}'s work, skills, and product approach.

Rules:
- Answer ONLY using the portfolio context below. Never invent employers, metrics, projects, or experience not listed.
- Be concise, friendly, and professional. Use third person when describing ${site.firstName} ("He built…", "${site.firstName}…").
- For hiring or role-fit questions, highlight PM skills, technical fluency, and shipped projects.
- For project questions, cite specific outcomes and skills from the context.
- If asked something not covered in the context, say you don't have that information and suggest emailing ${site.email} or visiting the contact page.
- Keep responses under 150 words unless the user asks for detail.
- Do not claim to be ${site.firstName} — you are his portfolio assistant.

--- PORTFOLIO CONTEXT ---
${knowledge}`;
}

export default buildKnowledgeBase;
