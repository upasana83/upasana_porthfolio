"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import {
  FiArrowRight,
  FiBriefcase,
  FiCode,
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
      className="relative flex min-h-screen items-center overflow-hidden bg-[#090820] pt-20 sm:pt-24"
    >
      <div className="absolute left-0 top-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#7030EF]/20 to-[#DB1FFF]/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-gradient-to-l from-[#DB1FFF]/20 to-[#7030EF]/20 blur-3xl"></div>
      <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#7030EF]/10 to-[#DB1FFF]/10 blur-3xl"></div>

      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-5 sm:px-6 sm:py-12 md:py-20 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-4 sm:gap-10 lg:grid-cols-2 lg:gap-20">
          <div className="order-1 text-left">
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm sm:mb-6 sm:px-4 sm:py-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-500"></span>
              <span className="text-xs font-medium text-white/70 sm:text-sm">
                Available for work
              </span>
            </div>

            <div className="mb-1.5 sm:mb-4">
              <span className="text-xs font-medium uppercase tracking-wider text-white/50 sm:text-sm md:text-base">
                Welcome to my portfolio
              </span>
            </div>

            <h1 className="mb-2 text-[2rem] font-bold leading-tight max-[380px]:pr-[118px] max-[380px]:text-[1.65rem] sm:mb-4 sm:text-4xl md:text-5xl lg:text-7xl">
              <span className="text-white">Hi, I&apos;m </span>
              <span className="bg-gradient-to-r from-[#7030EF] to-[#DB1FFF] bg-clip-text text-transparent">
                Upasana Patil
              </span>
            </h1>

            <div className="mb-2 min-h-8 max-[380px]:pr-[118px] sm:mb-6 sm:min-h-12">
              <p className="text-base font-medium leading-snug text-white/80 sm:text-xl md:text-2xl">
                I&apos;m a{" "}
                <span className="bg-gradient-to-r from-[#7030EF] to-[#DB1FFF] bg-clip-text font-semibold text-transparent">
                  {typedText}
                </span>
                <span className="animate-pulse text-[#DB1FFF]">|</span>
              </p>
            </div>

            <div className="mb-3 flex max-w-xl items-start gap-2 sm:mb-8 sm:gap-3">
              <div className="mt-1 shrink-0 text-[#DB1FFF]">
                <FiInfo className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
              </div>
             <p className="text-sm leading-relaxed text-white/60 max-[380px]:line-clamp-3 sm:text-base md:text-lg">
  Currently working as a{" "}
  <span className="font-semibold text-white">MERN Stack Developer</span>,
  specializing in building scalable web applications using React,
  Next.js, Node.js, Express.js, and MongoDB with a strong focus on
  performance, user experience, and clean architecture.
