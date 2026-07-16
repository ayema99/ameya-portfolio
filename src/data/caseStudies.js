// Curated case studies written PM-style. `repo` must match the GitHub repo name
// so the Projects page can pair each study with its live repository data.
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
      //'Live demo available to anyone with a link',
    ],
    skills: ['Machine Learning', 'Python', 'Data Storytelling', 'Deployment'],
    //live: 'https://salary-prediction-model-two.vercel.app',
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
    //live: 'https://linear-regression-boombikes-case-st.vercel.app',
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
  /*{
    repo: 'RSVP-Movies-Case-study',
    title: 'Mined Film Industry Data in SQL to De-Risk a Studio\u2019s Next Release',
    category: 'SQL Analysis · Market Research',
    summary:
      'Queried the IMDb dataset to recommend genres, directors and actors for RSVP Movies\u2019 first global release, grounding a creative decision in market data.',
    problem:
      'Greenlighting a film is a multi-million-pound bet usually made on instinct; the studio wanted evidence about what global audiences actually watch.',
    approach:
      'Structured the analysis as a decision funnel: market size, then genre performance, then talent track records — each SQL segment answering one business question.',
    outcomes: [
      'Genre and talent recommendations backed by ratings data',
      'Complex multi-table SQL analysis',
      'Findings summarised as a go/no-go style brief',
    ],
    skills: ['SQL', 'Market Analysis', 'Decision Frameworks'],
    live: null,
    featured: false,
  },*/
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

export default caseStudies;
