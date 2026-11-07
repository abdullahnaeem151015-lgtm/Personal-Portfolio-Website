// Central, editable portfolio content. See README.md ("Maintaining content").

export const profile = {
  name: "Abdullah Naeem",
  title: "Applied Machine Learning & Software Developer",
  education: "BS Computer Science undergraduate",
  headshot: {
    src: "/images/abdullah-naeem-640.webp",
    srcSet: "/images/abdullah-naeem-640.webp 640w, /images/abdullah-naeem-1152.webp 1152w",
    alt: "Portrait of Abdullah Naeem, applied machine learning and software developer",
    width: 1152,
    height: 768,
  },
  headline: "I build data-driven applications that turn information into useful decisions.",
  intro:
    "I work with Python, machine learning, SQL, and web technologies to turn raw data into meaningful insights, build predictive models, and develop applications that address practical problems.",
  focus: ["Forecasting", "Recommendation systems", "Data analysis", "ML-backed web apps"],
  aboutHeading: "Computer Science undergraduate passionate about building intelligent systems",
  about: [
    "I'm a BS Computer Science undergraduate with hands-on experience in Python, SQL, data analysis, machine learning, and software development. Gained practical experience through technical projects, internships, and freelance work, with a focus on delivering useful, data-driven solutions.",
    "Passionate about applying my technical and problem-solving skills to help businesses improve workflows, make informed decisions, and build practical software solutions.",
  ],
  /** Short, factual points sho wn beside the About text. */
  aboutPoints: [
    { label: "Education", value: "BS Computer Science (undergraduate)" },
    { label: "Experience", value: "2 internships: machine learning and full-stack development" },
    { label: "Work style", value: "End-to-end and evidence-led: clean and explore the data, test simple baselines before complex models, then deliver a usable app or report with clear recommendations and stated limitations" },
  ],
  targetRoles: "Junior machine learning, data analyst, junior data scientist and Python/software development roles",
};

export type Service = {
  title: string;
  problem: string;
  deliverables: string[];
  /** Slug of a related project, if one exists. */
  project: string | null;
  projectNote: string;
};

export const servicesNote =
  "Scoped for small, practical projects such as prototypes and analyses. Past work is shown as case studies, not client engagements.";

export const services: Service[] = [
  {
    title: "Business data analysis & reporting",
    problem: "Sales, customer or operations data sits in spreadsheets or databases and is hard to turn into decisions.",
    deliverables: ["Data cleaning and exploratory analysis", "Findings and recommendations on sales, customers and profitability", "SQL queries and Excel/Python workflows"],
    project: "ecommerce-sales-customer-case-study",
    projectNote: "E-commerce sales and profitability case study",
  },
  {
    title: "Forecasting prototypes",
    problem: "Planning needs estimates of future sales or values, with a clear view of how reliable they are.",
    deliverables: ["Baseline vs. model comparison on a time-based holdout", "Streamlit interface for upload and forecast", "Documented assumptions and limitations"],
    project: "future-sales-forecasting",
    projectNote: "Rossmann store sales forecasting",
  },
  {
    title: "Full-stack & database applications",
    problem: "A team needs a working application on top of its data, with or without a machine learning model inside it.",
    deliverables: ["FastAPI and SQL Server backend, or a C#/ADO.NET desktop app", "Angular frontend for import, review and results", "A model integrated into the flow where it adds value"],
    project: "arvf-engine",
    projectNote: "Full-stack residual value prototype",
  },
  {
    title: "Recommendation systems",
    problem: "Users face large catalogues and need relevant next items.",
    deliverables: ["Content-based and collaborative approaches compared", "Interactive app with adjustable parameters", "Explanation of what scores mean"],
    project: "personalized-course-recommender",
    projectNote: "Course recommendations from learning history",
  },
  {
    title: "Automation & LLM tool integration",
    problem: "Repetitive document tasks and tools that LLMs cannot reach on their own.",
    deliverables: ["Python scripts and CLI tools", "Gemini function calling with an MCP server", "Learning-stage prototypes, not autonomous platforms"],
    project: "gemini-mcp-document-agent",
    projectNote: "Gemini + MCP document tools",
  },
];

