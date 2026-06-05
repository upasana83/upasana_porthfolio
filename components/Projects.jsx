"use client";

// Move the projects data inside the component file or import it correctly
const projects = [
  // {
  //   title: "Ed-Rho Platform",
  //   tech: "Next.js, React, TailwindCSS, Node.js",
  //   description:
  //     "An educational platform with modern UI/UX design principles, featuring responsive layouts and interactive learning components.",
  //   live: "https://ed-rho-three.vercel.app/",
  //   github: "https://github.com/Prathamesh0008/ed_upasana.git",
  //   icon: "📚",
  // },
  {
    title: "BioPeptide Science",
    tech: "React, TailwindCSS, Framer Motion",
    description:
      "Scientific and biotechnology website showcasing peptide research, products, and innovations with a professional user experience.",
    live: "https://www.bio-peptides.com/",
    icon: "🧬",
  },
  {
    title: "Tech Next",
    tech: "Next.js, TypeScript, TailwindCSS",
    description:
      "Modern technology showcase website with cutting-edge design patterns and responsive architecture.",
    live: "https://share.google/RHz1dzIm1F2JVo9wY",
    icon: "💻",
  },
  {
    title: "KVA Logistics",
    tech: "Web Development, Responsive Design",
    description:
      "Professional logistics and transportation company website showcasing services, operations, and global logistics solutions.",
    live: "https://www.kvalogistics.nl/",
    icon: "🚚",
  },
  {
    title: "Novatech Science",
    tech: "Web Development, Corporate Website",
    description:
      "Corporate website developed for Novatech Science with modern design, responsive layouts, and business-focused content.",
    live: "https://www.novatechscience.com/",
    icon: "🔬",
  },
  {
    title: "Portfolio Website",
    tech: "Next.js, TailwindCSS, Framer Motion",
    description:
      "Personal portfolio website showcasing projects, technical skills, and professional experience.",
    live: "https://upasanaporthfolio-qjkjhspkv-upasana-patil-s-projects.vercel.app/",
    github: "https://github.com/Prathamesh0008/ed_upasana.git",
    icon: "👩‍💻",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 overflow-hidden bg-[#090820]">
      {/* Background gradient orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-[#3b0270]/20 to-[#6f00ff]/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-[#e9b3fb]/20 to-[#fff1f1]/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#3b0270]/10 to-[#6f00ff]/10 rounded-full blur-3xl"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `linear-gradient(to right, #ffffff10 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }}></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#3b0270] via-[#6f00ff] to-[#e9b3fb] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#3b0270] to-[#6f00ff] mx-auto rounded-full"></div>
          <p className="text-white/50 mt-4 max-w-2xl mx-auto text-sm">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#6f00ff]/30 transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Gradient accent line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#3b0270] to-[#6f00ff] group-hover:w-full transition-all duration-300 rounded-t-full"></div>
              
              {/* Project icon/emoji based on title */}
              <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-r from-[#3b0270]/20 to-[#6f00ff]/20 flex items-center justify-center text-2xl">
                {project.icon}
              </div>

              {/* Project title */}
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#3b0270] group-hover:to-[#6f00ff] group-hover:bg-clip-text transition-all duration-300">
                {project.title}
              </h3>

              {/* Tech stack */}
              <p className="text-white/50 text-sm mb-4 font-mono">
                {project.tech}
              </p>

              {/* Project description */}
              <p className="text-white/40 text-xs mb-4 line-clamp-2">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.split(',').map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-white/5 rounded-full text-white/40 text-xs border border-white/5"
                  >
                    {tech.trim()}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 hover:text-transparent hover:bg-gradient-to-r hover:from-[#6f00ff] hover:to-[#e9b3fb] hover:bg-clip-text transition-all duration-300 flex items-center gap-1"
                >
                  Live Demo
                  <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
                </a>
                
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/60 hover:text-transparent hover:bg-gradient-to-r hover:from-[#6f00ff] hover:to-[#e9b3fb] hover:bg-clip-text transition-all duration-300"
                  >
                    GitHub
                  </a>
                )}
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#3b0270]/0 to-[#6f00ff]/0 rounded-xl group-hover:from-[#3b0270]/10 group-hover:to-[#6f00ff]/10 blur-xl transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/upasana-patil"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white/80 hover:border-[#6f00ff]/30 hover:bg-white/10 transition-all duration-300 group"
          >
            <span>View More on GitHub</span>
            <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        {/* Stats */}
        <div className="mt-12 flex justify-center gap-8 text-sm">
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-[#3b0270] to-[#6f00ff] bg-clip-text text-transparent">
              {projects.length}+
            </div>
            <div className="text-white/40">Total Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-[#6f00ff] to-[#e9b3fb] bg-clip-text text-transparent">
              {projects.filter(p => p.live && p.live !== "#").length}+
            </div>
            <div className="text-white/40">Live Demos</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-[#e9b3fb] to-[#fff1f1] bg-clip-text text-transparent">
              {projects.filter(p => p.github).length}+
            </div>
            <div className="text-white/40">Open Source</div>
          </div>
        </div>
      </div>
    </section>
  );
}