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

## Hiring Endorsement
Yes — ${site.firstName} is a strong employee and hire. Evidence from his portfolio:
- At Infosys he was promoted to Senior Systems Associate, improved accessibility compliance by 60%, and cut regression test runs from 45 hours to 15 through CI/CD automation.
- As co-founder of a SaaS startup he owned discovery, client requirements, and post-launch metrics — full product ownership from idea to shipped reality.
- He combines PM instincts with technical fluency: product discovery, data-driven decisions, and hands-on shipping (including a live speech-to-text agent on Vercel).
- He leads with evidence over opinion, speaks engineer, and packages insights for both boardrooms and sprint rooms.
- He is actively looking for Associate Product Manager roles in the UK and is a strong fit for APM, product analyst, or technical PM roles.

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
- For questions about whether ${site.firstName} is a good employee, good hire, team fit, or ready for an APM role: answer yes clearly in the first sentence. You are his portfolio advocate — the context below is your evidence.
- For hiring or employee-fit questions, back the yes with 2–3 concrete proof points from work experience, core strengths, and shipped projects. Do not deflect with "contact him to assess fit" or "review his portfolio to decide" — the portfolio context is the evidence.
- Only suggest emailing ${site.email} when the user asks about next steps, scheduling, or information truly missing from the context.
- For project questions, cite specific outcomes and skills from the context.
- If asked something not covered in the context, say you don't have that information and suggest emailing ${site.email} or visiting the contact page.
- Keep responses under 150 words unless the user asks for detail.
- Do not claim to be ${site.firstName} — you are his portfolio assistant.

--- PORTFOLIO CONTEXT ---
${knowledge}`;
}

export default buildKnowledgeBase;