export const contact = {
  email: "abdullahnaeem151015@gmail.com",
  phone: "+92 312 7733376",
  linkedin: "https://www.linkedin.com/in/abdullah-naeem-736103325/",
  github: "https://github.com/abdullahnaeem151015-lgtm",
};

export type SkillIcon = "code" | "layout" | "database" | "brain" | "table" | "chart" | "sparkles" | "wrench";
/** score: 0-100 estimate of how often the skill appears across my public GitHub repositories (see skillsNote). */
export type Skill = { name: string; score: number };
export type SkillGroup = { title: string; icon: SkillIcon; items: Skill[] };

/** Items listed here are highlighted subtly as most-used tools. */
export const keySkills = ["Python", "Angular", "C#", "Model Context Protocol (MCP)", "SQL Server", "SQL", "pandas", "scikit-learn", "FastAPI", "Streamlit"];

export const skillsNote =
  "Below are the key skills and tools I have used so far in my projects. These are given percentage scores upon how frequently I have used them and my proficiency with them.";

const s = (name: string, score: number): Skill => ({ name, score });

export const skillGroups: SkillGroup[] = [
  { title: "Programming Languages", icon: "code", items: [s("Python", 95), s("SQL", 80), s("TypeScript", 50), s("C#", 60), s("JavaScript", 40), s("C++", 30)] },
  { title: "Frontend Development", icon: "layout", items: [s("Angular", 60), s("HTML", 60), s("CSS", 60), s("React", 10)] },
  { title: "Backend & Databases", icon: "database", items: [s("Microsoft SQL Server", 50), s("FastAPI", 60), s("REST APIs", 35), s("SQLAlchemy", 30), s("Oracle SQL", 50)] },
  { title: "Machine Learning", icon: "brain", items: [s("scikit-learn", 80), s("Regression", 80), s("XGBoost", 60), s("Classification", 80), s("LightGBM", 50), s("CatBoost", 55), s("Recommendation Systems", 75), s("imbalanced-learn (SMOTE)", 50), s("TensorFlow", 40)] },
  { title: "Data Analysis & Processing", icon: "table", items: [s("pandas", 85), s("Data Cleaning", 80), s("NumPy", 75), s("Model Evaluation", 70), s("Feature Engineering", 65), s("Exploratory Data Analysis", 60)] },
  { title: "Applications & Data Visualization", icon: "chart", items: [s("Streamlit", 75), s("Microsoft Excel", 55), s("Matplotlib", 50), s("Google Sheets", 55), s("Plotly", 50)] },
  { title: "AI & LLM Integration", icon: "sparkles", items: [s("Model Context Protocol (MCP)", 50), s("Gemini API", 50), s("Function Calling", 50)] },
  { title: "Development Tools", icon: "wrench", items: [s("Git", 85), s("GitHub", 85), s("VS Code", 75), s("Jupyter Notebook", 60), s("Google Colab", 70)] },
];

export type Certification = {
  name: string;
  issuer: string;
  /** Only verified certifications are shown publicly. */
  verified: boolean;
  credentialUrl: string | null;
  issued: string | null;
};

export const certifications: Certification[] = [
  { name: "Google Data Analytics Professional Certificate", issuer: "Google", verified: true, credentialUrl: "https://coursera.org/verify/GVU8I8BNNKPB", issued: "2026-04-30" },
  { name: "Machine Learning Specialization", issuer: "DeepLearning.AI / Stanford Online", verified: true, credentialUrl: "https://coursera.org/verify/specialization/8QF9PSKSK9J0", issued: "2026-07-13" },
  { name: "Introduction to Model Context Protocol", issuer: "Anthropic", verified: true, credentialUrl: "https://verify.skilljar.com/c/6ierxj5vsnek", issued: "2026-08-08" },
  { name: "AI for Everyone", issuer: "DeepLearning.AI", verified: true, credentialUrl: "https://coursera.org/verify/PWWNTXLJ8T75", issued: "2026-06-18" },
  { name: "AI Capabilities and Limitations", issuer: "Anthropic", verified: true, credentialUrl: "https://verify.skilljar.com/c/skqpaey98xrc", issued: "2026-07-15" },
];

