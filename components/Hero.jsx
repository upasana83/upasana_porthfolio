"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import {
  FiArrowRight,
  FiBriefcase,
  FiInfo,
  FiSmartphone,
} from "react-icons/fi";
import { SiNextdotjs, SiReact } from "react-icons/si";

const roles = [
  "MERN Stack Developer",
  "MCA Graduate",
  "UI Enthusiast",
  "Problem Solver",
];

const socials = [
  { href: "#", icon: FaGithub, name: "GitHub" },
  { href: "#", icon: FaLinkedinIn, name: "LinkedIn" },
];

export default function Hero() {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let roleIndex = 0;
    let letterIndex = 0;
    let isDeleting = false;
    let timeoutId;

    const type = () => {
      const currentRole = roles[roleIndex];
      setTypedText(currentRole.substring(0, letterIndex));

      if (!isDeleting && letterIndex <= currentRole.length) {
        letterIndex += 1;
      }

      if (isDeleting && letterIndex >= 0) {
        letterIndex -= 1;
      }

      if (letterIndex === currentRole.length + 1) {
        isDeleting = true;
      }

      if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }

      timeoutId = setTimeout(type, isDeleting ? 80 : 160);
    };

    type();

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#090820] py-8 sm:py-12"
    >
      {/* Background gradient orbs */}
      <div className="absolute left-0 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#7030EF]/20 to-[#DB1FFF]/20 blur-3xl sm:h-96 sm:w-96"></div>
      <div className="absolute bottom-0 right-0 h-64 w-64 translate-x-1/2 translate-y-1/2 rounded-full bg-gradient-to-l from-[#DB1FFF]/20 to-[#7030EF]/20 blur-3xl sm:h-96 sm:w-96"></div>
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#7030EF]/10 to-[#DB1FFF]/10 blur-3xl sm:h-[800px] sm:w-[800px]"></div>

      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Desktop-like two-column grid on all screen sizes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Left column - Text content */}
          <div className="text-left w-full">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm sm:mb-6">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-500"></span>
              <span className="text-xs font-medium text-white/70 sm:text-sm">
                Available for work
              </span>
            </div>

            <div className="mb-2">
              <span className="text-xs font-medium uppercase tracking-wider text-white/50 sm:text-sm md:text-base">
                Welcome to my portfolio
              </span>
            </div>

            <h1 className="mb-3 text-2xl font-bold leading-tight sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              <span className="text-white">Hi, I&apos;m </span>
              <span className="whitespace-nowrap bg-gradient-to-r from-[#7030EF] to-[#DB1FFF] bg-clip-text text-transparent">
                Upasana Patil
              </span>
            </h1>

            {/* Typed text container */}
            <div className="mb-3 min-h-[3rem] sm:mb-6 sm:min-h-[4rem]">
              <p className="text-sm font-medium leading-snug text-white/80 sm:text-base md:text-xl">
                I&apos;m a{" "}
                <span className="inline-block bg-gradient-to-r from-[#7030EF] to-[#DB1FFF] bg-clip-text font-semibold text-transparent">
                  {typedText}
                </span>
                <span className="inline-block animate-pulse text-[#DB1FFF]">|</span>
              </p>
            </div>

            <div className="mb-4 flex max-w-xl items-start gap-2 sm:mb-8 sm:gap-3">
              <div className="mt-1 shrink-0 text-[#DB1FFF]">
                <FiInfo className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
              </div>
              <p className="text-xs leading-relaxed text-white/60 sm:text-sm md:text-base">
                Currently working as a{" "}
                <span className="font-semibold text-white">MERN Stack Developer</span>,
                specializing in building scalable web applications using React,
                Next.js, Node.js, Express.js, and MongoDB with a strong focus on
                performance, user experience, and clean architecture.
              </p>
            </div>

            <div className="mb-6 flex flex-wrap gap-3 sm:mb-8 sm:gap-4">
              <Link
                href="#contact"
                className="group flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#7030EF] to-[#DB1FFF] px-4 py-2 text-xs font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#7030EF]/25 sm:px-6 sm:py-2.5 sm:text-sm md:px-8 md:py-3 md:text-base"
              >
                <span>Let&apos;s Connect</span>
                <FiArrowRight
                  className="h-3 w-3 transition-transform group-hover:translate-x-1 sm:h-4 sm:w-4"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="#projects"
                className="group flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/80 backdrop-blur-sm transition-all duration-300 hover:border-[#7030EF]/30 hover:bg-white/10 sm:px-6 sm:py-2.5 sm:text-sm md:px-8 md:py-3 md:text-base"
              >
                <span>View Projects</span>
                <FiBriefcase className="h-3 w-3 sm:h-4 sm:w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-xs text-white/40 sm:text-sm">Find me on:</span>
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/5 text-white/50 transition-colors hover:border-[#DB1FFF]/40 hover:text-[#DB1FFF] sm:h-9 sm:w-9"
                    aria-label={social.name}
                  >
                    <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right column - Image with floating icons */}
          <div className="relative flex justify-center w-full">
            <div className="relative w-[160px] h-[200px] sm:w-[200px] sm:h-[250px] md:w-[260px] md:h-[320px] lg:w-[350px] lg:h-[440px] xl:w-[400px] xl:h-[500px]">
              {/* Glow effect behind image */}
              <div className="absolute -inset-3 rounded-[1.5rem] bg-gradient-to-br from-[#7030EF]/25 via-[#DB1FFF]/20 to-transparent blur-3xl sm:-inset-4 sm:rounded-[2rem]"></div>

              {/* Main image card */}
              <div className="relative h-full w-full rounded-[1.5rem] border border-white/10 bg-white/5 p-1.5 shadow-2xl shadow-[#7030EF]/20 backdrop-blur-sm sm:p-2 sm:rounded-[2rem]">
                <div className="relative h-full w-full overflow-hidden rounded-[1rem] sm:rounded-[1.5rem]">
                  <Image
                    src="/Upasana.jpeg"
                    alt="Upasana Patil"
                    fill
                    priority
                    sizes="(max-width: 640px) 160px, (max-width: 768px) 200px, (max-width: 1024px) 260px, 350px"
                    className="object-cover object-center"
                  />

                  {/* Badge on image */}
                  <div className="absolute bottom-1 left-1 z-20 sm:bottom-2 sm:left-2 md:bottom-3 md:left-3">
                    <div className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/10 px-1.5 py-0.5 text-[8px] text-white backdrop-blur-md sm:gap-1.5 sm:px-2 sm:py-0.5 sm:text-[10px] md:gap-2 md:px-3 md:py-1 md:text-xs">
                      <span className="h-1 w-1 rounded-full bg-green-400 sm:h-1.5 sm:w-1.5 md:h-2 md:w-2"></span>
                      MERN Developer
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating tech icons */}
              <div className="absolute -right-2 top-4 z-30 grid h-7 w-7 place-items-center rounded-lg border border-white/10 bg-[#7030EF]/25 text-[#B58CFF] backdrop-blur-sm sm:-right-3 sm:top-6 sm:h-8 sm:w-8 sm:rounded-xl md:h-10 md:w-10">
                <SiReact className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5" />
              </div>

              <div className="absolute -left-2 bottom-10 z-30 grid h-7 w-7 place-items-center rounded-lg border border-white/10 bg-[#DB1FFF]/20 text-[#F0A6FF] backdrop-blur-sm sm:-left-3 sm:bottom-14 sm:h-8 sm:w-8 sm:rounded-xl md:h-10 md:w-10">
                <SiNextdotjs className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5" />
              </div>

              <div className="absolute -right-2 bottom-14 z-30 hidden h-7 w-7 place-items-center rounded-lg border border-white/10 bg-white/10 text-white/75 backdrop-blur-sm sm:-right-4 sm:bottom-20 sm:grid sm:h-8 sm:w-8 sm:rounded-xl md:h-10 md:w-10">
                <FiSmartphone className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}