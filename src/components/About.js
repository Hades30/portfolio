"use client";
import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          A little background
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <Image
            src="/dance-ezgif.com-gif-maker.gif"
            alt="Profile"
            unoptimized
            className="justify-self-center hidden md:block"
            width="360"
            height="360"
          />
          <div className="space-y-4 text-gray-800 text-sm md:text-lg">
            <p>
              I am a Frontend Heavy Fullstack engineer of 3 years Experience and
              I am currently working at Procol Tech Pvt Ltd (Gurugram) as a
              Software Engineer II.
            </p>
            <p>
              With a keen eye for detail and a knack for troubleshooting, I
              strive to stay on top of the latest trends, for the web works for
              no one.
            </p>
            <p>
              I am from Delhi, India, I did my schooling from Salwan Public
              School (Not Salman Khan ;P) and did my Bachelor&apos;s degree in
              Computer Science and Engineering from Jaypee Institute of
              Information Technology (JIIT), Noida.
            </p>
            <p style={{ position: "relative" }}>
              When not coding away, you&apos;ll find me gaming and playing
              football, watching movies and Naruto.
              <Image
                src="/naruto2.png"
                alt="Profile"
                unoptimized
                className="justify-self-center hidden lg:block animated-image"
                width="52"
                height="52"
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
