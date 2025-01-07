"use client";
import { Card } from "./ui/card";
import React from "react";
import Image from "next/image";
import MyDocument from "./Resume";

const works = [
  {
    company: "Fampay Solutions",
    description: [
      "Created web views for Android and iOS users of the Fampay service, serving a user base of over 15 million users.",
      "Developed a goal-based savings app empowering users to save money and achieve their financial objectives.",
      "Managed and maintained a custom visa card ordering website with personalized name and card designs at scale, providing seamless user experience and convenience.",
      "Utilized Next.js and Tailwind CSS to create responsive layouts with optimized loading.",
    ],
  },
  {
    company: "SupplyNote",
    description: [
      "Developed a bulk upload feature enabling efficient data management from Excel sheets, saving significant time in product discussions.",
      "Implemented notifications and backoff for order management, ensuring smooth operations.",
    ],
  },
  {
    title: "Procol Tech",
    role: "Software Engineer II",
    duration: "Aug 2022 - Present",
    description: [
      "Working on the core product team",
      "Developing and maintaining features",
      "Collaborating with cross-functional teams",
    ],
  },
  {
    title: "Procol Tech",
    role: "Software Engineer I",
    duration: "July 2021 - July 2022",
    description: [
      "Developed key features",
      "Improved performance",
      "Worked on UI/UX improvements",
    ],
  },
];

export default function Work() {
  return (
    <section
      id="Work"
      className="min-h-screen bg-gradient-to-b from-white to-black py-20"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
          Resume
        </h2>
        <MyDocument />
      </div>
    </section>
  );
}
