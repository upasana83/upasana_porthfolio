"use client";

export default function About() {
  const skills = [
    { name: 'React.js', level: 90 },
    { name: 'Next.js', level: 85 },
    { name: 'Node.js', level: 88 },
    { name: 'MongoDB', level: 82 },
    { name: 'Express.js', level: 87 },
    { name: 'TypeScript', level: 80 },
    { name: 'Tailwind CSS', level: 95 },
    { name: 'GraphQL', level: 75 },
  ];

  const achievements = [
    { icon: '🚀', count: '15+', label: 'Projects Delivered' },
    { icon: '💼', count: '3+', label: 'Years Experience' },
    { icon: '😊', count: '25+', label: 'Happy Clients' },
    { icon: '⏱️', count: '10k+', label: 'Hours Coding' },
  ];

  return (
    <section id="about" className="relative py-20 overflow-hidden bg-[#090820]">
      {/* Background gradient orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-[#7030EF]/20 to-[#DB1FFF]/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-[#DB1FFF]/20 to-[#7030EF]/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#7030EF]/10 to-[#DB1FFF]/10 rounded-full blur-3xl"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#7030EF] via-[#DB1FFF] to-[#7030EF] bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#7030EF] to-[#DB1FFF] mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Personal info */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#7030EF]/30 transition-all duration-300 group">
              <h3 className="text-2xl font-semibold mb-4 text-white flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#7030EF] to-[#DB1FFF] flex items-center justify-center text-white text-sm">👋</span>
                Who I Am
              </h3>
              <p className="text-white/70 leading-relaxed">
                I&apos;m <span className="text-transparent bg-gradient-to-r from-[#7030EF] to-[#DB1FFF] bg-clip-text font-semibold">Upasana Patil</span>, 
                a passionate MERN Stack Developer with a keen eye for creating exceptional digital experiences. 
                I specialize in building full-stack web applications that are not only visually stunning 
                but also performant, scalable, and user-centric.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#7030EF]/30 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-white flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#7030EF] to-[#DB1FFF] flex items-center justify-center text-white">🎯</span>
                What I Do
              </h3>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start gap-3">
                  <span className="text-[#DB1FFF] mt-1">•</span>
                  <span>Develop responsive and SEO-friendly web applications using React.js & Next.js</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#DB1FFF] mt-1">•</span>
                  <span>Build robust backend APIs with Node.js, Express.js, and MongoDB</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#DB1FFF] mt-1">•</span>
                  <span>Implement state management using Redux, Context API, and modern React patterns</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#DB1FFF] mt-1">•</span>
                  <span>Optimize application performance and ensure cross-browser compatibility</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right column - Skills and achievements */}
          <div className="space-y-6">
            {/* Skills grid */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#7030EF]/30 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-white flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#7030EF] to-[#DB1FFF] flex items-center justify-center text-white">⚡</span>
                Technical Skills
              </h3>
              <div className="grid gap-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/80">{skill.name}</span>
                      <span className="text-transparent bg-gradient-to-r from-[#7030EF] to-[#DB1FFF] bg-clip-text">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#7030EF] to-[#DB1FFF] rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#7030EF]/30 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-white flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#7030EF] to-[#DB1FFF] flex items-center justify-center text-white">🏆</span>
                Achievements
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((item) => (
                  <div key={item.label} className="text-center p-4 bg-white/5 rounded-xl group hover:bg-white/10 transition-all duration-300">
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{item.icon}</div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-[#7030EF] to-[#DB1FFF] bg-clip-text text-transparent">
                      {item.count}
                    </div>
                    <div className="text-sm text-white/50 group-hover:text-white/70 transition-colors">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom quote */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <p className="text-white/60 italic">
              &quot;Turning complex problems into simple, elegant solutions through code.&quot;
            </p>
            <div className="mt-2 text-transparent bg-gradient-to-r from-[#7030EF] to-[#DB1FFF] bg-clip-text font-medium">
              — Upasana Patil
            </div>
          </div>
        </div>
      </div>

      {/* Add custom styles using Tailwind's arbitrary variants */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient {
            animation: gradient 3s ease infinite;
          }
        `
      }} />
    </section>
  );
}
