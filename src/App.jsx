import React, { useState, useEffect } from "react";
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
} from "lucide-react";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
          <div className="flex items-center gap-2">
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

      <main className="max-w-6xl mx-auto px-6">
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
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white dark:bg-slate-900 rounded-full shadow-lg shadow-slate-200/50 dark:shadow-none text-slate-600 dark:text-slate-400 hover:text-cyan-500 hover:shadow-cyan-500/20 dark:hover:shadow-cyan-500/10 hover:-translate-y-1 transition-all duration-300 border border-slate-100 dark:border-slate-800"
                >
                  <Github size={24} />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white dark:bg-slate-900 rounded-full shadow-lg shadow-slate-200/50 dark:shadow-none text-slate-600 dark:text-slate-400 hover:text-cyan-500 hover:shadow-cyan-500/20 dark:hover:shadow-cyan-500/10 hover:-translate-y-1 transition-all duration-300 border border-slate-100 dark:border-slate-800"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="#"
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Frontend", icons: "React, Next.js, Tailwind" },
              { title: "Backend", icons: "Node.js, Express" },
              { title: "Database", icons: "MongoDB, PostgreSQL" },
              { title: "DevOps", icons: "Git, Docker, Firebase" },
            ].map((skill) => (
              <div
                key={skill.title}
                className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-transparent hover:border-cyan-500/50 transition group"
              >
                <h4 className="font-bold mb-2 group-hover:text-cyan-500 transition">
                  {skill.title}
                </h4>
                <p className="text-sm text-slate-500">{skill.icons}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- PROJECTS SECTION --- */}
        <section id="projects" className="py-20">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl font-bold">My Projects</h2>
            <p className="text-cyan-500 underline cursor-pointer">
              View all GitHub repos
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              title="DevBlog"
              tech="React, Node.js, MongoDB"
              liveLink="https://devblog-murex-three.vercel.app/"
            />
            <ProjectCard
              title="Coral-web"
              tech="React, Tailwind"
              liveLink="https://coral-web-jet.vercel.app/"
            />
            <ProjectCard
              title="ShortLinky"
              tech="React, MongoDB, Tailwind"
              liveLink="https://shortlinky-url-maker.vercel.app/"
            />
            <ProjectCard
              title="Real-time Chat App"
              tech="Socket.io, MongoDB, Tailwind"
            />
          </div>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer className="py-12 border-t border-slate-200 dark:border-slate-800 text-center">
        <p className="text-slate-500">
          © 2026 Sabbir Hossain. Built with React & Tailwind.
        </p>
      </footer>
    </div>
  );
};

const ProjectCard = ({ title, tech, liveLink, githubLink }) => (
  <div className="group relative bg-slate-100 dark:bg-slate-900 rounded-[2.5rem] overflow-hidden">
    <div className="h-64 bg-slate-200 dark:bg-slate-800 overflow-hidden relative">
      <div className="w-full h-full group-hover:scale-110 transition duration-700 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center relative">
        {liveLink ? (
          <>
            {/* Scaled down iframe to show a true live preview of the site */}
            <div className="absolute top-0 left-0 w-[250%] h-[250%] origin-top-left scale-[0.4] pointer-events-none transition-transform duration-700">
              <iframe
                src={liveLink}
                title={title}
                className="w-full h-full border-none bg-white dark:bg-slate-950"
                tabIndex="-1"
              />
            </div>
            {/* Transparent overlay blocks clicks to the iframe, allowing card interaction */}
            <div className="absolute inset-0 z-10 bg-slate-900/5 group-hover:bg-transparent transition-colors duration-500 hover:cursor-pointer" onClick={() => window.open(liveLink, "_blank")}></div>
          </>
        ) : (
          <Code2 size={48} className="text-slate-400 opacity-20 relative z-20" />
        )}
      </div>
    </div>
    <div className="p-8 relative z-20">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-slate-500 mb-6">{tech}</p>
      <div className="flex gap-4">
        {liveLink && (
          <button onClick={() => window.open(liveLink, "_blank")} className="flex items-center gap-2 text-sm font-bold bg-white dark:bg-slate-800 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 hover:border-cyan-500 transition hover:shadow-cyan-500/20 shadow-sm">
            Live <ExternalLink size={14} />
          </button>
        )}
        <button onClick={() => window.open(githubLink || "#", "_blank")} className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-cyan-500 transition">
          GitHub <Github size={14} />
        </button>
      </div>
    </div>
  </div>
);

export default App;