</p>
            </div>

            <div className="mb-0 flex flex-wrap gap-3 sm:mb-8 sm:gap-4">
              <Link
                href="#contact"
                className="group flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#7030EF] to-[#DB1FFF] px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#7030EF]/25 sm:px-8 sm:py-3 sm:text-base"
              >
                <span>Let&apos;s Connect</span>
                <FiArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="#projects"
                className="group flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/80 backdrop-blur-sm transition-all duration-300 hover:border-[#7030EF]/30 hover:bg-white/10 sm:px-8 sm:py-3 sm:text-base"
              >
                <span>View Projects</span>
                <FiBriefcase className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="hidden items-center gap-4 sm:flex">
              <span className="text-sm text-white/40">Find me on:</span>
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-white/50 transition-colors hover:border-[#DB1FFF]/40 hover:text-[#DB1FFF]"
                    aria-label={social.name}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="relative order-2 max-[380px]:absolute max-[340px]:right-4 max-[380px]:top-28">
            <div className="relative mx-auto max-w-[190px] max-[380px]:w-[104px] sm:max-w-xs md:max-w-sm">
              <div className="absolute -inset-3 rounded-[1.5rem] bg-gradient-to-br from-[#7030EF]/25 via-[#DB1FFF]/20 to-transparent blur-2xl sm:-inset-5 sm:rounded-[2rem] sm:blur-3xl"></div>

              <div className="relative rounded-[1.5rem] border border-white/10 bg-white/5 p-2 shadow-2xl shadow-[#7030EF]/20 backdrop-blur-sm max-[380px]:rounded-2xl max-[380px]:p-1.5 sm:rounded-[2rem] sm:p-2.5">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.1rem] bg-[#090820] max-[380px]:rounded-xl sm:rounded-[1.5rem]">
                  <Image
                    src="/Upasana.jpeg"
                    alt="Upasana Patil"
                    fill
                    priority
                    sizes="(min-width: 1024px) 24rem, (min-width: 768px) 20rem, 90vw"
                    className="z-10 object-cover object-center"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#7030EF]/20 to-[#DB1FFF]/20">
                    <FiCode
                      className="h-24 w-24 text-white/30"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-[#090820]/90 via-[#090820]/20 to-transparent p-3 max-[380px]:hidden sm:p-5">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-md sm:px-3 sm:text-sm">
                      <span className="h-2 w-2 rounded-full bg-green-400"></span>
                      MERN Developer
                    </div>
                  </div>
                </div>

                {/* <div className="mt-2 grid grid-cols-3 gap-2 max-[380px]:hidden sm:mt-3 sm:gap-2.5">
                  <div className="rounded-xl border border-white/10 bg-[#090820]/60 p-2 text-center sm:p-2.5"> */}
                    {/* <div className="bg-gradient-to-r from-[#7030EF] to-[#DB1FFF] bg-clip-text text-base font-bold text-transparent sm:text-xl">
                      2+
                    </div>
                    <div className="text-[9px] leading-tight text-white/45 sm:text-[11px]">Years Code</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-[#090820]/60 p-2 text-center sm:p-2.5">
                    <div className="bg-gradient-to-r from-[#7030EF] to-[#DB1FFF] bg-clip-text text-base font-bold text-transparent sm:text-xl">
                      10+
                    </div>
                    <div className="text-[9px] leading-tight text-white/45 sm:text-[11px]">Projects</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-[#090820]/60 p-2 text-center sm:p-2.5">
                    <div className="bg-gradient-to-r from-[#7030EF] to-[#DB1FFF] bg-clip-text text-base font-bold text-transparent sm:text-xl">
                      5+
                    </div> */}
                    {/* <div className="text-[9px] leading-tight text-white/45 sm:text-[11px]">Clients</div> */}
                  {/* </div>
                </div> */}
              </div>

              <div className="absolute -right-2 top-5 z-30 grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-[#7030EF]/25 text-[#B58CFF] shadow-lg shadow-[#7030EF]/20 backdrop-blur-sm max-[380px]:-right-1 max-[380px]:top-3 max-[380px]:h-7 max-[380px]:w-7 sm:-right-3 sm:top-7 sm:h-12 sm:w-12 sm:rounded-2xl">
                <SiReact className="h-4 w-4 sm:h-6 sm:w-6" aria-hidden="true" />
              </div>
              <div className="absolute -left-2 bottom-16 z-30 grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-[#DB1FFF]/20 text-[#F0A6FF] shadow-lg shadow-[#DB1FFF]/20 backdrop-blur-sm max-[380px]:-left-1 max-[380px]:bottom-4 max-[380px]:h-7 max-[380px]:w-7 sm:-left-3 sm:bottom-24 sm:h-12 sm:w-12 sm:rounded-2xl">
                <SiNextdotjs className="h-4 w-4 sm:h-6 sm:w-6" aria-hidden="true" />
              </div>
              <div className="absolute -right-3 bottom-14 z-30 grid h-8 w-8 place-items-center rounded-xl border border-white/10 bg-white/10 text-white/75 shadow-lg backdrop-blur-sm max-[380px]:hidden sm:-right-4 sm:bottom-20 sm:h-10 sm:w-10 sm:rounded-2xl">
                <FiSmartphone className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}
