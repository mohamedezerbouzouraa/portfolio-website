import { ReactElement, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  BookOpen,
  Brain,
  BrainCircuit,
  ChevronLeft,
  ChevronRight,
  Code2,
  Cpu,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Languages as LanguagesIcon,
  Linkedin,
  Mail,
  Server,
} from "lucide-react";
import { translations, Language } from "./locales/translations";
import { AIChatbot } from "./components/chat/AIChatbot";
import { ContactForm } from "./components/contact/ContactForm";
import { Navbar } from "./components/layout/Navbar";
import { ProjectModal } from "./components/projects/ProjectModal";
import { CustomCursor } from "./components/ui/CustomCursor";
import { ScrollProgress } from "./components/ui/ScrollProgress";
import { CONTACT_ITEMS, GITHUB_PROFILE_URL, LINKEDIN_PROFILE_URL } from "./data/constants";
import {
  categoryLabels,
  categoryOrder,
  featuredProjects,
  getLocalizedProjectContent,
  Project,
  ProjectCategory,
} from "./data/projects";
import { blogs } from "./data/blogs";
import { spokenLanguages } from "./data/languages";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const contactIconMap: Record<string, ReactElement> = {
  Email: <Mail size={18} className="text-cyan-400" />,
  LinkedIn: <Linkedin size={18} className="text-cyan-400" />,
  GitHub: <Github size={18} className="text-cyan-400" />,
};

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [theme, setTheme] = useState("dark");
  const [lang, setLang] = useState<Language>("en");
  const baseUrl = import.meta.env.BASE_URL;
  const cvFileUrl = `${baseUrl}Mohamed_Ezer_Resume.pdf`;

  const t = translations[lang];
  const totalProjects = featuredProjects.length;
  const totalCategories = new Set(featuredProjects.map((project) => project.category)).size;
  const projectTrackRefs = useRef<Record<ProjectCategory, HTMLDivElement | null>>({
    "Agentic AI & LLMs": null,
    "Computer Vision": null,
    "Classical ML": null,
    "Full-Stack & Web": null,
    "MCP & Tools": null,
  });

  const scrollProjects = (category: ProjectCategory, direction: -1 | 1) => {
    const track = projectTrackRefs.current[category];
    if (!track) return;

    track.scrollBy({
      left: direction * track.clientWidth * 0.85,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const languageLevelLabel: Record<string, string> = {
    native: t.languages.native,
    fluent: t.languages.fluent,
    high: t.languages.high,
    intermediate: t.languages.intermediate,
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans selection:bg-cyan-500/30 relative overflow-hidden transition-colors duration-300">
      <CustomCursor />
      <ScrollProgress />
      <Navbar theme={theme} toggleTheme={toggleTheme} lang={lang} setLang={setLang} t={t} />
      <AIChatbot t={t} lang={lang} />

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} t={t} lang={lang} />
        )}
      </AnimatePresence>

      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-900/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
      </div>

      <div className="content-shell relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-0 flex flex-col gap-10 md:gap-20">
        <motion.header
          id="about"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="section-spacing grid grid-cols-1 md:grid-cols-[4fr_6fr] gap-8 md:gap-10 lg:gap-12 items-center md:min-h-[510px] scroll-mt-24"
        >
          <motion.div variants={fadeIn} className="relative flex justify-center md:justify-start h-full">
            <div className="w-full max-w-[380px] sm:max-w-[400px] md:h-[510px]">
              <div className="relative w-full h-[430px] sm:h-[490px] md:h-full flex items-center justify-center">
                <div className="absolute inset-[-10px] rounded-[18px] border border-cyan-500/25 animate-[spin_24s_linear_infinite]" />
                <div className="absolute inset-[-22px] rounded-[26px] border border-blue-500/15 animate-[spin_34s_linear_infinite_reverse] hidden sm:block" />
                <div className="absolute inset-0 rounded-2xl bg-cyan-500/10 blur-2xl animate-pulse" />

                <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden border border-cyan-500/20 bg-gradient-to-br from-cyan-500/15 via-slate-900/40 to-blue-900/20 shadow-xl shadow-cyan-500/15 flex items-center justify-center">
                  <span className="text-7xl sm:text-8xl font-bold font-display text-cyan-400/90 tracking-tight">
                    MEB
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col h-full md:h-[510px] justify-between gap-5 md:gap-6">
            <div className="space-y-4 md:space-y-5">
              <motion.h1
                variants={fadeIn}
                className="text-4xl md:text-5xl lg:text-[3.2rem] font-semibold text-[var(--text-primary)] tracking-tight font-display leading-[1.1]"
              >
                Mohamed Ezer <span className="text-cyan-400">Bouzouraa</span>
              </motion.h1>

              <motion.h2 variants={fadeIn} className="text-xl md:text-2xl text-[var(--text-secondary)] font-light tracking-tight">
                {t.hero.role1} {t.hero.role2} <span className="text-cyan-400 font-semibold">{t.hero.role3}</span>{" "}
                {t.hero.role4}
              </motion.h2>

              <motion.div variants={fadeIn} className="flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-semibold border border-emerald-500/20 w-fit">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                  </span>
                  {t.hero.available}
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-semibold border border-cyan-500/20 w-fit">
                  <BrainCircuit size={14} />
                  AI / Software Engineering
                </div>
              </motion.div>

              <motion.p variants={fadeIn} className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed font-light max-w-2xl">
                {t.hero.description}
              </motion.p>
            </div>

            <motion.div variants={fadeIn} className="space-y-3 md:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] px-4 py-3">
                  <p className="text-xs uppercase tracking-wider text-[var(--text-secondary)] font-semibold">Projects</p>
                  <p className="text-lg font-bold text-cyan-400 mt-1">{totalProjects}+</p>
                </div>
                <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] px-4 py-3">
                  <p className="text-xs uppercase tracking-wider text-[var(--text-secondary)] font-semibold">Focus Areas</p>
                  <p className="text-lg font-bold text-cyan-400 mt-1">{totalCategories}</p>
                </div>
                <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] px-4 py-3">
                  <p className="text-xs uppercase tracking-wider text-[var(--text-secondary)] font-semibold">{t.hero.location}</p>
                  <p className="text-sm font-bold text-cyan-400 mt-1">Tunis, Tunisia</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="#contact"
                  className="ui-hover h-12 w-full flex items-center justify-center gap-2 px-5 bg-cyan-500 text-slate-950 rounded-xl font-bold hover:bg-cyan-400 transition-all shadow-xl shadow-cyan-500/30 group text-sm md:text-base"
                >
                  <Mail size={18} />
                  {t.hero.contactBtn}
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href={cvFileUrl}
                  download="Mohamed_Ezer_Resume.pdf"
                  className="ui-hover h-12 w-full flex items-center justify-center gap-2 px-5 glass text-[var(--text-primary)] rounded-xl font-bold hover:bg-white/10 transition-all border border-[var(--border-color)] text-sm md:text-base"
                >
                  <Download size={18} />
                  {t.hero.downloadCv}
                </a>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={GITHUB_PROFILE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="ui-hover h-11 glass text-[var(--text-primary)] rounded-xl font-semibold hover:bg-white/10 transition-all border border-[var(--border-color)] flex items-center justify-center gap-2 text-sm"
                  aria-label="Open GitHub"
                >
                  <Github size={16} /> GitHub
                </a>
                <a
                  href={LINKEDIN_PROFILE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="ui-hover h-11 glass text-[var(--text-primary)] rounded-xl font-semibold hover:bg-white/10 transition-all border border-[var(--border-color)] flex items-center justify-center gap-2 text-sm"
                  aria-label="Open LinkedIn"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
              </div>
            </motion.div>
          </div>
        </motion.header>

        <motion.section
          id="skills"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="section-spacing space-y-16 scroll-mt-24"
        >
          <div className="flex flex-col gap-12">
            <div className="space-y-4 max-w-3xl">
              <motion.h3 variants={fadeIn} className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] font-display tracking-tight">
                {t.skills.title}
              </motion.h3>
              <motion.p variants={fadeIn} className="text-[var(--text-secondary)] text-lg max-w-xl">
                {t.skills.subtitle}
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <Code2 size={20} className="text-emerald-400" />, title: t.skills.groups.programming, desc: "Python, JavaScript, C / C++, Java, PHP, SQL" },
                { icon: <Brain size={20} className="text-cyan-400" />, title: t.skills.groups.ai, desc: "TensorFlow, PyTorch, scikit-learn, Deep Learning, LLMs, RAG" },
                { icon: <Cpu size={20} className="text-blue-400" />, title: t.skills.groups.data, desc: "NumPy, Pandas, Matplotlib, MediaPipe, YOLOv8" },
                { icon: <Server size={20} className="text-indigo-400" />, title: t.skills.groups.tools, desc: "Flask, Symfony, Git, Linux, REST APIs" },
              ].map((skill, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeIn}
                  className="p-7 rounded-3xl glass border border-[var(--border-color)] hover:border-cyan-500/30 transition-all group flex flex-col h-full"
                >
                  <div className="flex items-center gap-3 mb-4 min-h-[52px]">
                    <div className="w-12 h-12 rounded-xl bg-[var(--bg-secondary)] flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                      {skill.icon}
                    </div>
                    <h4 className="text-lg font-bold text-[var(--text-primary)] leading-snug">{skill.title}</h4>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-mono">{skill.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="projects"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="section-spacing space-y-16 scroll-mt-24"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <h3 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] font-display tracking-tight">{t.projects.title}</h3>
              <p className="text-[var(--text-secondary)] text-base md:text-lg">{t.projects.subtitle}</p>
            </div>
            <a
              href={GITHUB_PROFILE_URL}
              target="_blank"
              rel="noreferrer"
              className="ui-hover group flex items-center gap-3 px-8 py-4 rounded-2xl glass border border-[var(--border-color)] text-[var(--text-primary)] font-bold hover:bg-white/5 transition-all text-lg"
            >
              {t.projects.githubAll} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="space-y-12">
            {categoryOrder.map((category) => {
              const projectsByCategory = featuredProjects.filter((project) => project.category === category);

              return (
                <div key={category} className="space-y-6">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="px-4 py-1.5 rounded-full text-sm font-bold border border-cyan-500/20 bg-cyan-500/10 text-cyan-400">
                        {categoryLabels[category]}
                      </span>
                      <span className="text-xs font-mono text-[var(--text-secondary)]">
                        {projectsByCategory.length} project{projectsByCategory.length > 1 ? "s" : ""}
                      </span>
                    </div>

                    <div className="hidden sm:flex items-center gap-2">
                      <button
                        onClick={() => scrollProjects(category, -1)}
                        className="ui-hover w-9 h-9 rounded-lg glass border border-[var(--border-color)] text-[var(--text-primary)] hover:text-cyan-400 flex items-center justify-center"
                        aria-label={`Scroll ${categoryLabels[category]} projects left`}
                      >
                        <ChevronLeft size={16} />
                      </button>
                      <button
                        onClick={() => scrollProjects(category, 1)}
                        className="ui-hover w-9 h-9 rounded-lg glass border border-[var(--border-color)] text-[var(--text-primary)] hover:text-cyan-400 flex items-center justify-center"
                        aria-label={`Scroll ${categoryLabels[category]} projects right`}
                      >
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>

                  <div
                    ref={(el) => {
                      projectTrackRefs.current[category] = el;
                    }}
                    className="flex gap-5 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2"
                  >
                    {projectsByCategory.map((project) => (
                      <motion.div
                        key={project.github}
                        variants={fadeIn}
                        whileHover={{ y: -6 }}
                        onClick={() => setSelectedProject(project)}
                        className="min-w-[300px] sm:min-w-[340px] md:min-w-[360px] max-w-[360px] snap-start group p-0 rounded-2xl glass border border-[var(--border-color)] hover:border-cyan-500/40 transition-all cursor-pointer flex flex-col min-h-[400px] overflow-hidden shadow-lg hover:shadow-cyan-500/10"
                      >
                        <div className="aspect-video w-full overflow-hidden relative border-b border-[var(--border-color)] shrink-0">
                          <img
                            src={project.image}
                            alt={project.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] to-transparent opacity-40 group-hover:opacity-0 transition-opacity" />
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                          <h4 className="text-[15px] md:text-base font-bold text-[var(--text-primary)] font-display group-hover:text-cyan-400 transition-colors line-clamp-1 mb-3 leading-snug">
                            {project.name}
                          </h4>
                          <p className="mobile-readable text-[var(--text-secondary)] text-sm md:text-sm font-light italic line-clamp-3 leading-relaxed overflow-hidden mb-2">
                            {project.subtitle}
                          </p>
                          <p className="text-sm md:text-xs text-cyan-400/80 line-clamp-2 mb-4">
                            {getLocalizedProjectContent(project, lang).result}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.slice(0, 2).map((tag) => (
                              <span
                                key={tag}
                                className="text-xs md:text-[11px] font-mono font-bold text-cyan-400 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="flex gap-2 pt-4 border-t border-[var(--border-color)] mt-auto">
                            <button
                              onClick={(event) => {
                                event.stopPropagation();
                                setSelectedProject(project);
                              }}
                              className="ui-hover flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-bold text-[var(--text-primary)] bg-[var(--bg-secondary)] rounded-lg border border-[var(--border-color)] hover:border-cyan-500/40 hover:text-cyan-400 transition-all"
                            >
                              <ExternalLink size={13} /> {t.projects.details}
                            </button>
                            <a
                              href={project.github || GITHUB_PROFILE_URL}
                              target="_blank"
                              rel="noreferrer"
                              onClick={(event) => event.stopPropagation()}
                              className="ui-hover w-11 flex items-center justify-center py-2 text-cyan-400 bg-cyan-500/10 rounded-lg border border-cyan-500/20 hover:bg-cyan-500/20 transition-all"
                              aria-label="Open GitHub repository"
                            >
                              <Github size={14} />
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.section>

        <motion.section
          id="education"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="section-spacing space-y-16 scroll-mt-24"
        >
          <div className="text-center space-y-4">
            <motion.h3 variants={fadeIn} className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] font-display tracking-tight">
              {t.education.title}
            </motion.h3>
            <motion.p variants={fadeIn} className="text-[var(--text-secondary)] text-base md:text-lg">
              {t.education.subtitle}
            </motion.p>
          </div>

          <div className="relative max-w-5xl mx-auto mt-16">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent hidden md:block" />

            <motion.div variants={fadeIn} className="relative mb-20 flex flex-col md:flex-row md:items-stretch">
              <div className="w-full md:w-1/2 md:pr-12 lg:pr-16 mb-4 md:mb-0 md:text-right flex flex-col justify-center">
                <div className="rounded-2xl glass border border-[var(--border-color)] p-6 h-full">
                  <h4 className="text-2xl font-bold text-[var(--text-primary)] font-display">{t.education.bacSchool}</h4>
                  <p className="text-cyan-400 text-lg font-medium mt-1">{t.education.bacTitle}</p>
                  <div className="flex flex-wrap md:justify-end gap-2 mt-3">
                    <span className="text-[var(--text-secondary)] text-sm bg-[var(--bg-secondary)] px-3 py-1 rounded-lg border border-[var(--border-color)] font-mono">
                      {t.education.bacScore}
                    </span>
                  </div>
                </div>
              </div>

              <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[var(--bg-secondary)] border-8 border-[var(--bg-primary)] items-center justify-center shadow-xl z-10">
                <Code2 size={22} className="text-cyan-400" />
              </div>

              <div className="w-full md:w-1/2 md:pl-12 lg:pl-16 flex flex-col justify-center">
                <span className="px-6 py-2 rounded-2xl bg-[var(--bg-secondary)] text-cyan-400 text-sm font-bold border border-cyan-500/20 font-mono inline-block md:hidden mb-4">
                  2024
                </span>
                <div className="rounded-2xl glass border border-[var(--border-color)] p-6 h-full hidden md:block">
                  <span className="px-6 py-2 rounded-2xl bg-[var(--bg-secondary)] text-cyan-400 text-sm font-bold border border-cyan-500/20 font-mono inline-block">
                    2024
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="relative flex flex-col md:flex-row md:items-stretch">
              <div className="w-full md:w-1/2 md:pr-12 lg:pr-16 mb-4 md:mb-0 md:text-right hidden md:flex flex-col justify-center items-end">
                <div className="rounded-2xl glass border border-[var(--border-color)] p-6 space-y-3 w-full h-full">
                  <span className="px-6 py-2 rounded-2xl bg-[var(--bg-secondary)] text-cyan-400 text-sm font-bold border border-cyan-500/20 font-mono inline-block">
                    2024 - {t.education.now}
                  </span>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-light">{t.education.note}</p>
                </div>
              </div>

              <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-cyan-500 border-8 border-[var(--bg-primary)] items-center justify-center shadow-xl shadow-cyan-500/20 z-10">
                <GraduationCap size={22} className="text-slate-950" />
              </div>

              <div className="w-full md:w-1/2 md:pl-12 lg:pl-16 flex flex-col justify-center">
                <span className="px-6 py-2 rounded-2xl bg-[var(--bg-secondary)] text-cyan-400 text-sm font-bold border border-cyan-500/20 font-mono inline-block md:hidden mb-4">
                  2024 - {t.education.now}
                </span>
                <div className="rounded-2xl glass border border-[var(--border-color)] p-6 h-full">
                  <h4 className="text-2xl font-bold text-[var(--text-primary)] font-display">{t.education.uni}</h4>
                  <p className="text-[var(--text-secondary)] text-lg mt-1">{t.education.major}</p>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-light mt-2 md:hidden">{t.education.note}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="text-cyan-400 text-sm bg-cyan-500/10 px-3 py-1 rounded-lg border border-cyan-500/20 font-mono font-bold">
                      {t.education.status}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          id="blogs"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="section-spacing space-y-16 scroll-mt-24"
        >
          <div className="space-y-4 max-w-3xl">
            <motion.h3 variants={fadeIn} className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] font-display tracking-tight">
              {t.blogs.title}
            </motion.h3>
            <motion.p variants={fadeIn} className="text-[var(--text-secondary)] text-lg max-w-xl">
              {t.blogs.subtitle}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogs.map((blog) => (
              <motion.a
                key={blog.url}
                variants={fadeIn}
                href={blog.url}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -4 }}
                className="ui-hover flex items-start gap-4 p-6 rounded-2xl glass border border-[var(--border-color)] hover:border-cyan-500/40 transition-all"
              >
                <div className="w-12 h-12 min-w-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-xl font-bold font-mono text-cyan-400">
                  {blog.icon}
                </div>
                <div className="space-y-2 min-w-0">
                  <div className="flex items-center gap-2">
                    <BookOpen size={16} className="text-cyan-400 shrink-0" />
                    <h4 className="text-lg font-bold text-[var(--text-primary)] font-display">{blog.title}</h4>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{blog.description}</p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {blog.tags.map((tag) => (
                      <span key={tag} className="text-xs font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs font-mono text-cyan-400/70 pt-1">{t.blogs.visit} ↗</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="languages"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="section-spacing space-y-16 scroll-mt-24"
        >
          <div className="space-y-4 max-w-3xl">
            <motion.h3 variants={fadeIn} className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] font-display tracking-tight flex items-center gap-3">
              <LanguagesIcon size={32} className="text-cyan-400" />
              {t.languages.title}
            </motion.h3>
            <motion.p variants={fadeIn} className="text-[var(--text-secondary)] text-lg max-w-xl">
              {t.languages.subtitle}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {spokenLanguages.map((language) => (
              <motion.div key={language.name} variants={fadeIn} className="p-6 rounded-2xl glass border border-[var(--border-color)]">
                <p className="text-lg font-bold text-[var(--text-primary)] font-display">{language.name}</p>
                <p className="text-xs uppercase tracking-wider text-cyan-400 font-mono mb-3">
                  {languageLevelLabel[language.levelKey]}
                </p>
                <div className="h-1.5 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-color)] overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                    style={{ width: `${language.percent}%` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="contact"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="section-spacing scroll-mt-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-stretch">
            <motion.div variants={fadeIn} className="h-full p-8 md:p-10 rounded-2xl glass border border-[var(--border-color)] shadow-2xl flex flex-col">
              <div className="space-y-4">
                <h3 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] font-display tracking-tight">
                  {t.contact.title1} <span className="text-cyan-400">{t.contact.title2}</span>
                </h3>
                <p className="text-[var(--text-secondary)] text-lg leading-relaxed font-light">{t.contact.subtitle}</p>
              </div>

              <div className="mt-8 space-y-4">
                {CONTACT_ITEMS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                    className="ui-hover flex items-center gap-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] px-4 py-3"
                  >
                    {contactIconMap[item.label]}
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[var(--text-secondary)] font-semibold">
                        {item.label}
                      </p>
                      <p className="text-sm md:text-base font-semibold text-[var(--text-primary)]">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="h-full p-8 md:p-10 rounded-2xl glass border border-[var(--border-color)] relative shadow-2xl flex flex-col">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/10 blur-3xl -z-10" />
              <h4 className="text-2xl font-bold text-[var(--text-primary)] font-display mb-6">Message Form</h4>
              <div className="flex-1">
                <ContactForm t={t} />
              </div>
            </motion.div>
          </div>
        </motion.section>

        <motion.footer
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
          className="pt-10 pb-10 md:pt-20 md:pb-20 border-t border-[var(--border-color)] flex flex-col md:flex-row items-center justify-between gap-8 text-[var(--text-secondary)] text-sm"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[var(--bg-secondary)] flex items-center justify-center text-cyan-400 font-bold font-display border border-[var(--border-color)]">
              MEB
            </div>
            <p>© {new Date().getFullYear()} Mohamed Ezer Bouzouraa · Tunis, Tunisia.</p>
          </div>
          <div className="flex items-center gap-10">
            <a href={GITHUB_PROFILE_URL} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-2 font-medium">
              <Github size={18} /> GitHub
            </a>
            <a href={LINKEDIN_PROFILE_URL} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-2 font-medium">
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}