export type Experience = {
  organization: string;
  role: string;
  type: "internship" | "employment";
  summary: string;
  outcome: string;
  relatedProject: string | null;
};

export const experience: Experience[] = [
  {
    organization: "NETSOL Technologies",
    role: "Full Stack Development Intern",
    type: "internship",
    summary: "ARVF Engine brought portfolio review and model estimates into a single automotive leasing prototype.",
    outcome:
      "Brought vehicle portfolio import, saved lease-end estimates and comparison against the original residual value into one full-stack prototype.",
    relatedProject: "arvf-engine",
  },
  {
    organization: "FlyRankAI",
    role: "Machine Learning Intern",
    type: "internship",
    summary: "A content-review study turned search-performance data into a ranked queue with reason codes and recommended actions.",
    outcome:
      "Delivered a transparent baseline, model comparison, interpretation and a prioritized review queue.",
    relatedProject: "content-refresh-recommendation-study",
  },
];

export type Screenshot = { src: string; alt: string; caption: string };
export type ProjectStatus = "prototype" | "case-study" | "academic" | "completed";
export type Source = { label: string; url: string };

export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  businessProblem: string;
  objective: string;
  solution: string;
  technologies: string[];
  features: string[];
  /** Real images from the public repository only. Empty = labeled workflow placeholder. */
  screenshots: Screenshot[];
  /** Workflow steps shown when no real screenshots exist, and as process evidence. */
  workflow: string[];
  results: string[];
  limitations: string[];
  futureImprovements: string[];
  githubUrl: string;
  /** Only set when verified publicly working. */
  demoUrl: string | null;
  demoVerified: boolean;
  /** Candidate demo awaiting verification; never rendered. */
  displayOrder: number;
  status: ProjectStatus;
  sources: Source[];
  /** Featured case study vs. concise card in "Other Technical Projects". */
  featured: boolean;
  /** Filter category. */
  tag: ProjectTag;
  /** How the work was evaluated, drawn only from the repository README/outputs. */
  evaluation: string[];
  /** Extra public resources (notebooks, documentation). */
  resources: Source[];
};
export type ProjectTag = "Machine Learning" | "Data Analysis" | "Forecasting" | "Recommendation" | "Full-Stack" | "LLM & Automation" | "Desktop & Database";
export const projectTags: ProjectTag[] = ["Machine Learning", "Data Analysis", "Forecasting", "Recommendation", "Full-Stack", "LLM & Automation", "Desktop & Database"];

const GH = "https://github.com/abdullahnaeem151015-lgtm";
const img = (f: string) => `/images/projects/${f}`;

