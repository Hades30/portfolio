"use client";
import Image from "next/image";
import Hero from "../components/Hero";
import About from "../components/About";
import Work from "../components/Work";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Work />
    </main>
  );
}
