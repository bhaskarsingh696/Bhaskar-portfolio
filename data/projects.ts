export type ProjectStatus = "In Progress" | "Planned";

export type Project = {
  id: string;
  number: string;
  slug: string;
  title: string;
  shortTitle: string;
  status: ProjectStatus;
  technologies: string[];
  description: string;
  features: string[];
  liveUrl: string;
  githubUrl: string;
  visual: "canvas" | "kanban" | "marketplace" | "invoice" | "pipeline";
};

export const projects: Project[] = [
  {
    id: "whiteboard",
    number: "01",
    slug: "collaborative-whiteboard",
    title: "Collaborative Whiteboard & Document Editor",
    shortTitle: "A shared space for ideas in motion.",
    status: "In Progress",
    technologies: ["React.js", "Node.js", "MongoDB", "WebSockets", "CRDTs"],
    description: "A real-time collaborative workspace where multiple users can edit documents and whiteboards simultaneously.",
    features: [
      "Real-time multi-user editing with live cursor presence.",
      "Conflict-free synchronization using CRDT-based architecture.",
      "Version history with rollback support.",
      "Shareable rooms with view/edit permissions.",
      "Export documents and boards to PDF or image.",
    ],
    liveUrl: "",
    githubUrl: "",
    visual: "canvas",
  },
  {
    id: "team-projects",
    number: "02",
    slug: "team-project-management",
    title: "Team Project Management System",
    shortTitle: "Keep the moving parts moving together.",
    status: "Planned",
    technologies: ["React.js", "Node.js", "MongoDB", "WebSockets"],
    description: "A collaborative project management platform for teams to organize projects, assign tasks, and track progress.",
    features: [
      "Kanban-style task management with drag-and-drop.",
      "Workspace, project, and team member management.",
      "Role-based access control and task assignments.",
      "Real-time updates and notifications.",
      "Project dashboards with activity tracking and progress analytics.",
    ],
    liveUrl: "",
    githubUrl: "",
    visual: "kanban",
  },
  {
    id: "rentease",
    number: "03",
    slug: "rentease",
    title: "RentEase — Peer-to-Peer Rental Marketplace",
    shortTitle: "Useful things should stay in circulation.",
    status: "Planned",
    technologies: ["Next.js", "Node.js", "MongoDB", "REST APIs"],
    description: "A marketplace that allows users to list, discover, and rent equipment or gear from one another.",
    features: [
      "Listings with real-time availability calendars.",
      "Booking, approval, and cancellation workflows.",
      "Secure deposits and payment holds.",
      "Separate owner and renter dashboards.",
      "Ratings and reviews linked to completed rentals.",
    ],
    liveUrl: "",
    githubUrl: "",
    visual: "marketplace",
  },
  {
    id: "freelance-flow",
    number: "04",
    slug: "freelanceflow",
    title: "FreelanceFlow — Time Tracking & Invoicing Tool",
    shortTitle: "A calmer rhythm for independent work.",
    status: "Planned",
    technologies: ["React.js", "Node.js", "PostgreSQL", "Chart.js"],
    description: "A productivity platform for freelancers to track billable hours, manage clients, and generate professional invoices.",
    features: [
      "Project and client-based time tracking.",
      "Automatic PDF invoice generation.",
      "Flexible hourly and fixed-rate pricing.",
      "Payment status tracking.",
      "Earnings dashboard with client and monthly breakdowns.",
    ],
    liveUrl: "",
    githubUrl: "",
    visual: "invoice",
  },
  {
    id: "job-tracker",
    number: "05",
    slug: "developer-job-tracker",
    title: "Developer Job & Application Tracker",
    shortTitle: "Turn a career search into a clear path.",
    status: "Planned",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "REST APIs"],
    description: "A job application management platform that helps developers organize applications and track their recruitment journey.",
    features: [
      "Application pipeline from saved jobs to offers.",
      "Kanban-based application tracking.",
      "Interview scheduling and follow-up management.",
      "Resume version management.",
      "Application analytics, skill-gap analysis, and calendar integrations.",
    ],
    liveUrl: "",
    githubUrl: "",
    visual: "pipeline",
  },
];

export type SideProject = {
  number: string;
  title: string;
  technologies: string[];
  description: string;
  features: string[];
  liveUrl: string;
  githubUrl: string;
  glyph: string;
};

export const sideProjects: SideProject[] = [
  {
    number: "01", title: "URL Shortener", technologies: ["Next.js", "Node.js", "PostgreSQL"], glyph: "↗",
    description: "A lightweight URL shortening service focused on efficient redirects and link analytics.",
    features: ["Custom aliases", "Fast redirects", "Click analytics", "Link expiration", "API rate limiting"], liveUrl: "", githubUrl: "",
  },
  {
    number: "02", title: "Authentication System", technologies: ["Node.js", "PostgreSQL", "JWT"], glyph: "⌁",
    description: "A reusable authentication system designed around secure user access and session management.",
    features: ["Registration and login", "Password hashing", "Access and refresh tokens", "Email verification", "Role-based authorization", "Session management"], liveUrl: "", githubUrl: "",
  },
  {
    number: "03", title: "GitHub Developer Dashboard", technologies: ["Next.js", "GitHub API", "TypeScript"], glyph: "◎",
    description: "A developer analytics dashboard that visualizes GitHub profiles, repositories, and contribution activity.",
    features: ["Profile statistics", "Contribution activity", "Language analysis", "Repository insights", "Interactive visualizations"], liveUrl: "", githubUrl: "",
  },
  {
    number: "04", title: "API Rate Limiter", technologies: ["Node.js", "Redis"], glyph: "∿",
    description: "A configurable API rate-limiting service designed to control request traffic and protect backend services.",
    features: ["IP and user limits", "Sliding-window and token-bucket algorithms", "Redis-backed tracking", "Configurable limits", "Response headers"], liveUrl: "", githubUrl: "",
  },
];
