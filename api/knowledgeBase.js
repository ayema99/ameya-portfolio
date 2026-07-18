const site = {
  name: 'Ameya Kulkarni',
  firstName: 'Ameya',
  role: 'Product Manager',
  tagline: 'turning ambiguous problems into products people actually use.',
  location: 'United Kingdom',
  email: 'ameya8478@gmail.com',
  githubUser: 'ayema99',
  github: 'https://github.com/ayema99',
  linkedin: 'https://www.linkedin.com/in/ameya-kulkarni10/',
};

const strengths = [
  {
    title: 'Product Discovery',
    body: 'I start with the problem, not the feature. Research, user conversations and data decide what gets built — assumptions don\u2019t.',
  },
  {
    title: 'Data-Driven Decisions',
    body: 'SQL, Python and analytics are part of my toolkit, so I can pull the evidence myself instead of waiting for a report.',
  },
  {
    title: 'AI & Emerging Tech',
    body: 'From speech interfaces to deep learning models, I\u2019ve built with AI hands-on — which means I can scope it realistically.',
  },
  {
    title: 'Prototyping & Shipping',
    body: 'I take ideas to deployed products myself. A live link beats a slide deck in every stakeholder conversation.',
  },
  {
    title: 'Storytelling',
    body: 'The same insight lands differently in a boardroom and a sprint room. I package analysis for the audience in front of me.',
  },
  {
    title: 'Technical Fluency',
    body: 'I speak engineer. APIs, models and trade-offs are conversations I can hold, which keeps estimates honest and scope tight.',
  },
];

const about = {
  headline:
    'I got into product the long way round — by building things and watching people use them.',
  bio: [
    'I\u2019m an aspiring Associate Product Manager based in the UK, with a technical background spanning machine learning, data analysis and web development. That mix means I don\u2019t just write requirements. I\u2019ve sat on the other side, estimating them, building them, and living with the trade-offs.',
    'What pulls me toward product is the translation work: taking a vague frustration from a user, a business goal from a stakeholder, and a technical constraint from an engineer, and finding the one thing worth building that serves all three.',
    'I\u2019m particularly drawn to fintech, energy and AI-powered products, domains where good data work directly changes what everyday people can do.',
  ],
  hiringStatus:
    'Actively looking for Associate Product Manager roles in the UK. Open to hybrid and remote.',
  values: ['Evidence over opinion', 'Ship early', 'Users first', 'Measure honestly', 'Speak engineer'],
  process: [
    {
      step: '01',
      title: 'Understand',
      body: 'Talk to users, read the data, map the landscape. I don\u2019t write a line of a spec until I can explain the problem better than the person who reported it.',
    },
    {
      step: '02',
      title: 'Frame',
      body: 'Turn the mess into a decision: what are we solving, for whom, and how will we know it worked? Success metrics come before solutions.',
    },
    {
      step: '03',
      title: 'Prototype',
      body: 'Build the smallest thing that tests the riskiest assumption. Because I code, this is often a working product rather than a mockup.',
    },
    {
      step: '04',
      title: 'Ship & Learn',
      body: 'Get it in front of real people, measure honestly, and iterate. A shipped v1 teaches more than a perfect roadmap.',
    },
  ],
  toolkit: {
    Product: [
      'Product Strategy',
      'User Research',
      'Roadmapping',
      'A/B Testing',
      'Stakeholder Management',
      'Agile/Scrum',
    ],
    Data: ['SQL', 'Python', 'Pandas', 'Exploratory Analysis', 'Data Storytelling', 'Visualisation'],
    Build: ['React', 'APIs', 'Machine Learning', 'Deep Learning', 'Vercel', 'Git'],
  },
};

