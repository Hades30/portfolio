"use client";

import Image from "next/image";
import SocialLinks from "./SocialLinks";
import React, { useState, useEffect } from "react";

const TEXT_SWITCHER = [
  "I like to code 👨‍💻",
  "I like to play 🎮",
  "I like to sleep 😴",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [fullText, setFullText] = useState(TEXT_SWITCHER[0]);
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = 100; // Same speed for typing and deleting

    if (!isDeleting && text.length < fullText.length) {
      // Still typing
      setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, typeSpeed);
    } else if (!isDeleting && text.length === fullText.length) {
      // Finished typing, wait before starting to delete
      setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && text.length > 0) {
      // Deleting
      setTimeout(() => {
        setText(fullText.slice(0, text.length - 1));
      }, typeSpeed);
    } else if (isDeleting && text.length === 0) {
      // Finished deleting, switch to next text
      setIsDeleting(false);
      const nextIndex = (textIndex + 1) % TEXT_SWITCHER.length;
      setTextIndex(nextIndex);
      setFullText(TEXT_SWITCHER[nextIndex]);
    }
  }, [text, fullText, textIndex, isDeleting]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 py-6 px-4">
        <ul className="flex justify-center space-x-16 text-[#4A5568] uppercase text-sm tracking-[0.3em]">
          <li>
            <a href="#about" className="hover:text-[#1A202C] transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#Work" className="hover:text-[#1A202C] transition-colors">
              Resume
            </a>
          </li>
        </ul>
      </nav>

      {/* Background circles */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full border-[#e8e8e8]"
            style={{
              width: "1600px",
              height: "1600px",
              borderWidth: "1.5px",
              animationName: "contractCircle",
              animationDuration: `${15 + i * 3}s`,
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
              animationDelay: `${i * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center space-y-8">
        <h1 className="text-4xl md:text-4xl font-bold">Hi, I am Tanish</h1>

        <div className="relative w-48 h-48 mx-auto overflow-hidden rounded-full">
          <Image
            src="/avatar.png"
            alt="Profile Avatar"
            width={192}
            height={192}
            className="mx-auto rounded-full object-cover w-full h-full"
            priority
          />
        </div>

        <div className="space-y-8">
          <p className="text-sm uppercase tracking-[0.8em] text-[#4A5568]">
            FULLSTACK DEVELOPER
          </p>
          <div className="flex items-center justify-center space-x-2">
            <h2 className="text-4xl font-bold text-[#1A202C]">{text}</h2>
            <span className="inline-block w-[3px] h-12 bg-[#1A202C] animate-blink"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
