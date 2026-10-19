export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'AI & Healthcare' | 'Governance & Analytics' | 'NLP & Speech' | 'Predictive ML' | 'AI & Web';
  filterCategory: 'ai-ml' | 'nlp-predictive' | 'web-fullstack';
  badge: string;
  problemStatement: string;
  overview: string;
  myContribution: string;
  architectureDetails: string[];
  keyFeatures: string[];
  technologies: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  videoDemoUrl?: string;
  hasVerifiedCodeOrReport: boolean;
  statusBadge: string;
  disclaimer?: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    levelDescription: string;
    featuredIn?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  type: 'Internship' | 'Academic / Community Project' | 'Hackathon & R&D' | 'Practical Learning';
  status: 'Completed' | 'Offer / Program Record' | 'Project Submission';
  responsibilities: string[];
  outcomes: string[];
  verifiedNote?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: 'GenAI & LLMs' | 'Job Simulations' | 'Programming & Web' | 'Cybersecurity';
  credentialId?: string;
  credentialUrl?: string;
  verified: boolean;
  notes?: string;
}

export interface CodingProfile {
  platform: string;
  username: string;
  url: string;
  description: string;
  iconName: string;
  badge: string;
}

export const PERSONAL_INFO = {
  name: 'Thanusri Tunuguntla',
  monogram: 'TT',
  title: 'AI Engineer in Progress | Machine Learning | Python | NLP',
  institution: "Vignan's Institute of Information Technology",
  degree: 'B.Tech in Computer Science and Engineering (Artificial Intelligence)',
  graduationYear: '2028',
  location: 'Visakhapatnam, Andhra Pradesh, India',
  email: 'thanusritunuguntla@gmail.com',
  githubUrl: 'https://github.com/Thanusri-tunuguntla',
  linkedinUrl: 'https://www.linkedin.com/in/thanusri-tunuguntla-a619352b0',
  leetcodeUrl: 'https://leetcode.com/u/ThanusriTunuguntla/',
  codechefUrl: 'https://www.codechef.com/users/thanusri09',
  resumePath: '/assets/Thanusri_Tunuguntla_Resume.pdf',
  heroIntro: "Hello, I'm",
  heroHeadline: 'Building intelligent solutions with AI, ML & Python.',
  heroSupportingText:
    'Computer Science engineering student focused on machine learning, NLP, and practical AI applications. I turn ideas into software projects and continuously explore ways to make technology more useful.',
  careerObjective:
    'Pursuing AI/ML internships and opportunities to build practical AI applications while strengthening software engineering and problem-solving skills.',
  professionalIntro:
    'I am a computer science engineering student passionate about Artificial Intelligence, Machine Learning, Natural Language Processing, and software development. I enjoy building practical applications that use data and intelligent systems to solve real-world problems. Through hands-on projects, coding practice, internships, and technical learning, I am continuously strengthening my ability to design, develop, and improve software solutions. I am actively seeking opportunities to contribute to meaningful projects, collaborate with technical teams, and grow as an AI Engineer.',
  philosophyQuote:
    'I believe good technology is not just about sophisticated algorithms. It is about building solutions that are useful, understandable, and reliable.',
  heroChips: [
    { label: 'AI/ML-Focused Projects', icon: 'Cpu' },
    { label: 'Python & Machine Learning', icon: 'Code2' },
    { label: 'Problem-Solving Practice', icon: 'Brain' },
    { label: 'Open to AI/ML Internships', icon: 'Sparkles' },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: 'nutrirefer-ai',
    title: 'NutriRefer AI',
    subtitle: 'AI-Powered Nutrition & Wellness Companion',
    category: 'AI & Healthcare',
    filterCategory: 'ai-ml',
    badge: 'Community Service Project • VIIT',
    statusBadge: 'Fully Documented & Certified',
    problemStatement:
      'Community surveys in Visakhapatnam revealed that over 70% of respondents faced inadequate hydration and relied on generic, unverified dietary advice with no awareness of personalized caloric or micronutrient requirements.',
    overview:
      'An intelligent web platform integrating Google Gemini AI to analyze user profiles and dietary patterns, producing 20-point personalized nutrition reports, tailored 10-day meal plans, and interactive habit trackers.',
    myContribution:
      'Contributed to the technical design and frontend development using React, Vite, and Material UI; structured the prompt pipelines for Google Gemini AI to generate structured JSON nutrition assessments; implemented local state persistence and Recharts analytics dashboard.',
    architectureDetails: [
      'Frontend client built with React 18, Vite, and Material UI component system for rapid, accessible rendering.',
      'Google Gemini AI Engine: Context-aware prompt engineering to generate custom 20-point dietary recommendations based on age, BMI, allergies, and lifestyle.',
      'Data & Analytics: Dynamic macronutrient visualization using Recharts; client-side storage for daily water logs, food scanning entries, and streak counters.',
      'Supervised by Prof. Y. Swathi (CSE-AI) and verified by Grama Sachivalayam, Gajuwaka (June 2026).',
    ],
    keyFeatures: [
      '20-Point AI Nutrition Reports generated from comprehensive health assessments',
      'Personalized 10-Day Meal Planning customized for individual dietary requirements',
      'Food image calorie estimation and nutritional analysis module',
      'Gamified hydration tracker with daily streak milestones and achievement badges',
      'Interactive health analytics dashboard tracking caloric and water intake over time',
    ],
    technologies: ['React.js', 'Vite', 'Material UI', 'Google Gemini AI', 'Recharts', 'JavaScript (ES6+)', 'Local Storage'],
    githubUrl: 'https://github.com/Thanusri-tunuguntla',
    hasVerifiedCodeOrReport: true,
    disclaimer:
      'Designed as a preventive wellness and nutritional awareness tool. It does not provide medical diagnoses or replace clinical healthcare consultations.',
  },
  {
    id: 'nirikshan-ai',
    title: 'NIRIKSHAN AI',
    subtitle: 'MPLADS Project Monitoring & Risk Intelligence',
    category: 'Governance & Analytics',
    filterCategory: 'ai-ml',
    badge: 'Smart India Hackathon • SIH26102',
    statusBadge: 'SIH Architectural R&D',
    problemStatement:
      'The Members of Parliament Local Area Development Scheme (MPLADS) handles thousands of civic works across India. Manual audits struggle to detect expenditure anomalies, repeated tenders, or geospatial inconsistencies before funds are disbursed.',
    overview:
      'An AI-assisted monitoring and risk intelligence system designed to flag anomalous public infrastructure works and empower administrative oversight bodies with explainable risk rankings.',
    myContribution:
      'Contributed to the SIH team architecture, focusing on the decision-support flow, explainable AI explanations ("Why Flagged?"), and geospatial data alignment concepts connecting the FastAPI backend with the analytical dashboard.',
    architectureDetails: [
      'Anomaly Detection Pipeline: Unsupervised machine learning using Isolation Forest to identify multi-dimensional outliers across sanction values, durations, and contractor history.',
      'Natural Language Processing: TF-IDF n-grams applied across work descriptions and tender titles to detect duplicate project proposals across overlapping fiscal years.',
      'Composite Risk Score: Multi-factor risk engine generating a 0–100 index to systematically order administrative audit queues.',
      'Explainable AI Module: Contextual attribution surfacing specific factors (cost escalation, timeline variance, cluster anomalies) for human investigator verification.',
    ],
    keyFeatures: [
      'Multi-factor Anomaly Detection using Isolation Forest models',
      'NLP-based duplicate project and work-description similarity detection',
      'Systematic Audit Queue prioritization based on Composite Risk Index',
      '"Why Flagged?" explainable decision-support view for civil officers',
      'Geospatial and timeline progression analytics for public works',
    ],
    technologies: ['FastAPI', 'Python', 'React', 'PostgreSQL', 'Isolation Forest', 'TF-IDF n-grams', 'Scikit-learn'],
    videoDemoUrl: 'https://youtu.be/1rsu6_t2NHs?si=jRlDdSJ_NdWJVMW5',
    githubUrl: 'https://github.com/Thanusri-tunuguntla',
    hasVerifiedCodeOrReport: true,
    disclaimer:
      'NIRIKSHAN AI is an administrative decision-support concept. Anomaly flags are automated statistical indicators intended to prioritize human investigation, never conclusive proof of irregularity or fraud.',
  },
  {
    id: 'ai-language-translator',
    title: 'AI Language Translator',
    subtitle: 'Multilingual Translation & Speech Synthesis Platform',
    category: 'NLP & Speech',
    filterCategory: 'nlp-predictive',
    badge: 'CodeAlpha AI Internship Project',
    statusBadge: 'Verified Project Implementation',
    problemStatement:
      'Language barriers hinder seamless communication across diverse linguistic communities in academic, professional, and emergency contexts, requiring fast, localized text and voice conversions.',
    overview:
      'A real-time multilingual translation and accessibility application built with Python and Streamlit, combining Deep Translator APIs with Google Text-to-Speech (gTTS) for synchronized audio pronunciation.',
    myContribution:
      'Developed the complete Streamlit application, integrated Deep Translator API endpoints for dynamic language selection, implemented error-handling for special characters, and connected gTTS audio playback buffering.',
    architectureDetails: [
      'Streamlit reactive frontend architecture providing instantaneous UI updates upon target language switching.',
      'Deep Translator wrapper handling robust translation across 30+ regional and global languages.',
      'Audio synthesis integration via gTTS (Google Text-to-Speech) generating temporary in-memory MP3 streams for immediate audio pronunciation.',
    ],
    keyFeatures: [
      'Instantaneous multilingual text translation across major global and Indian languages',
      'Synchronized text-to-speech audio pronunciation with native inflection support',
      'Clean single-page user interface with character counters and clear inputs',
      'Downloadable translation logs and instant clipboard export',
    ],
    technologies: ['Python', 'Streamlit', 'Deep-Translator', 'gTTS', 'Audio Processing'],
    githubUrl: 'https://github.com/Thanusri-tunuguntla',
    hasVerifiedCodeOrReport: true,
  },
  {
    id: 'spam-sms-detection',
    title: 'Spam SMS Detection',
    subtitle: 'Machine Learning Text Classification Pipeline',
    category: 'NLP & Speech',
    filterCategory: 'nlp-predictive',
    badge: 'NLP & Applied Machine Learning',
    statusBadge: 'Verified Model Pipeline',
    problemStatement:
      'Unsolicited and fraudulent SMS messages present ongoing security vulnerabilities and cognitive overload for mobile users, requiring fast, automated NLP text classification.',
    overview:
      'An end-to-end NLP classification system that processes raw text messages, performs regex cleaning, tokenization, stop-word removal, TF-IDF vectorization, and predicts Spam vs Ham utilizing Logistic Regression.',
    myContribution:
      'Authored the complete data preprocessing and modeling pipeline in Python; evaluated class balance, conducted feature extraction experiments with n-gram ranges, and computed classification metrics (precision, recall, F1-score).',
    architectureDetails: [
      'Text Preprocessing: Regex lowercasing, punctuation stripping, tokenization, and stop-word elimination.',
      'Feature Extraction: Scikit-learn TfidfVectorizer mapping sparse word tokens into mathematical term-frequency inverse-document frequency vectors.',
      'Classifier: Binary Logistic Regression model calibrated with cross-validation to maximize precision on spam detection without blocking legitimate communications.',
    ],
    keyFeatures: [
      'Automated text cleaning and linguistic token normalization',
      'Sparse TF-IDF feature matrix transformation pipeline',
      'High-precision classification separating legitimate messages from spam',
      'Confusion matrix evaluation with detailed precision-recall metrics',
    ],
    technologies: ['Python', 'Scikit-learn', 'TF-IDF', 'Logistic Regression', 'Pandas', 'NLTK'],
    githubUrl: 'https://github.com/Thanusri-tunuguntla',
    hasVerifiedCodeOrReport: true,
  },
  {
    id: 'movie-genre-classification',
    title: 'Movie Genre Classification',
    subtitle: 'NLP Multi-Class Synopsis Classifier',
    category: 'NLP & Speech',
    filterCategory: 'nlp-predictive',
    badge: 'NLP & Text Mining',
    statusBadge: 'Verified Model Pipeline',
    problemStatement:
      'Digital streaming catalogs contain vast textual synopsis databases requiring automated thematic tagging to improve recommendation discovery and catalog structuring.',
    overview:
      'An NLP classification model that parses unstructured movie plot summaries and predicts corresponding genre labels using TF-IDF feature extraction and multi-class Logistic Regression.',
    myContribution:
      'Designed text cleaning routines, extracted vocabulary n-grams from plot corpora, engineered train-test evaluation splits, and tuned regularization parameters for multi-label classification.',
    architectureDetails: [
      'Linguistic extraction pipeline analyzing narrative structure in plot text.',
      'Sublinear term frequency scaling applied through TfidfVectorizer to dampen outlier word counts.',
      'One-vs-Rest (OvR) Logistic Regression modeling multi-class boundary probabilities.',
    ],
    keyFeatures: [
      'Unstructured narrative text parsing and vocabulary vectorization',
      'Multi-class probabilistic genre prediction from plot summaries',
      'Comparative evaluation of token frequencies and n-gram impacts',
      'Evaluation metrics including macro F1-score and accuracy analysis',
    ],
    technologies: ['Python', 'Scikit-learn', 'TF-IDF Vectorization', 'Logistic Regression', 'Pandas'],
    githubUrl: 'https://github.com/Thanusri-tunuguntla',
    hasVerifiedCodeOrReport: true,
  },
  {
    id: 'customer-churn-prediction',
    title: 'Customer Churn Prediction',
    subtitle: 'Predictive Analytics & Retention Modeling',
    category: 'Predictive ML',
    filterCategory: 'nlp-predictive',
    badge: 'Predictive Data Analytics',
    statusBadge: 'Verified Analytics Pipeline',
    problemStatement:
      'Subscription and service businesses face substantial financial losses when customer defection is detected only after cancellation occurs, creating a need for proactive attrition propensity scoring.',
    overview:
      'A predictive analytics workflow utilizing supervised classification algorithms to analyze demographic, transactional, and behavioral signals to identify customers at risk of churn.',
    myContribution:
      'Handled exploratory data analysis (EDA), addressed missing values, performed categorical encoding (One-Hot / Label encoding), scaled numerical features, and trained classification models.',
    architectureDetails: [
      'Data preparation and cleaning pipeline handling missing values and outlier normalization.',
      'Feature engineering: Tenure grouping, payment method encoding, and interaction metrics.',
      'Classification modeling providing churn probability scores to segment customers into priority retention tiers.',
    ],
    keyFeatures: [
      'Customer behavioral analysis identifying top indicators of churn propensity',
      'Standardized feature scaling and categorical variable encoding',
      'Probabilistic churn risk scoring enabling targeted retention incentives',
      'ROC-AUC and precision-recall trade-off analysis',
    ],
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Classification Algorithms'],
    githubUrl: 'https://github.com/Thanusri-tunuguntla',
    hasVerifiedCodeOrReport: true,
  },
  {
    id: 'disease-prediction-chatbot',
    title: 'AI Disease Prediction Chatbot',
    subtitle: 'Symptom-Analysis Educational Health Prototype',
    category: 'AI & Healthcare',
    filterCategory: 'ai-ml',
    badge: 'Academic Healthcare Prototype',
    statusBadge: 'Educational Prototype',
    problemStatement:
      'Early health awareness is hindered when users lack simple ways to articulate multi-symptom patterns before consulting licensed medical professionals.',
    overview:
      'An interactive conversational prototype built to collect patient symptoms via guided chat steps and map reported indicators against machine learning classification models to highlight probable illness categories.',
    myContribution:
      'Implemented the conversational triage flow, designed symptom mapping logic, and engineered a clean user interface with precautionary disclaimers and immediate doctor-consultation advisories.',
    architectureDetails: [
      'Step-by-step diagnostic triage questionnaire collecting age, primary symptoms, and duration.',
      'Machine learning symptom-disease correlation matrix identifying probability categories.',
      'Precautionary routing system ensuring clinical disclaimers are prominently displayed with every recommendation.',
    ],
    keyFeatures: [
      'Interactive multi-turn conversational symptom intake flow',
      'Machine learning symptom mapping across common illness categories',
      'Emergency red-flag symptom warnings and physician referral reminders',
      'Accessible, clean interface with localized multilingual consideration',
    ],
    technologies: ['React', 'Python / ML Logic', 'Lucide React', 'Healthcare Data Mapping'],
    githubUrl: 'https://github.com/Thanusri-tunuguntla',
    hasVerifiedCodeOrReport: true,
    disclaimer:
      'Strictly an educational academic prototype. This application is not a clinical diagnostic tool and must never be used in place of professional medical evaluation.',
  },
  {
    id: 'crafthub-artisan-marketplace',
    title: 'CraftHub — AI Artisan Workplace',
    subtitle: 'AI-Powered Digital Commerce for Local Artisans',
    category: 'AI & Web',
    filterCategory: 'web-fullstack',
    badge: 'Applied AI & E-Commerce',
    statusBadge: 'Repository Implementation',
    problemStatement:
      'Traditional handcraft artisans often struggle to transition to digital e-commerce due to barriers in catalog copywriting, competitive pricing analysis, and online store design.',
    overview:
      'An online marketplace prototype empowering local craftspeople with automated AI tools for generating attractive product descriptions and recommending competitive market pricing.',
    myContribution:
      'Created the responsive catalog interface, implemented client-side product filtering, and integrated generative AI prompt templates for automated product description generation.',
    architectureDetails: [
      'Responsive web storefront designed for accessibility on mobile devices.',
      'AI Description Generator: Prompt pipeline transforming basic product attributes into captivating buyer-ready descriptions.',
      'Pricing suggestion logic based on material inputs and craftsmanship effort.',
    ],
    keyFeatures: [
      'Clean artisan storefront showcasing handcrafted regional goods',
      'AI-assisted product description and title generator',
      'Category-based product filtering and pricing recommendation module',
      'Lightweight, high-speed responsive user interface',
    ],
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'AI Copy Generation', 'Responsive Web Design'],
    githubUrl: 'https://github.com/Thanusri-tunuguntla/AI-FOR-LOCAL-ARTISANS',
    hasVerifiedCodeOrReport: true,
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Programming Languages',
    description: 'Core languages utilized for algorithm implementation, ML modeling, and web applications.',
    iconName: 'Code',
    skills: [
      { name: 'Python', levelDescription: 'Core language for ML pipelines, NLP, and data manipulation', featuredIn: 'All AI/ML Projects' },
      { name: 'SQL', levelDescription: 'Relational data querying, schema design, and table joins', featuredIn: 'DBMS Coursework & Analytics' },
      { name: 'JavaScript (ES6+)', levelDescription: 'Modern frontend development, asynchronous API calls', featuredIn: 'NutriRefer AI & React Apps' },
      { name: 'C', levelDescription: 'Memory fundamentals, pointers, algorithms (Cisco Essentials certified)', featuredIn: 'Academic Foundations' },
      { name: 'HTML5 & CSS3', levelDescription: 'Semantic structure, responsive layouts, modern design tokens', featuredIn: 'All Web Projects' },
    ],
  },
  {
    category: 'AI & Machine Learning',
    description: 'Theoretical foundations and practical implementations across predictive and generative systems.',
    iconName: 'BrainCircuit',
    skills: [
      { name: 'Machine Learning Fundamentals', levelDescription: 'Supervised & unsupervised learning, cross-validation, metrics', featuredIn: 'Classification Lab Work' },
      { name: 'Natural Language Processing (NLP)', levelDescription: 'Text tokenization, stop-word removal, corpus preprocessing', featuredIn: 'Spam SMS & Movie Genre Classifier' },
      { name: 'TF-IDF Vectorization', levelDescription: 'Sparse feature representation for text classification', featuredIn: 'Spam SMS, Movie Classification, Nirikshan' },
      { name: 'Logistic Regression & Classification', levelDescription: 'Binary and multi-class probabilistic classification', featuredIn: 'Spam SMS & Movie Genre Models' },
      { name: 'Predictive Analytics', levelDescription: 'Propensity modeling, churn risk evaluation, feature analysis', featuredIn: 'Customer Churn Prediction' },
      { name: 'Anomaly Detection', levelDescription: 'Isolation Forest algorithms for multi-dimensional outlier detection', featuredIn: 'NIRIKSHAN AI (SIH26102)' },
      { name: 'Prompt Engineering', levelDescription: 'System prompts, few-shot conditioning, structured JSON output', featuredIn: 'IBM Certified & NutriRefer AI' },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    description: 'Core machine learning and scientific computing libraries utilized for data processing and predictive modeling.',
    iconName: 'Layers',
    skills: [
      { name: 'Scikit-learn', levelDescription: 'Supervised & unsupervised model training, pipelines, and evaluation metrics', featuredIn: 'SMS & Churn Modeling, Lab Experiments' },
      { name: 'Pandas', levelDescription: 'Data wrangling, cleaning, tabular exploration, and feature engineering', featuredIn: 'Classification Workflows & ML Labs' },
      { name: 'NumPy', levelDescription: 'High-performance n-dimensional array manipulation and mathematical operations', featuredIn: 'Applied Machine Learning Pipelines' },
    ],
  },
  {
    category: 'Data & Databases',
    description: 'Storage engines, schemas, and local state management strategies.',
    iconName: 'Database',
    skills: [
      { name: 'Database Management Systems (DBMS)', levelDescription: 'Normalization, ACID properties, relational design', featuredIn: 'Core Academic Curriculum' },
      { name: 'SQL Querying', levelDescription: 'Complex queries, aggregations, data extraction', featuredIn: 'Library System & Analytics' },
      { name: 'PostgreSQL', levelDescription: 'Relational database handling with GIS spatial considerations', featuredIn: 'NIRIKSHAN AI Concept' },
      { name: 'Browser LocalStorage', levelDescription: 'Client-side state caching, streak persistence, and user profiles', featuredIn: 'NutriRefer AI Platform' },
    ],
  },
  {
    category: 'Computer Science Foundations & Tools',
    description: 'Foundational principles ensuring scalable, maintainable, and verifiable software.',
    iconName: 'Terminal',
    skills: [
      { name: 'Data Structures & Algorithms', levelDescription: 'Arrays, linked lists, trees, graphs, sorting, searching', featuredIn: 'LeetCode & CodeChef' },
      { name: 'Problem Solving', levelDescription: 'Structured algorithmic breakdown and complexity optimization', featuredIn: 'Competitive Coding Profiles' },
      { name: 'Git & GitHub', levelDescription: 'Version control, branch management, collaborative pull requests', featuredIn: 'All Project Repositories' },
      { name: 'RESTful API Integration', levelDescription: 'Connecting frontend clients with AI and cloud services', featuredIn: 'Gemini API & Deep Translator' },
      { name: 'Explainable AI Concepts', levelDescription: 'Feature attribution, decision-support transparency', featuredIn: 'NIRIKSHAN AI Project' },
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-codealpha',
    role: 'Artificial Intelligence Intern',
    organization: 'CodeAlpha',
    period: 'May 10, 2026 – June 10, 2026',
    location: 'Virtual / Remote',
    type: 'Internship',
    status: 'Completed',
    responsibilities: [
      'Built practical AI and NLP software tasks focusing on multilingual communication and text processing.',
      'Developed the AI Language Translator using Python, Streamlit, Deep Translator APIs, and gTTS for synchronized audio speech output.',
      'Implemented error handling for character encodings and responsive UI layout for multi-language selection.',
    ],
    outcomes: [
      'Delivered a fully functional translation platform supporting over 30 languages with integrated speech generation.',
      'Reinforced understanding of API integration, lightweight web frameworks, and applied NLP.',
    ],
    verifiedNote: 'Supported by official CodeAlpha selection and internship documentation.',
  },
  {
    id: 'exp-sih-nirikshan',
    role: 'Team Contributor & AI Architect',
    organization: 'Smart India Hackathon (SIH 2026)',
    period: '2026',
    location: 'Visakhapatnam, India',
    type: 'Hackathon & R&D',
    status: 'Project Submission',
    responsibilities: [
      'Collaborated on problem statement SIH26102: "Development of an AI-powered system to detect anomalies, fraud, and inefficiencies in MPLAD Scheme implementation".',
      'Helped design the unsupervised anomaly detection architecture utilizing Isolation Forest and TF-IDF duplicate project detection.',
      'Formulated the "Why Flagged?" explainable AI decision-support logic to assist administrative oversight bodies with actionable insights.',
    ],
    outcomes: [
      'Produced verified architecture specifications and complete demonstration video (SIH Problem Statement SIH26102).',
      'Emphasized responsible AI, ensuring statistical anomalies serve as audit leads rather than automated fraud claims.',
    ],
    verifiedNote: 'Verified by SIH documentation and published video walkthrough (PS ID: SIH26102).',
  },
  {
    id: 'exp-inamigos',
    role: 'AI Web Development Intern',
    organization: 'InAmigos Foundation',
    period: 'May 2026',
    location: 'Remote',
    type: 'Internship',
    status: 'Project Submission',
    responsibilities: [
      'Engaged in NGO digital presence enhancement and UI/UX feature planning for non-profit fundraising.',
      'Submitted comprehensive feature ideation and wireframe designs for frictionless donation portals, recurring gift subscriptions, and impact metric storytelling.',
      'Explored integration of automated assistive chatbots for NGO visitor queries.',
    ],
    outcomes: [
      'Submitted Task 4: NGO Website Essential Features visual layout and designer documentation (Registered CSR00083159).',
    ],
    verifiedNote: 'Supported by official offer letter and Task 4 submission artifacts.',
  },
  {
    id: 'exp-codsoft',
    role: 'Machine Learning Practice & Project Work',
    organization: 'CodSoft',
    period: 'June 2026',
    location: 'Remote',
    type: 'Practical Learning',
    status: 'Project Submission',
    responsibilities: [
      'Undertook hands-on machine learning assignment tasks centered on predictive analytics and text classification.',
      'Built experiments covering SMS spam detection, movie genre text classification, and customer churn prediction.',
      'Evaluated machine learning algorithms, baseline performance, and confusion matrices using Scikit-learn.',
    ],
    outcomes: [
      'Completed practical machine learning pipelines in Python demonstrating mastery of feature engineering and evaluation metrics.',
    ],
    verifiedNote: 'Supported by project repositories and development records.',
  },
  {
    id: 'exp-nutrirefer',
    role: 'Contributor — Community Service Project',
    organization: "Vignan's Institute of Information Technology / Grama Sachivalayam",
    period: 'May 11, 2026 – June 20, 2026',
    location: 'Gajuwaka, Visakhapatnam, India',
    type: 'Academic / Community Project',
    status: 'Completed',
    responsibilities: [
      'Conducted field surveys across diverse socio-economic community segments in Visakhapatnam to identify nutrition and hydration awareness gaps.',
      'Contributed to the development of the NutriRefer AI web platform combining React, Vite, Material UI, and Google Gemini AI API.',
      'Implemented automated 20-point nutrition report generation, food calorie estimation, hydration streaks, and Recharts analytics dashboards.',
      'Demonstrated the working application in community awareness sessions, collecting feedback from local participants.',
    ],
    outcomes: [
      'Formally submitted and approved Community Service Project report under faculty guide Prof. Y. Swathi (CSE-AI).',
      'Earned official Certificate of Project Completion from Grama Sachivalayam, Gajuwaka (June 29, 2026).',
    ],
    verifiedNote: 'Verified by academic project documentation and signed completion certificate.',
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'cert-ibm-prompt',
    title: 'Prompt Engineering for Everyone',
    issuer: 'Cognitive Class / IBM Developer Skills Network',
    date: 'December 11, 2025',
    category: 'GenAI & LLMs',
    credentialId: 'cd0a24ecc1584428b06531d8ef347df6',
    credentialUrl: 'https://courses.cognitiveclass.ai/certificates/cd0a24ecc1584428b06531d8ef347df6',
    verified: true,
    notes: 'Course code AI0117EN. Validated passing grade in LLM prompting methodologies, system prompt design, and iterative refinement.',
  },
  {
    id: 'cert-anthropic-fluency',
    title: 'AI Fluency: Framework & Foundations',
    issuer: 'Anthropic (with UCC, HEA & National Forum)',
    date: '2026',
    category: 'GenAI & LLMs',
    verified: true,
    notes: 'Official certificate of completion covering conceptual foundations, responsible deployment, and cognitive frameworks for AI systems.',
  },
  {
    id: 'cert-anthropic-claude-platform',
    title: 'Claude Platform 101',
    issuer: 'Anthropic',
    date: '2026',
    category: 'GenAI & LLMs',
    verified: true,
    notes: 'Official certificate of completion covering the Claude developer ecosystem, API architecture, parameters, and conversational workflows.',
  },
  {
    id: 'cert-anthropic-claude-code',
    title: 'Claude Code in Action',
    issuer: 'Anthropic',
    date: '2026',
    category: 'GenAI & LLMs',
    verified: true,
    notes: 'Official certificate of completion focusing on agentic software development, terminal-integrated coding assistants, and automated engineering.',
  },
  {
    id: 'cert-anthropic-mcp-intro',
    title: 'Introduction to Model Context Protocol (MCP)',
    issuer: 'Anthropic',
    date: '2026',
    category: 'GenAI & LLMs',
    verified: true,
    notes: 'Official certificate of completion on standardizing context channels, tool invocation, and resource connections between LLMs and client systems.',
  },
  {
    id: 'cert-anthropic-mcp-adv',
    title: 'Model Context Protocol: Advanced Topics',
    issuer: 'Anthropic',
    date: '2026',
    category: 'GenAI & LLMs',
    verified: true,
    notes: 'Official certificate covering advanced MCP architectures, custom server implementations, and secure agentic tools.',
  },
  {
    id: 'cert-anthropic-bedrock',
    title: 'Claude with Amazon Bedrock',
    issuer: 'Anthropic',
    date: '2026',
    category: 'GenAI & LLMs',
    verified: true,
    notes: 'Official certificate detailing enterprise cloud deployment of Claude models on AWS infrastructure with managed security.',
  },
  {
    id: 'cert-anthropic-vertex',
    title: 'Claude with Google Vertex AI',
    issuer: 'Anthropic',
    date: '2026',
    category: 'GenAI & LLMs',
    verified: true,
    notes: 'Official certificate on deploying and integrating Anthropic foundational models within the Google Cloud Vertex AI suite.',
  },
  {
    id: 'cert-anthropic-cowork',
    title: 'Introduction to Claude Cowork',
    issuer: 'Anthropic',
    date: '2026',
    category: 'GenAI & LLMs',
    verified: true,
    notes: 'Official certificate covering collaborative human-AI workflows, task delegation, and productivity integration.',
  },
  {
    id: 'cert-anthropic-students',
    title: 'AI Fluency for Students',
    issuer: 'Anthropic',
    date: '2026',
    category: 'GenAI & LLMs',
    verified: true,
    notes: 'Official certificate on student-centric critical evaluation of AI tools, academic integrity, and effective prompt interaction.',
  },
  {
    id: 'cert-anthropic-teaching',
    title: 'Teaching the AI Fluency Framework',
    issuer: 'Anthropic',
    date: '2026',
    category: 'GenAI & LLMs',
    verified: true,
    notes: 'Official certificate on educational methodologies for explaining artificial intelligence capabilities and limitations.',
  },
  {
    id: 'cert-deloitte-cyber',
    title: 'Cyber Job Simulation',
    issuer: 'Deloitte (via Forage)',
    date: 'March 2026',
    category: 'Job Simulations',
    verified: true,
    notes: 'Practical simulation on threat modeling, cybersecurity incident analysis, and defense strategy.',
  },
  {
    id: 'cert-tata-genai',
    title: 'GenAI Powered Data Analytics Job Simulation',
    issuer: 'Tata (via Forage)',
    date: 'February 2026',
    category: 'Job Simulations',
    verified: true,
    notes: 'Practical simulation applying Generative AI tools to business data analytics, report synthesis, and trend forecasting.',
  },
  {
    id: 'cert-cisco-c',
    title: 'C Essentials 1',
    issuer: "Cisco Networking Academy / Vignan's Institute (Autonomous)",
    date: 'March 28, 2025',
    category: 'Programming & Web',
    verified: true,
    notes: 'Rigorous course covering C syntax, control flows, memory pointers, arrays, and structured algorithm design.',
  },
  {
    id: 'cert-cisco-html',
    title: 'HTML Essentials',
    issuer: "Cisco Networking Academy / Vignan's Institute (Autonomous)",
    date: 'August 11, 2025',
    category: 'Programming & Web',
    verified: true,
    notes: 'Structured training in semantic HTML5 markup, web accessibility standards, forms, and browser rendering.',
  },
  {
    id: 'cert-sololearn-python',
    title: 'Introduction to Python',
    issuer: 'SoloLearn',
    date: 'August 29, 2025',
    category: 'Programming & Web',
    credentialId: 'CC-TWISFMOM',
    verified: true,
    notes: 'Fundamental certification in Python programming, control logic, collections, and object-oriented basics.',
  },
  {
    id: 'cert-hp-cyber',
    title: 'Introduction to Cybersecurity Awareness',
    issuer: 'HP LIFE Foundation',
    date: 'March 16, 2026',
    category: 'Cybersecurity',
    verified: true,
    notes: 'Online course covering modern cyber threats, authentication hygiene, and data protection strategies.',
  },
];

export const CODING_PROFILES: CodingProfile[] = [
  {
    platform: 'GitHub',
    username: 'Thanusri-tunuguntla',
    url: 'https://github.com/Thanusri-tunuguntla',
    description: 'Repositories covering AI applications, ML classification pipelines, and web prototypes.',
    iconName: 'Github',
    badge: 'Code Repositories',
  },
  {
    platform: 'LeetCode',
    username: 'ThanusriTunuguntla',
    url: 'https://leetcode.com/u/ThanusriTunuguntla/',
    description: 'Continuous practice in Data Structures, algorithmic complexity, and problem solving.',
    iconName: 'Code2',
    badge: 'Algorithms & DSA',
  },
  {
    platform: 'CodeChef',
    username: 'thanusri09',
    url: 'https://www.codechef.com/users/thanusri09',
    description: 'Competitive coding contests and foundational algorithm challenges.',
    iconName: 'Award',
    badge: 'Competitive Practice',
  },
  {
    platform: 'LinkedIn',
    username: 'thanusri-tunuguntla-a619352b0',
    url: 'https://www.linkedin.com/in/thanusri-tunuguntla-a619352b0',
    description: 'Professional networking, technical updates, and internship outreach.',
    iconName: 'Linkedin',
    badge: 'Professional Network',
  },
];

export const EDUCATION = [
  {
    institution: "Vignan's Institute of Information Technology (Autonomous)",
    degree: 'Bachelor of Technology (B.Tech)',
    specialization: 'Computer Science and Engineering (Artificial Intelligence)',
    period: '2024 – 2028',
    location: 'Visakhapatnam, Andhra Pradesh, India',
    status: 'In Progress (2nd Year)',
    description:
      'Rigorous curriculum combining core computer science foundations with specialized artificial intelligence disciplines. Active focus on Data Structures & Algorithms, Machine Learning, Database Management Systems, and practical AI application development.',
    highlights: [
      'Specialized coursework: Machine Learning, Artificial Intelligence, Database Management Systems, Data Structures in C & Python.',
      'Contributed to the NutriRefer AI Community Service Project, presenting working software to community members.',
      'Active participant in technical hackathons (SIH 2026 NIRIKSHAN AI submission).',
    ],
  },
  {
    institution: 'Narayana Junior College',
    degree: 'Intermediate (Higher Secondary)',
    specialization: 'Mathematics, Physics, Chemistry (MPC)',
    period: '2022 – 2024',
    location: 'Visakhapatnam, Andhra Pradesh, India',
    status: 'Completed',
    description:
      'Strong quantitative grounding in higher mathematics, analytical calculus, physics, and chemistry.',
    highlights: ['Focus on analytical problem solving, logical reasoning, and mathematical modeling.'],
  },
];