// Keep in sync with src/data/caseStudies.js
const caseStudies = [
  {
    repo: 'speech-to-text-agent',
    title: 'Shipped a Speech-to-Text Agent That Removes Friction from Note Capture',
    category: 'AI Product · Voice Interfaces',
    summary:
      'Built and deployed a browser-based voice agent that transcribes speech in real time, cutting the gap between thinking and writing to zero.',
    problem:
      'Typing is a bottleneck. People lose ideas in the time it takes to open an editor and start writing them down.',
    approach:
      'Scoped the smallest useful product: press one button, speak, get clean text. Validated with the Web Speech API before considering paid transcription services.',
    outcomes: [
      'Live product deployed on Vercel',
      'Zero-install: works in any modern browser',
      'Single-interaction UX from launch to transcript',
    ],
    skills: ['Product Scoping', 'AI/Voice UX', 'Rapid Prototyping', 'Vercel'],
    live: 'https://speech-to-text-agent.vercel.app/',
    featured: true,
  },
  {
    repo: 'Salary-prediction-model',
    title: 'Built a Salary Prediction Model to Bring Transparency to Pay Decisions',
    category: 'Machine Learning · Decision Support',
    summary:
      'Trained and shipped a regression model that estimates salaries from experience and role data, packaged as a usable web tool rather than a notebook.',
    problem:
      'Salary expectations are guesswork for candidates and inconsistent for employers, both sides lack a data-backed reference point.',
    approach:
      'Framed it as a decision-support product: cleaned the dataset, benchmarked regression models, then prioritised deploying a simple interface over squeezing out marginal accuracy.',
    outcomes: [
      'End-to-end: from raw data to deployed web app',
      'Model reasoning documented for non-technical users',
    ],
    skills: ['Machine Learning', 'Python', 'Data Storytelling', 'Deployment'],
    live: null,
    featured: true,
  },
  {
    repo: 'Leicester-Air-Quality-Analysis',
    title: 'Analysed Leicester Air Quality to Surface Insights for Local Policy',
    category: 'Data Analysis · Public Data',
    summary:
      'Investigated open air-quality data for Leicester to identify pollution patterns by time, season and location — the groundwork for evidence-based interventions.',
    problem:
      'Public air-quality data exists but sits in raw formats that residents and local decision-makers cannot act on.',
    approach:
      'Treated the analysis like a stakeholder briefing: defined the questions first (when and where is air worst?), then built the analysis and visuals to answer exactly those.',
    outcomes: [
      'Clear temporal and spatial pollution patterns identified',
      'Reproducible notebook on open data',
      'Findings framed for non-technical audiences',
    ],
    skills: ['Exploratory Analysis', 'Pandas', 'Visualisation', 'Public Data'],
    live: null,
    featured: true,
  },
  {
    repo: 'Linear-Regression-Boombikes-case-study',
    title: 'Modelled Bike-Sharing Demand to Guide Post-Pandemic Recovery Strategy',
    category: 'Predictive Modelling · Business Strategy',
    summary:
      'Built a multiple linear regression model for BoomBikes to identify which factors drive rental demand, so the business could plan supply and marketing around them.',
    problem:
      'BoomBikes suffered revenue dips during the pandemic and needed to know which variables actually predict demand before committing recovery budget.',
    approach:
      'Started from the business question, not the model: translated "what drives demand?" into testable features, validated assumptions, and reported drivers in plain language.',
    outcomes: [
      'Key demand drivers isolated and quantified',
      'Model assumptions validated and documented',
      'Recommendations tied directly to business levers',
    ],
    skills: ['Linear Regression', 'Feature Analysis', 'Business Framing', 'Python'],
    live: null,
    featured: false,
  },
  {
    repo: 'Eye-for-Blind-Deep-Learning',
    title: 'Prototyped an Image-Captioning Model to Make Visual Content Accessible',
    category: 'Deep Learning · Accessibility',
    summary:
      'Built a CNN–RNN attention model that generates spoken descriptions of images, exploring how AI can describe the visual world to blind and low-vision users.',
    problem:
      'Most visual content on the web is inaccessible to blind users because alt-text is missing, generic, or wrong.',
    approach:
      'Anchored the technical work in a user need: the model output had to work as speech, so captions were evaluated for usefulness when heard, not just BLEU scores.',
    outcomes: [
      'Attention-based captioning model trained end-to-end',
      'Text-to-speech pipeline for generated captions',
      'Accessibility-first evaluation criteria',
    ],
    skills: ['Deep Learning', 'CNN/RNN', 'Accessibility', 'TensorFlow'],
    live: null,
    featured: false,
  },
  {
    repo: 'Airbnb-Storytelling-Case-Study',
    title: 'Turned Airbnb NYC Data into a Post-Pandemic Recovery Narrative',
    category: 'Data Storytelling · Stakeholder Communication',
    summary:
      'Analysed Airbnb listings data for New York and presented the findings as two distinct narratives — one for executives, one for analysts.',
    problem:
      'The same dataset means different things to different stakeholders; a single generic report serves neither the boardroom nor the data team.',
    approach:
      'Practised a core PM skill: audience-specific communication. Built one analysis, then packaged the insights twice with different depth, visuals and calls to action.',
    outcomes: [
      'Two tailored presentations from one analysis',
      'Actionable pricing and location insights',
      'Executive-ready visual storytelling',
    ],
    skills: ['Data Storytelling', 'Stakeholder Comms', 'Tableau/Visuals', 'EDA'],
    live: null,
    featured: false,
  },
  {
    repo: 'Exploratory-Data-Analysis',
    title: 'Identified Loan Default Risk Drivers Through Exploratory Analysis',
    category: 'Risk Analytics · EDA',
    summary:
      'Analysed consumer loan data to find the applicant attributes most associated with default, helping a lender balance approval volume against credit risk.',
    problem:
      'Rejecting good applicants loses revenue; approving risky ones loses capital. The lender needed to know which signals actually predict default.',
    approach:
      'Ran univariate, bivariate and segmented analysis on application data, prioritising findings by how directly a lending team could act on them.',
    outcomes: [
      'Top default-risk indicators identified',
      'Actionable segmentation of applicant profiles',
      'Risk insights framed for lending policy',
    ],
    skills: ['EDA', 'Risk Analysis', 'Python', 'Pandas'],
    live: null,
    featured: false,
  },
];

