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
      className="relative flex min-h-screen items-center overflow-hidden bg-[#090820] pt-24"
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

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 md:py-20 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 text-left lg:order-1">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-500"></span>
              <span className="text-sm font-medium text-white/70">
                Available for work
              </span>
            </div>

            <div className="mb-4">
              <span className="text-sm font-medium uppercase tracking-wider text-white/50 md:text-base">
                Welcome to my portfolio
              </span>
            </div>

            <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-7xl">
              <span className="text-white">Hi, I&apos;m </span>
              <span className="bg-gradient-to-r from-[#7030EF] to-[#DB1FFF] bg-clip-text text-transparent">
                Upasana Patil
              </span>
            </h1>

            <div className="mb-6 min-h-12">
              <p className="text-xl font-medium text-white/80 md:text-2xl">
                I&apos;m a{" "}
                <span className="bg-gradient-to-r from-[#7030EF] to-[#DB1FFF] bg-clip-text font-semibold text-transparent">
                  {typedText}
                </span>
                <span className="animate-pulse text-[#DB1FFF]">|</span>
              </p>
            </div>

            <div className="mb-8 flex max-w-xl items-start gap-3">
              <div className="mt-1 text-[#DB1FFF]">
                <FiInfo className="h-5 w-5" aria-hidden="true" />
              </div>
              <p className="text-base leading-relaxed text-white/60 md:text-lg">
                MCA Graduate with{" "}
                <span className="font-semibold text-white">CGPA of 7.78</span>,
                passionate about creating beautiful, responsive web applications
                with clean code and exceptional user experiences.
              </p>
            </div>

            <div className="mb-8 flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="group flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#7030EF] to-[#DB1FFF] px-8 py-3 font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#7030EF]/25"
              >
                <span>Let&apos;s Connect</span>
                <FiArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="#projects"
                className="group flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-8 py-3 font-medium text-white/80 backdrop-blur-sm transition-all duration-300 hover:border-[#7030EF]/30 hover:bg-white/10"
              >
                <span>View Projects</span>
                <FiBriefcase className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="flex items-center gap-4">
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

          <div className="relative order-1 lg:order-2">
            <div className="relative mx-auto max-w-xs md:max-w-sm">
              <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-[#7030EF]/25 via-[#DB1FFF]/20 to-transparent blur-3xl"></div>

              <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-2.5 shadow-2xl shadow-[#7030EF]/20 backdrop-blur-sm">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#090820]">
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
                  <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-[#090820]/90 via-[#090820]/20 to-transparent p-5">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm font-medium text-white backdrop-blur-md">
                      <span className="h-2 w-2 rounded-full bg-green-400"></span>
                      MERN Developer
                    </div>
                  </div>
                </div>

                <div className="mt-3 grid grid-cols-3 gap-2.5">
                  <div className="rounded-xl border border-white/10 bg-[#090820]/60 p-2.5 text-center">
                    <div className="bg-gradient-to-r from-[#7030EF] to-[#DB1FFF] bg-clip-text text-xl font-bold text-transparent">
                      2+
                    </div>
                    <div className="text-[11px] text-white/45">Years Code</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-[#090820]/60 p-2.5 text-center">
                    <div className="bg-gradient-to-r from-[#7030EF] to-[#DB1FFF] bg-clip-text text-xl font-bold text-transparent">
                      10+
                    </div>
                    <div className="text-[11px] text-white/45">Projects</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-[#090820]/60 p-2.5 text-center">
                    <div className="bg-gradient-to-r from-[#7030EF] to-[#DB1FFF] bg-clip-text text-xl font-bold text-transparent">
                      5+
                    </div>
                    <div className="text-[11px] text-white/45">Clients</div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-3 top-7 z-30 grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-[#7030EF]/25 text-[#B58CFF] shadow-lg shadow-[#7030EF]/20 backdrop-blur-sm">
                <SiReact className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="absolute -left-3 bottom-24 z-30 grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-[#DB1FFF]/20 text-[#F0A6FF] shadow-lg shadow-[#DB1FFF]/20 backdrop-blur-sm">
                <SiNextdotjs className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="absolute -right-4 bottom-20 z-30 grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/10 text-white/75 shadow-lg backdrop-blur-sm">
                <FiSmartphone className="h-4 w-4" aria-hidden="true" />
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
