import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import resumePdf from "./assets/sabbir-mern-resume.pdf";
import {
  Sun,
  Moon,
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Database,
  Layout,
  User,
  Download,
  Send,
  Phone,
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Terminal,
  LayoutList,
  Grid,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCarouselHovered, setIsCarouselHovered] = useState(false);
  const [viewMode, setViewMode] = useState("list");
  const carouselRef = useRef(null);

  const projectsData = [
    {
      id: "01",
      title: "DevBlog",
      category: "Full-Stack Web App",
      description: "A modern developer blogging platform featuring rich text publishing, JWT authentication, user management, and interactive comment systems.",
      highlights: ["MERN Stack Architecture", "JWT Auth & Role Management", "Responsive Modern UI"],
      tech: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
      liveLink: "https://devblog-murex-three.vercel.app/",
      githubLink: "https://github.com/SE-Sabbir/DevBlog",
      featured: true,
    },
    {
      id: "02",
      title: "Coral-web",
      category: "E-Commerce / Landing Page",
      description: "A sleek, responsive retail and fashion online showcase built with modern React components and high performance styling.",
      highlights: ["Dynamic Product Grid", "Interactive Cart Interface", "Fast Page Loading"],
      tech: ["React", "Tailwind CSS", "Vite", "JavaScript"],
      liveLink: "https://coral-web-jet.vercel.app/",
      githubLink: "https://github.com/SE-Sabbir/Coral-web",
    },
    {
      id: "03",
      title: "Doctor-Care",
      category: "Healthcare Platform",
      description: "An intuitive doctor appointment booking system allowing patients to browse doctor profiles and book slots easily.",
      highlights: ["Doctor Search & Filters", "Appointment Booking", "Mobile Friendly"],
      tech: ["HTML5", "JavaScript", "Tailwind CSS"],
      liveLink: "https://doctor-care-ruddy-beta.vercel.app/",
      githubLink: "https://github.com/SE-Sabbir/Doctor-Care",
    },
    {
      id: "04",
      title: "ShortLinky",
      category: "Utility Tool",
      description: "A fast, lightweight URL shortener application transforming long Web links into custom short links with live analytics tracking.",
      highlights: ["Instant Link Shortening", "Click Analytics Tracking", "Custom Link Slugs"],
      tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      liveLink: "https://shortlinky-url-maker.vercel.app/",
      githubLink: "https://github.com/SE-Sabbir/ShortLinky",
    },
    {
      id: "05",
      title: "Real-time Chat App",
      category: "Web Communication",
      description: "A real-time instant messaging application supporting room channels, live WebSocket connections, and user online indicators.",
      highlights: ["WebSocket Communication", "Live Online Status", "Dark Mode UI"],
      tech: ["Socket.io", "React", "Node.js", "MongoDB", "Tailwind CSS"],
      liveLink: null,
      githubLink: "https://github.com/SE-Sabbir/realtime-chat",
    },
  ];

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = window.innerWidth > 768 ? 450 : 320;
      carouselRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (isCarouselHovered) return;
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        if (Math.ceil(scrollLeft + clientWidth) >= scrollWidth - 10) {
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollCarousel('right');
        }
      }
    }, 3500);
    return () => clearInterval(interval);
  }, [isCarouselHovered]);
  const logos = [
    {
      name: "MongoDB",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Express",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "React",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Node.js",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "JavaScript",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Tailwind",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "TypeScript",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
  ];

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const Typewriter = ({ words }) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);

    // Typing logic
    useEffect(() => {
      if (subIndex === words[index].length + 1 && !reverse) {
        setTimeout(() => setReverse(true), 2000); // Pause before deleting
        return;
      }

      if (subIndex === 0 && reverse) {
        setReverse(false);
        setIndex((prev) => (prev + 1) % words.length); // Move to next word
        return;
      }

      const timeout = setTimeout(
        () => {
          setSubIndex((prev) => prev + (reverse ? -1 : 1));
        },
        reverse ? 75 : 150,
      ); // Speed: Deleting is faster than typing

      return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, words]);

    return (
      <span className="text-cyan-500 border-r-4 border-cyan-500 animate-pulse ml-2">
        {words[index].substring(0, subIndex)}
      </span>
    );
  };

  return (
    <div className="min-h-screen transition-colors duration-500 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-cyan-500/30">
      {/* --- RESPONSIVE NAVBAR --- */}
      <nav className="fixed w-full top-0 z-[100] backdrop-blur-md bg-white/70 dark:bg-slate-950/70 border-b border-slate-200 dark:border-slate-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div onClick={() => window.location.href = "#home"} className="flex items-center gap-2 cursor-pointer">
            <div className="w-9 h-9 flex items-center justify-center">
              <img src="https://res.cloudinary.com/dxr5inpsy/image/upload/v1773291601/S-letter_logo_ubt9g0.png" alt="logo" className="w-full h-full object-cover" />
            </div>
            <span className="font-poppins text-xl font-bold tracking-tighter uppercase">
              sabbir.dev
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-cyan-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 transition-all hover:ring-2 ring-cyan-500"
            >
              {darkMode ? (
                <Sun size={18} className="text-yellow-400" />
              ) : (
                <Moon size={18} />
              )}
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={() => setDarkMode(!darkMode)} className="p-2">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 p-6 flex flex-col gap-4 animate-in slide-in-from-top">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-semibold"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>

      <main className="max-w-7xl mx-auto px-6">
        {/* --- HERO SECTION --- */}
        <section
          id="home"
          className="pt-24 md:pt-40 pb-20 flex flex-col md:flex-row items-center gap-12"
        >
          <div className="flex-1 space-y-6">
            <h2 className="text-slate-400 font-poppins tracking-widest uppercase text-lg">
              Welcome to my world
            </h2>

            <h1 className="text-5xl md:text-7xl font-poppins font-normal font-black leading-tight min-h-[160px]">
              Hi... I'm{" "}
              <span className="text-slate-900 font-bold dark:text-white">
                Sabbir Hossain
              </span>{" "}
              <br />
              <span className="text-3xl font-poppins font-bold md:text-5xl">
                <Typewriter
                  words={["MERN Stack Developer", "Problem Solver"]}
                />
              </span>
            </h1>

            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-md">
              Building high-performance web applications with a focus on clean
              code and seamless user experiences.
            </p>

            {/* Buttons and Socials... */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <a
                href={resumePdf}
                download="sabbir-mern-resume.pdf"
                className="flex items-center gap-2 px-6 py-4 font-bold text-white bg-cyan-500 rounded-full hover:bg-cyan-600 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1"
              >
                <span>Download Resume</span>
                <Download size={20} />
              </a>
              <div className="flex gap-5">
                <a
                  href="https://github.com/SE-Sabbir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white dark:bg-slate-900 rounded-full shadow-lg shadow-slate-200/50 dark:shadow-none text-slate-600 dark:text-slate-400 hover:text-cyan-500 hover:shadow-cyan-500/20 dark:hover:shadow-cyan-500/10 hover:-translate-y-1 transition-all duration-300 border border-slate-100 dark:border-slate-800"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/md-sabbir-hossain-8059671b7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white dark:bg-slate-900 rounded-full shadow-lg shadow-slate-200/50 dark:shadow-none text-slate-600 dark:text-slate-400 hover:text-cyan-500 hover:shadow-cyan-500/20 dark:hover:shadow-cyan-500/10 hover:-translate-y-1 transition-all duration-300 border border-slate-100 dark:border-slate-800"
                >
                  <Linkedin size={24} />
                </a>
                <a href="#contact"
                  className="p-4 bg-white dark:bg-slate-900 rounded-full shadow-lg shadow-slate-200/50 dark:shadow-none text-slate-600 dark:text-slate-400 hover:text-cyan-500 hover:shadow-cyan-500/20 dark:hover:shadow-cyan-500/10 hover:-translate-y-1 transition-all duration-300 border border-slate-100 dark:border-slate-800"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>

          </div>
          {/* Profile Picture Frame */}
          <div className="relative group order-first md:order-last">
            <div className="absolute -inset-4 bg-cyan-500/20 rounded-full blur-2xl group-hover:bg-cyan-500/40 transition"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-slate-200 dark:border-slate-800 overflow-hidden bg-slate-200">
              {/* Replace with your image URL */}
              <img
                src="https://res.cloudinary.com/dxr5inpsy/image/upload/v1771859549/IMG_20250613_173624_lgznve.jpg"
                alt="Sabbir Hossain"
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>
          </div>

        </section>
        {/* LOGO MARQUEE (The Bottom Scroll) */}
        <div className="w-full max-w-[320px] md:max-w-7xl mt-4 overflow-hidden relative">
          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white dark:from-slate-950 to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white dark:from-slate-950 to-transparent z-10"></div>

          <div className="animate-marquee flex items-center gap-14">
            {/* Loop the logos twice for seamless effect */}
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex items-center gap-2 group cursor-pointer"
              >
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="w-12 h-12 transition-all"
                />
                <span className="text-xl font-poppins font-bold text-slate-400 group-hover:text-cyan-500">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* --- STATS SECTION --- */}
        <div className="py-12 my-12 border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] shadow-xl shadow-slate-200/20 dark:shadow-none">
          <div className="max-w-6xl mx-auto flex flex-wrap max-md:grid max-md:grid-cols-2 justify-between items-center gap-8 px-8 sm:px-12">
            <div className="flex flex-col items-center sm:items-start flex-1">
              <span className="text-4xl md:text-5xl font-black font-poppins text-cyan-500">
                <AnimatedCounter end={3} suffix="+" duration={2000} />
              </span>
              <span className="text-slate-500 font-medium uppercase tracking-wider text-xs md:text-sm mt-2 text-center sm:text-left">Years Experience</span>
            </div>

            <div className="hidden md:block w-px h-16 bg-slate-200 dark:bg-slate-800"></div>

            <div className="flex flex-col items-center sm:items-start flex-1">
              <span className="text-4xl md:text-5xl font-black font-poppins text-cyan-500">
                <AnimatedCounter end={20} suffix="+" duration={2000} />
              </span>
              <span className="text-slate-500 font-medium uppercase tracking-wider text-xs md:text-sm mt-2 text-center sm:text-left">Total Projects</span>
            </div>

            <div className="hidden md:block w-px h-16 bg-slate-200 dark:bg-slate-800"></div>

            <div className="flex flex-col items-center sm:items-start flex-1">
              <span className="text-4xl md:text-5xl font-black font-poppins text-cyan-500">
                <AnimatedCounter end={15} suffix="+" duration={2000} />
              </span>
              <span className="text-slate-500 font-medium uppercase tracking-wider text-xs md:text-sm mt-2 text-center sm:text-left">Happy Clients</span>
            </div>

            <div className="hidden md:block w-px h-16 bg-slate-200 dark:bg-slate-800"></div>

            <div className="flex flex-col items-center sm:items-start flex-1">
              <span className="text-4xl md:text-5xl font-black font-poppins text-cyan-500">
                <AnimatedCounter end={50} suffix="+" duration={2000} />
              </span>
              <span className="text-slate-500 font-medium uppercase tracking-wider text-xs md:text-sm mt-2 text-center sm:text-left">GitHub Repos</span>
            </div>
          </div>
        </div>

        {/* --- ABOUT SECTION --- */}
        <section
          id="about"
          className="py-20 border-t border-slate-200 dark:border-slate-800"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="p-8 bg-slate-100 dark:bg-slate-900 rounded-[2rem]">
              <User className="text-cyan-500 mb-4" size={32} />
              <h3 className="text-3xl font-bold mb-4">The Journey</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                I'm a self-driven MERN stack developer with a passion for
                building clean, scalable, and user-centric web applications. My expertise
                lies in translating complex UI designs into pixel-perfect frontend code,
                powered by efficient and robust backend APIs. Backed by a strong foundation
                in Computer Science & Engineering, I love tackling challenging problems,
                optimizing application performance, and ensuring seamless user experiences.
                When I'm not coding, you can find me exploring new system architectures,
                discovering the latest tech trends, or contributing to open-source projects
                to constantly sharpen my skills.
              </p>
            </div>
            <div className="space-y-4">
              <div className="p-6 border border-slate-200 dark:border-slate-800 rounded-2xl">
                <h4 className="font-bold text-cyan-500">Education</h4>
                <p>Diploma in Computer Science & Engineering</p>
                <p className="text-slate-500">TMSS Polytechnic Institute</p>
                <hr className="my-3 border-slate-200 dark:border-slate-800" />
                <p>Diploma in MERN Stack</p>
                <p className="text-slate-500">Creative IT Institute</p>
              </div>
              <div className="p-6 border border-slate-200 dark:border-slate-800 rounded-2xl">
                <h4 className="font-bold text-cyan-500">Language</h4>
                <p>Bengali (Native), English (Fluent) , Hindi (Basic)</p>
              </div>
              <div className="p-6 border border-slate-200 dark:border-slate-800 rounded-2xl">
                <h4 className="font-bold text-cyan-500">Focus</h4>
                <p>Scalable Web Apps & API Security</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- SKILLS SECTION --- */}
        <section id="skills" className="py-20">
          <h2 className="text-4xl font-bold mb-12">Tech Stack</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Frontend",
                icon: <Layout size={24} className="text-cyan-500" />,
                skills: [
                  { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                  { name: "Next.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", invertDark: true },
                  { name: "Tailwind CSS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
                ],
              },
              {
                title: "Backend",
                icon: <Code2 size={24} className="text-cyan-500" />,
                skills: [
                  { name: "Node.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
                  { name: "Express.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", invertDark: true },
                ],
              },
              {
                title: "Database",
                icon: <Database size={24} className="text-cyan-500" />,
                skills: [
                  { name: "MongoDB", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
                  { name: "PostgreSQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
                ],
              },
              {
                title: "DevOps & Tools",
                icon: <Terminal size={24} className="text-cyan-500" />,
                skills: [
                  { name: "Git", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
                  { name: "Docker", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
                  { name: "Firebase", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg" },
                ],
              },
            ].map((category) => (
              <div
                key={category.title}
                className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5 group flex flex-col"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800/80 rounded-2xl shadow-sm">
                    {category.icon}
                  </div>
                  <h4 className="font-poppins font-bold text-lg text-slate-800 dark:text-slate-200 group-hover:text-cyan-500 transition-colors duration-300">
                    {category.title}
                  </h4>
                </div>
                <div className="flex flex-col gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 p-2 rounded-2xl bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800/80 hover:border-cyan-500/30 transition-all duration-300 group/item"
                    >
                      <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 dark:bg-slate-900 p-2 group-hover/item:scale-110 transition-transform duration-300">
                        <img
                          src={skill.url}
                          alt={skill.name}
                          className={`w-full h-full object-contain ${
                            skill.invertDark ? "dark:invert" : ""
                          }`}
                        />
                      </div>
                      <span className="font-poppins text-sm font-medium text-slate-700 dark:text-slate-300 group-hover/item:text-cyan-500 transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- PROJECTS SECTION --- */}
        <section id="projects" className="py-20">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-2">My Projects</h2>
              <p className="text-slate-500 text-sm sm:text-base">
                Explore a showcase of my web applications, full-stack tools, and side projects.
              </p>
            </div>
            <div className="flex items-center gap-4 self-end sm:self-auto">
              {/* View Layout Toggle */}
              <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-900 p-1.5 rounded-full border border-slate-200 dark:border-slate-800">
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-full transition-all duration-300 flex items-center gap-1.5 text-xs font-bold px-3.5 ${
                    viewMode === "list"
                      ? "bg-cyan-500 text-white shadow-md shadow-cyan-500/30"
                      : "text-slate-500 hover:text-slate-900 dark:hover:text-white"
                  }`}
                  title="List View"
                >
                  <LayoutList size={16} />
                  <span className="hidden sm:inline">List</span>
                </button>
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-full transition-all duration-300 flex items-center gap-1.5 text-xs font-bold px-3.5 ${
                    viewMode === "grid"
                      ? "bg-cyan-500 text-white shadow-md shadow-cyan-500/30"
                      : "text-slate-500 hover:text-slate-900 dark:hover:text-white"
                  }`}
                  title="Grid View"
                >
                  <Grid size={16} />
                  <span className="hidden sm:inline">Grid</span>
                </button>
              </div>
            </div>
          </div>

          {viewMode === "list" ? (
            <div className="flex flex-col gap-10">
              {projectsData.map((project) => (
                <ProjectListItem key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectsData.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </section>

        {/* --- REVIEWS SECTION --- */}
        <section id="reviews" className="py-20 border-t border-slate-200 dark:border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 mb-12">
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-bold mb-4">Client Reviews</h2>
              <p className="text-slate-500 max-w-2xl">
                Don't just take my word for it. Here is what some of my clients have to say about my work.
              </p>
            </div>
            {/* Carousel Controls */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => scrollCarousel('left')}
                className="p-3 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500 hover:text-cyan-500 transition-all duration-300 shadow-sm"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => scrollCarousel('right')}
                className="p-3 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500 hover:text-cyan-500 transition-all duration-300 shadow-sm"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div
            ref={carouselRef}
            onMouseEnter={() => setIsCarouselHovered(true)}
            onMouseLeave={() => setIsCarouselHovered(false)}
            onTouchStart={() => setIsCarouselHovered(true)}
            onTouchEnd={() => setIsCarouselHovered(false)}
            className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing"
          >
            {[
              { name: "John Doe", title: "CEO, TechCorp", review: "Amazing work, highly recommended! Sabbir exceeded all our expectations and delivered way ahead of schedule.", rating: 5 },
              { name: "Jane Smith", title: "Founder, StartUp", review: "Incredibly fast and professional execution. He translated our complex designs into a beautifully interactive app.", rating: 5 },
              { name: "Mike Johnson", title: "Product Manager", review: "Delivered exactly what we needed on time, with clean code and great communication.", rating: 4 },
              { name: "Emily Davis", title: "Marketing Head", review: "A true professional. Outstanding user experience and smooth micro-animations. Would hire again!", rating: 5 },
              { name: "David Miller", title: "CTO, InnovateX", review: "Sabbir is simply fantastic. He turned our vague ideas into a polished, high-performing product.", rating: 5 }
            ].map((r, idx) => (
              <div key={idx} className="min-w-[100%] md:min-w-[420px] snap-center">
                <ReviewCard name={r.name} title={r.title} review={r.review} rating={r.rating} />
              </div>
            ))}
          </div>
        </section>

        {/* --- CONTACT SECTION --- */}
        <section id="contact" className="py-20 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
              <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
              <p className="text-slate-500 mb-8">
                Have a project in mind or just want to say hi? Feel free to reach out to me!
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-full text-cyan-500">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Email</h4>
                    <a href="mailto:[sabbirhp50@gmail.com]" className="text-slate-500 hover:text-cyan-500 transition">sabbirhp450@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-full text-cyan-500">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Phone</h4>
                    <a href="tel:+8801311961850" className="text-slate-500 hover:text-cyan-500 transition">+880 1311-961850</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-2/3 p-8 bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800">
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="space-y-6"
              >
                {/* Replace with your Access Key from web3forms.com */}
                <input type="hidden" name="access_key" value="715d6bcc-4cc7-4c1e-9659-00e7c63efd7d" />

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all outline-none"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all outline-none"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    placeholder="How can I help you?"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all outline-none resize-none"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="px-8 py-4 w-full sm:w-auto font-bold text-white bg-cyan-500 rounded-xl hover:bg-cyan-600 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer className=" pt-15 pb-10 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 mt-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 gap-10 md:grid-cols-5 pb-10">
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 flex items-center justify-center">
                <img src="https://res.cloudinary.com/dxr5inpsy/image/upload/v1773291601/S-letter_logo_ubt9g0.png" alt="logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-poppins text-xl font-bold tracking-tighter uppercase">sabbir.dev</span>
            </div>
            <p className="text-slate-500 max-w-sm leading-relaxed">
              Building high-performance web applications with a focus on clean code and seamless user experiences. Let's create something amazing together.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-slate-900 dark:text-white uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-slate-500 hover:text-cyan-500 transition-colors">Home</a></li>
              <li><a href="#about" className="text-slate-500 hover:text-cyan-500 transition-colors">About</a></li>
              <li><a href="#skills" className="text-slate-500 hover:text-cyan-500 transition-colors">Skills</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-slate-900 dark:text-white uppercase tracking-wider text-sm">Info Links</h4>
            <ul className="space-y-4">
              <li><a href="#projects" className="text-slate-500 hover:text-cyan-500 transition-colors">Projects</a></li>
              <li><a href="#reviews" className="text-slate-500 hover:text-cyan-500 transition-colors">Reviews</a></li>
              <li><a href="#contact" className="text-slate-500 hover:text-cyan-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-slate-900 dark:text-white uppercase tracking-wider text-sm">Connect</h4>
            <ul className="space-y-4">
              <li><a href="https://github.com/SE-Sabbir" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-500 hover:text-cyan-500 transition-colors"><Github size={18} /> GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/md-sabbir-hossain-8059671b7/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-500 hover:text-cyan-500 transition-colors"><Linkedin size={18} /> LinkedIn</a></li>
              <li><a href="mailto:sabbirhp450@gmail.com" className="flex items-center gap-3 text-slate-500 hover:text-cyan-500 transition-colors"><Mail size={18} /> Email Me</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6  pt-8 border-t border-slate-200 dark:border-slate-800">
          <p className="text-center text-slate-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Sabbir Hossain. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

const AnimatedCounter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (countRef.current) {
      observer.observe(countRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      // easeOutExpo for smooth deceleration
      const easing = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);

      setCount(Math.floor(end * easing));

      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <span ref={countRef}>
      {count}{suffix}
    </span>
  );
};

const ProjectListItem = ({ project }) => {
  const { id, title, category, description, highlights, tech, liveLink, githubLink, featured } = project;

  return (
    <div className="group relative p-6 sm:p-8 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 rounded-[2.5rem] hover:border-cyan-500/50 transition-all duration-500 shadow-xl shadow-slate-200/20 dark:shadow-none hover:shadow-cyan-500/10 flex flex-col lg:flex-row gap-8 items-stretch">
      {/* Live Preview Area */}
      <div className="w-full lg:w-5/12 h-60 sm:h-72 lg:h-auto lg:min-h-[280px] bg-slate-200 dark:bg-slate-950 rounded-2xl overflow-hidden relative border border-slate-200 dark:border-slate-800/80 shrink-0 group/preview">
        <div className="w-full h-full bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-transparent flex items-center justify-center relative overflow-hidden">
          {liveLink ? (
            <>
              {/* Scaled down iframe to show true live preview */}
              <div className="absolute top-0 left-0 w-[250%] h-[250%] origin-top-left scale-[0.4] group-hover/preview:scale-[0.42] transition-transform duration-500 pointer-events-none">
                <iframe
                  src={liveLink}
                  title={title}
                  className="w-full h-full border-none bg-white dark:bg-slate-950"
                  tabIndex="-1"
                  loading="lazy"
                />
              </div>
              {/* Overlay button */}
              <div className="absolute inset-0 bg-slate-950/20 group-hover/preview:bg-slate-950/40 transition-colors duration-300 flex items-center justify-center backdrop-blur-[2px] opacity-0 group-hover/preview:opacity-100">
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-full shadow-lg shadow-cyan-500/30 flex items-center gap-2 text-sm transition transform hover:scale-105"
                >
                  <span>Open Live Preview</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center gap-3 p-6 text-center">
              <div className="p-4 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-cyan-500">
                <Code2 size={36} />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Backend / System App</span>
            </div>
          )}

          {/* Project Index / Badge */}
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-xs font-bold font-poppins text-slate-700 dark:text-slate-300 backdrop-blur-md z-10 shadow-sm flex items-center gap-1.5">
            <span className="text-cyan-500">#{id}</span>
            {featured && (
              <span className="flex items-center gap-1 text-amber-500 text-[10px] uppercase font-black tracking-wider border-l border-slate-300 dark:border-slate-700 pl-1.5 ml-0.5">
                <Sparkles size={10} className="fill-amber-500" /> Featured
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Details & Tech Stack */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-500 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
              {category}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-cyan-500 transition-colors duration-300">
            {title}
          </h3>

          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-5 text-sm sm:text-base">
            {description}
          </p>

          {/* Highlights */}
          {highlights && highlights.length > 0 && (
            <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-1.5 text-xs font-medium text-slate-600 dark:text-slate-400">
                  <CheckCircle2 size={14} className="text-cyan-500 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          )}

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tech.map((t, idx) => (
              <span
                key={idx}
                className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 shadow-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-800/80">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-bold bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2.5 rounded-full shadow-md shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Live Demo</span>
              <ExternalLink size={16} />
            </a>
          )}
          <a
            href={githubLink || "https://github.com/SE-Sabbir"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 bg-white dark:bg-slate-950 px-5 py-2.5 rounded-full border border-slate-200 dark:border-slate-800 hover:border-cyan-500 transition-all duration-300 shadow-sm"
          >
            <Github size={16} />
            <span>Source Code</span>
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  const { title, category, description, tech, liveLink, githubLink } = project;
  return (
    <div className="group relative hover:border-cyan-500/50 transition-all duration-500 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] overflow-hidden flex flex-col justify-between shadow-lg shadow-slate-200/20 dark:shadow-none">
      <div>
        <div className="h-52 bg-slate-200 dark:bg-slate-950 overflow-hidden relative">
          <div className="w-full h-full bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-transparent flex items-center justify-center relative">
            {liveLink ? (
              <>
                <div className="absolute top-0 left-0 w-[250%] h-[250%] origin-top-left scale-[0.4] pointer-events-none">
                  <iframe
                    src={liveLink}
                    title={title}
                    className="w-full h-full border-none bg-white dark:bg-slate-950"
                    tabIndex="-1"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 z-10 bg-slate-900/5 group-hover:bg-transparent transition-colors duration-500 cursor-pointer" onClick={() => window.open(liveLink, "_blank")}></div>
              </>
            ) : (
              <Code2 size={48} className="text-slate-400 opacity-20 relative z-20" />
            )}
          </div>
        </div>
        <div className="p-6">
          {category && (
            <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-500 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/20 mb-3 inline-block">
              {category}
            </span>
          )}
          <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors">{title}</h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">{description}</p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {Array.isArray(tech) ? (
              tech.map((t, idx) => (
                <span key={idx} className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800">
                  {t}
                </span>
              ))
            ) : (
              <span className="text-xs text-slate-500">{tech}</span>
            )}
          </div>
        </div>
      </div>
      <div className="p-6 pt-0 flex gap-3">
        {liveLink && (
          <button onClick={() => window.open(liveLink, "_blank")} className="flex items-center gap-1.5 text-xs font-bold bg-cyan-500 text-white px-4 py-2 rounded-full hover:bg-cyan-600 transition shadow-sm">
            Live <ExternalLink size={12} />
          </button>
        )}
        <button onClick={() => window.open(githubLink || "https://github.com/SE-Sabbir", "_blank")} className="flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-cyan-500 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-4 py-2 rounded-full transition">
          GitHub <Github size={12} />
        </button>
      </div>
    </div>
  );
};
// ------------reveiw card----------------
const ReviewCard = ({ name, title, review, rating }) => (
  <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 relative group hover:border-cyan-500/50 transition duration-500 shadow-xl shadow-slate-200/20 dark:shadow-none flex flex-col h-full">
    <Quote className="absolute top-8 right-8 text-slate-200 dark:text-slate-800 group-hover:text-cyan-500/20 transition-colors duration-500" size={48} />
    <div className="flex gap-1 text-yellow-400 mb-6">
      {Array.from({ length: rating || 5 }).map((_, i) => (
        <Star key={i} size={18} fill="currentColor" />
      ))}
    </div>
    <p className="text-slate-600 dark:text-slate-400 mb-8 relative z-10 leading-relaxed font-medium flex-grow">
      {review}
    </p>
    <div className="flex items-center gap-4 pt-4 mt-auto border-t border-slate-200 dark:border-slate-800">
      <div className="w-12 h-12 rounded-full bg-cyan-100 dark:bg-cyan-900/40 flex items-center justify-center text-cyan-600 dark:text-cyan-400 font-bold text-xl uppercase shrink-0">
        {name ? name.charAt(0) : "U"}
      </div>
      <div>
        <h4 className="font-bold text-slate-900 dark:text-white">{name}</h4>
        <p className="text-sm text-slate-500">{title}</p>
      </div>
    </div>
  </div>
)

export default App;