// Keep in sync with src/data/experience.js
const experience = [
  {
    company: 'Stealth',
    title: 'Co-Founder',
    period: 'Aug 2023 – Feb 2024',
    duration: '7 mos',
    summary:
      'Started a company delivering end-to-end SaaS enterprise solutions for small-scale enterprise clients, owning discovery, design, and launch.',
    bullets: [
      'Led discovery for a SaaS platform, translating frontline user pain points into a prioritised backlog of user stories and acceptance criteria focused on operational simplicity.',
      'Acted as the primary point of contact for small and medium-scale enterprise clients, turning business needs into structured requirements, user stories, and acceptance criteria.',
      'Followed features into production by tracking usage metrics and support feedback, surfacing insights that informed 2–3 post-launch prioritisation decisions.',
      'Produced post-release MI reports and insight summaries to communicate product performance to non-technical stakeholders, informing roadmap planning.',
    ],
  },
  {
    company: 'Infosys Ltd.',
    title: 'Systems Associate → Senior Systems Associate',
    period: 'May 2021 – Aug 2023',
    duration: '2y 4m',
    summary:
      'Grew from automation-focused QA into a senior role shaping sprint planning, release risk, and accessibility for a major client.',
    roles: [
      {
        title: 'Senior Systems Associate',
        period: 'Apr 2023 – Aug 2023',
        bullets: [
          'Led quality assurance initiatives improving accessibility compliance by 60%, directly supporting a more inclusive customer experience.',
          'Contributed QA input during sprint planning, helping the team scope testing effort, flag release risks early, and set realistic sprint commitments.',
          'Collaborated daily with engineering, performance testing, and product stakeholders to assess trade-offs and reduce bottlenecks, increasing load capacity by around 10%.',
          'Executed testing across multiple mobile devices, OS versions, browsers, and screen resolutions to ensure a consistent user experience.',
        ],
      },
      {
        title: 'Systems Associate',
        period: 'May 2021 – Apr 2023',
        bullets: [
          'Automated QA workflow components using advanced testing tools and Git-based version control, reducing defect identification time by 30%.',
          'Migrated 100+ automated test scripts from UFT to Selenium using Java, improving automation maintainability and collaboration across QA teams.',
          'Built a regression automation framework integrated with CI/CD pipelines, cutting end-to-end test execution time from 45 hours to 15 hours.',
          'Designed and executed 70+ functional and exploratory test cases, improving defect detection ahead of release.',
        ],
      },
    ],
  },
];

const education = [
  {
    degree: "Master's in Business Analytics",
    institution: 'Loughborough University',
    period: 'Sep 2024 – Sep 2025',
  },
  {
    degree: 'PG Program in Data Science',
    institution: 'International Institute of Information Technology, Bangalore',
    period: 'Oct 2021 – Oct 2022',
  },
  {
    degree: "Bachelor's in Business Administration in Computer Applications",
    institution: 'Pune University',
    period: 'Aug 2017 – May 2020',
  },
];

function buildKnowledgeBase() {
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

  const strengthsText = strengths.map((s) => `- **${s.title}**: ${s.body}`).join('\n');
  const processText = about.process.map((p) => `${p.step} ${p.title}: ${p.body}`).join('\n');
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

function buildSystemPrompt() {
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
- Use plain text only. Do not use Markdown, asterisks, bold, italics, headers, or bullet syntax.
- Do not claim to be ${site.firstName} — you are his portfolio assistant.

--- PORTFOLIO CONTEXT ---
${knowledge}`;
}

module.exports = { buildSystemPrompt, buildKnowledgeBase };