export const projects: Project[] = [
  {
    slug: "arvf-engine",
    title: "Asset Residual Value Forecasting Engine",
    category: "Full-Stack ML Prototype / Decision Support",
    description:
      "A full-stack prototype that imports a vehicle lease portfolio, estimates market price at the projected lease-end vehicle state, and compares it with the original residual value.",
    businessProblem:
      "Residual value (RV) set at lease start can drift from what a vehicle is worth at lease end. Reviewing that gap across a portfolio usually means switching between spreadsheets and separate tools.",
    objective:
      "Bring portfolio import, lease information, a lease-end price estimate and the comparison with the original RV into one application that a reviewer can use.",
    solution:
      "An Angular + TypeScript frontend talks to a FastAPI backend with SQL Server via SQLAlchemy. A VotingRegressor combining XGBoost, LightGBM and CatBoost estimates the market price at the projected lease-end vehicle state. Forecasts can be saved and compared with the original RV to show potential exposure.",
    technologies: ["Angular", "TypeScript", "Python", "FastAPI", "SQL Server", "SQLAlchemy", "XGBoost", "LightGBM", "CatBoost"],
    features: [
      "CSV/XLSX portfolio import with validation",
      "Vehicle search and filtering",
      "Lease information view",
      "Lease-end market price forecast",
      "Comparison with original RV and potential exposure",
      "Saved forecasts",
      "Model transparency information",
      "Kaggle notebook view for detailed model training and evaluation"
    ],
    screenshots: [],
    workflow: ["Import CSV/XLSX portfolio", "Validate rows", "Search & select vehicle", "Project lease-end state", "VotingRegressor estimate", "Compare with original RV", "Save forecast"],
    results: [
      "Delivered a database-backed portfolio workflow from validated CSV/XLSX import to saved lease-end estimates and original-RV comparison. The repository documents the implemented flow.",
    ],
    limitations: [
      "Trained on public market-price data; not validated on commercial lease-end outcomes.",
      "A decision-support demonstration, not production financial software.",
    ],
    futureImprovements: [
      "Validate against real lease-end outcomes if such data becomes available.",
      "Add uncertainty ranges to estimates.",
      "Expand audit history and add operational monitoring for saved forecasts.",
    ],
    githubUrl: "https://github.com/abdullahnaeem151015-lgtm/ASSET-RESIDUAL-VALUE-FORECASTING-ENGINE",
    demoUrl: null,
    demoVerified: false,
    displayOrder: 2,
    status: "prototype",
    sources: [{ label: "Repository README", url: "https://github.com/abdullahnaeem151015-lgtm/ASSET-RESIDUAL-VALUE-FORECASTING-ENGINE" }],
    featured: true,
    tag: "Full-Stack",
    evaluation: [
      "The model estimates vehicle market price and was trained on a public vehicle dataset; the in-app model information page links to the notebook with model training and evaluation.",
      "No accuracy figures are published in the repository README, so none are quoted here.",
      "Not validated against historical commercial lease-end residual values.",
    ],
    resources: [],
  },
  {
    slug: "future-sales-forecasting",
    title: "Future Sales Forecasting Using Machine Learning",
    category: "Applied Machine Learning / Forecasting",
    description:
      "Store-level sales forecasting on Rossmann data, comparing a simple baseline features set with linear and gradient-boosted models, delivered through a Streamlit app.",
    businessProblem:
      "Retail stores need daily sales estimates for planning, and those sales depend on calendar effects, promotions and competition.",
    objective:
      "Build a forecasting pipeline evaluated on a time-based holdout and make it usable through a simple upload-and-forecast interface.",
    solution:
      "Rossmann drug stores sales data is taken for building the forecasting pipeline, missing data is cleaned, and calendar, promotion, competition, lag and rolling features are engineered. A simple baseline is compared with Linear Regression, XGBoost, LightGBM and CatBoost; XGBoost is then tuned. The last 70 days are held out for evaluation using RMSE, MAE, RMSPE and R².",
    technologies: ["Python", "pandas", "NumPy", "scikit-learn", "XGBoost", "LightGBM", "CatBoost", "Streamlit"],
    features: [
      "Merge of sales history with store information",
      "Missing-data cleaning",
      "Calendar, promotion and competition features",
      "Lag and rolling features",
      "Baseline vs. model comparison",
      "Tuned XGBoost",
      "Streamlit upload, store inputs, forecast chart and download",
    ],
    screenshots: [],
    workflow: ["Load history + store info", "Clean missing data", "Engineer features", "Baseline", "Compare models", "Tune XGBoost", "Last-70-day holdout", "Streamlit forecast"],
    results: [
      "Evaluated on a last-70-days time holdout with RMSE, MAE, RMSPE and R². See the repository for reported values.",
    ],
    limitations: [
      "Historical validation does not guarantee future accuracy.",
      "Single dataset (Rossmann); results may not transfer to other retailers.",
    ],
    futureImprovements: [
      "Rolling-origin backtesting across several periods.",
      "Prediction intervals alongside point forecasts.",
    ],
    githubUrl: `https://github.com/abdullahnaeem151015-lgtm/Future-Sales-Forecasting-using-Machine-Learning`,
    demoUrl: "https://future-sales-forecasting-using-machine-learning-nfankfsc9w3n96.streamlit.app/",
    demoVerified: true,
    displayOrder: 3,
    status: "completed",
    sources: [{ label: "Repository README", url: `https://github.com/abdullahnaeem151015-lgtm/Future-Sales-Forecasting-using-Machine-Learning` }],
    featured: true,
    tag: "Forecasting",
    evaluation: [
      "Time-based validation: the final 70 days were held out instead of a random split.",
      "Metrics: RMSE, MAE, RMSPE and R², compared against a simple baseline and across Linear Regression, XGBoost, LightGBM and CatBoost; tuned and untuned XGBoost were compared.",
      "Metric values are shown in the Streamlit dashboard and notebook; they are not copied here.",
    ],
    resources: [{ label: "Kaggle notebook", url: "https://www.kaggle.com/code/abdullahnaeem151015/rossmann-sales-forecasting-with-xgboost" }],
  },
  {
    slug: "content-refresh-recommendation-study",
    title: "Machine Learning Content Refresh Study",
    category: "Machine Learning Case Study / Decision Support",
    description:
      "An internship capstone that prioritizes high-impression, low-CTR pages for human review and produces a ranked review queue with reasons and recommended actions.",
    businessProblem:
      "Content teams have more pages than they can review. Pages with high impressions but low click-through rate are candidates, but choosing which to review first is manual.",
    objective:
      "Compare transparent rules and models for flagging refresh candidates, and output a prioritized queue a reviewer can act on.",
    solution:
      "Proxy labels mark high-impression, low-CTR pages. Features used to construct the target are excluded. Logistic regression, a decision tree and a random forest are trained with SMOTE applied to training data only, using an earlier June 1–24, 2026 training period and a June 25–30 test period.",
    technologies: ["Python", "pandas", "scikit-learn", "imbalanced-learn (SMOTE)", "Matplotlib", "Jupyter Notebook"],
    features: [
      "Proxy labels for high impressions / low CTR",
      "Exclusion of target-constructing features",
      "Logistic regression, decision tree, random forest",
      "SMOTE on training data only",
      "Time-based train/test split",
      "Ranked queue with priority scores, reason codes and recommended actions",
    ],
    screenshots: [
      { src: img("crs-baseline.jpg"), alt: "Chart from the repository comparing baseline rules for flagging refresh candidates", caption: "Baseline rule graph (repository output)" },
      { src: img("crs-rule.jpg"), alt: "Chart comparing the global CTR rule and the position-tier rule across comparisons", caption: "Final rule comparison (repository output)" },
      { src: img("crs-perm.jpg"), alt: "Bar chart of permutation feature importance from the repository", caption: "Permutation importance (repository output)" },
    ],
    workflow: ["Search performance data", "Proxy labels", "Remove target-constructing features", "Time split Jun 1–24 / 25–30", "SMOTE on train", "Compare models", "Ranked review queue"],
    results: [
      "Repository-reported: random forest had the strongest ROC-AUC.",
      "Repository-reported: logistic regression had the strongest recall.",
      "Repository-reported: average ranking position was the strongest permutation feature.",
      "Repository-reported: the Global CTR rule won 12 of 15 comparisons vs. 3 for the position-tier rule.",
    ],
    limitations: [
      "Single holdout period.",
      "Labels are proxies, not observed refresh outcomes.",
      "No demonstrated post-refresh improvement.",
    ],
    futureImprovements: [
      "Track actual outcomes after refreshes to replace proxy labels.",
      "Evaluate across multiple time windows.",
    ],
    githubUrl: `https://github.com/abdullahnaeem151015-lgtm/Machine-learning-content-refresh-study`,
    demoUrl: null,
    demoVerified: false,
    displayOrder: 1,
    status: "case-study",
    sources: [{ label: "Repository README and outputs/charts", url: `https://github.com/abdullahnaeem151015-lgtm/Machine-learning-content-refresh-study` }],
    featured: true,
    tag: "Machine Learning",
    evaluation: [
      "Time-based split: training on June 1–24, 2026 and testing on June 25–30, 2026.",
      "SMOTE applied to training data only; target-constructing features excluded to limit leakage.",
      "Logistic regression, decision tree and random forest compared with transparent baseline rules; permutation importance used for interpretation.",
    ],
    resources: [],
  },
  {
    slug: "personalized-course-recommender",
    title: "Personalized Course Recommender System",
    category: "Recommendation System",
    description:
      "An interactive Streamlit app that recommends courses from a learner's completed courses using content-based and collaborative methods.",
    businessProblem:
      "Learners on large course catalogues struggle to find relevant next courses, and a single method rarely suits every learner.",
    objective:
      "Implement and compare several recommendation approaches and let a user explore them with adjustable parameters.",
    solution:
      "Recommendations are built from the learner's completed courses using content similarity and user profiles, plus collaborative approaches (KNN, NMF and embeddings). The Streamlit app exposes method choice and parameters, and explains what each score means.",
    technologies: ["Python", "pandas", "NumPy", "scikit-learn", "TensorFlow", "Streamlit", "Plotly"],
    features: [
      "Input from completed courses or existing learner ID",
      "Content similarity and user-profile recommendations",
      "Collaborative KNN, NMF and embedding methods",
      "Model comparison",
      "Adjustable parameters in an interactive app",
    ],
    screenshots: [
      { src: img("pcr-1903.jpg"), alt: "Recommender app showing selected courses, clustering method settings and a ranked results table", caption: "Generating recommendations" },
      { src: img("pcr-1904.jpg"), alt: "App section explaining recommendation scores, relative match strength and model evaluation", caption: "Evidence and limitations panel" },
      { src: img("pcr-1905.jpg"), alt: "App guide listing steps to use the recommender and how predictions are built", caption: "How-to and pipeline explanation" },
    ],
    workflow: ["Completed courses", "Learner profile", "Similarity / KNN / NMF / embeddings", "Filter completed", "Rank"],
    results: ["Delivered a Streamlit interface that generates ranked course recommendations and lets learners compare methods using the same learning history. Model-comparison evidence is available in the repository."],
    limitations: [
      "Scores show relative relevance, not guaranteed learner satisfaction.",
      "Cannot account for a learner's time, prior knowledge or career constraints.",
    ],
    futureImprovements: ["Collect user feedback to evaluate recommendations online.", "Add hybrid ranking tuned on held-out learners."],
    githubUrl: `https://github.com/abdullahnaeem151015-lgtm/Personalized-Course-Recommender-System`,
    demoUrl: "https://personalized-course-recommender-system-74bhfr6ufblqnrwrypn5nu.streamlit.app/",
    demoVerified: true,
    displayOrder: 4,
    status: "completed",
    sources: [{ label: "Repository README and screenshots", url: `https://github.com/abdullahnaeem151015-lgtm/Personalized-Course-Recommender-System` }],
    featured: true,
    tag: "Recommendation",
    evaluation: [
      "Supervised models (logistic regression, decision tree, SVM, random forest, bagging, AdaBoost, gradient boosting) were compared with grid-search cross-validation.",
      "Metrics: accuracy, precision, recall, F1, ROC-AUC where applicable, and cross-validation scores; the dashboard shows them in a prediction-evidence section.",
      "Metric values are in the app and repository; they are not copied here.",
    ],
    resources: [],
  },
  {
    slug: "smart-hospital-management-system",
    title: "Smart Hospital Management System",
    category: "Database-Backed Desktop Application",
    description:
      "An academic C# Windows Forms application with role-based login for managing patients, doctors, appointments, billing and reports on SQL Server LocalDB.",
    businessProblem:
      "Small clinics often track patients, appointments and billing on paper or in disconnected files.",
    objective:
      "Build a database-backed desktop application covering core hospital records as a Visual Programming academic project.",
    solution:
      "A Windows Forms application using ADO.NET against SQL Server LocalDB, with role-based login for Admin, Doctor and Receptionist, and forms for patients, doctors, appointments, billing and reports.",
    technologies: ["C#", "Windows Forms", "SQL Server LocalDB", "ADO.NET"],
    features: [
      "Role-based login: Admin, Doctor, Receptionist",
      "Patient and doctor records",
      "Appointment scheduling",
      "Billing calculation",
      "Summary reports",
    ],
    screenshots: [
      { src: img("shm-1273.jpg"), alt: "Login window with username, password and role selection", caption: "Role-based login" },
      { src: img("shm-1347.jpg"), alt: "Dashboard window with buttons for patients, appointments, billing, reports and logout", caption: "Dashboard" },
      { src: img("shm-1360.jpg"), alt: "Report window showing totals for patients, doctors, appointments and revenue with a bar chart", caption: "Reports" },
    ],
    workflow: ["Login by role", "Dashboard", "Patients / Doctors", "Appointments", "Billing", "Reports"],
    results: ["Delivered one desktop interface for patient and doctor records, appointments, billing and reporting. The repository includes source files, screenshots and Visual Programming Academic Project.pdf."],
    limitations: [
      "Desktop application, not a web app.",
      "Academic project; not certified or production hospital software.",
    ],
    futureImprovements: ["Password hashing and stronger access control.", "Input validation and automated tests."],
    githubUrl: `https://github.com/abdullahnaeem151015-lgtm/Smart-Hospital-Management-System`,
    demoUrl: null,
    demoVerified: false,
    displayOrder: 6,
    status: "academic",
    sources: [{ label: "Repository README, screenshots and project PDF", url: `https://github.com/abdullahnaeem151015-lgtm/Smart-Hospital-Management-System` }],
    featured: false,
    tag: "Desktop & Database",
    evaluation: [],
    resources: [{ label: "Project documentation (PDF)", url: "https://github.com/abdullahnaeem151015-lgtm/Smart-Hospital-Management-System/blob/main/Visual%20Programming%20Academic%20Project.pdf" }],
  },
  {
    slug: "gemini-mcp-document-agent",
    title: "Gemini MCP Document Agent",
    category: "LLM Integration Prototype",
    description:
      "A Python CLI that connects the Gemini API to an MCP server so the model can list, read and edit sample documents through tool calls.",
    businessProblem:
      "LLMs answer from training data unless they are given a structured way to read and change the documents a user is working with.",
    objective:
      "Learn and demonstrate the Model Context Protocol by building an async client/server pair driven by Gemini function calling.",
    solution:
      "An async MCP server exposes tools (read_doc_contents, edit_document, list_documents), docs:// resources and a /format prompt. The CLI client supports @ document mentions and autocomplete, and runs a function-calling loop with Gemini.",
    technologies: ["Python", "Gemini API", "Model Context Protocol (MCP)", "asyncio", "Function Calling"],
    features: [
      "Tools: read_doc_contents, edit_document, list_documents",
      "docs:// resources",
      "@ document mentions with autocomplete",
      "/format prompt",
      "Function-calling loop",
    ],
    screenshots: [
      { src: img("gmd-1956.jpg"), alt: "Terminal session where the CLI lists documents, summarizes and reformats a report", caption: "CLI session" },
      { src: img("gmd-1958.jpg"), alt: "MCP Inspector showing the format prompt and its message template", caption: "Prompt in MCP Inspector" },
      { src: img("gmd-1960.jpg"), alt: "MCP Inspector showing the available document resources and document contents", caption: "Document resources in MCP Inspector" },
    ],
    workflow: ["User prompt / @mention", "Gemini", "Function call", "MCP server tool", "Result back to model", "Answer"],
    results: ["Repository screenshots show tools, resources and prompts working in MCP Inspector and the CLI."],
    limitations: [
      "Works on bundled sample documents; not an arbitrary PDF parser.",
      "A learning prototype, not an enterprise autonomous platform.",
    ],
    futureImprovements: ["Real document parsing for PDF/DOCX.", "Change previews before edits are applied."],
    githubUrl: `https://github.com/abdullahnaeem151015-lgtm/Gemini-MCP-Document-Agent`,
    demoUrl: null,
    demoVerified: false,
    displayOrder: 7,
    status: "prototype",
    sources: [{ label: "Repository README and screenshots", url: `https://github.com/abdullahnaeem151015-lgtm/Gemini-MCP-Document-Agent` }],
    featured: false,
    tag: "LLM & Automation",
    evaluation: [],
    resources: [],
  },
  {
    slug: "ecommerce-sales-customer-case-study",
    title: "E-Commerce Sales and Customer Case Study",
    category: "Business Data Analysis Case Study",
    description:
      "An end-to-end analysis of e-commerce transactions covering sales trends, customer segments and profitability, ending in written business recommendations.",
    businessProblem:
      "An online retailer needs to know which regions, customer segments, payment methods and discount levels drive sales and profit, so that pricing and marketing effort goes where it pays off.",
    objective:
      "Analyze transaction-level sales data to find what drives revenue and profitability, and turn the findings into practical recommendations.",
    solution:
      "The repository holds the Excel dataset and a data description of the fields used (region, product category, payment method, discount, revenue, profit and weighted margin). The analysis is published as a Kaggle notebook and summarized in presentation slides.",
    technologies: ["Exploratory Data Analysis", "Matplotlib", "Pandas", "Python", "Numpy" ],
    features: [
      "Regional sales and weighted profit margin comparison",
      "Customer segment performance",
      "Impact of discounts on profitability",
      "Payment method preferences",
      "Seasonal revenue trends",
      "Written business recommendations",
    ],
    screenshots: [],
    workflow: ["Transaction data", "Sales, region and segment analysis", "Discount and margin analysis", "Key findings", "Business recommendations"],
    results: [
      "Reported findings: Europe generated the highest sales, North America had the highest weighted profit margin, and the Consumer segment performed best.",
      "Reported findings: high discounts reduced profitability, credit card was the most common payment method, and low-margin categories such as office supplies need improvement.",
      "Recommendations in the repository: expand in Europe, strengthen North America's profitability, target Consumer customers, improve low-margin categories and avoid heavy discounting.",
    ],
    limitations: [
      "Descriptive analysis of a single dataset; no predictive model, so no model metrics apply.",
      "Discount and profit relationships are observed patterns, not proven causes.",
      "The analysis steps are in the linked Kaggle notebook; the repository itself holds the data, description and findings.",
    ],
    futureImprovements: ["Add charts to the repository README.", "Test whether the discount-profit pattern holds across categories and regions."],
    githubUrl: `${GH}/Case-Study-of-E-Commerce-Sales-and-Customers-Data`,
    demoUrl: null,
    demoVerified: false,
    displayOrder: 5,
    status: "case-study",
    sources: [{ label: "Repository README and data description", url: `${GH}/Case-Study-of-E-Commerce-Sales-and-Customers-Data` }],
    featured: false,
    tag: "Data Analysis",
    evaluation: [
      "Findings are stated in the repository's data description and compare regions, segments, payment methods and discount levels on sales and weighted margin.",
    ],
    resources: [
      { label: "Kaggle notebook", url: "https://www.kaggle.com/code/abdullahnaeem151015/case-study-of-e-commerce-sales-and-customers-data" },
      { label: "Presentation slides", url: "https://1drv.ms/p/c/B4784E914C0EC996/IQC9EbA0AA_2QZ3DSS8tprDcAXwOj2jQl-GBpNwaFRDzR3o" },
    ],
  },
];

export const orderedProjects = [...projects].sort((a, b) => a.displayOrder - b.displayOrder);
export const featuredProjects = orderedProjects.filter((p) => p.featured);
export const otherProjects = orderedProjects.filter((p) => !p.featured);
export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const publicDemo = (p: Project) => (p.demoVerified && p.demoUrl ? p.demoUrl : null);
export const visibleCertifications = certifications.filter((c) => c.verified);
export const certificationsPlaceholder = "Certifications will be listed here once each credential has been verified.";

export const statusLabel: Record<ProjectStatus, string> = {
  prototype: "Prototype",
  "case-study": "Case study",
  academic: "Academic project",
  completed: "Completed project",
};
