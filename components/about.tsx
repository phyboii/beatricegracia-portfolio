"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-3 text-xl leading-10">
        Greetings! I'm a driven front-end developer specializing in{" "}
        <span className=" font-semibold">
          ReactJS, HTML, CSS, and JavaScript,{" "}
        </span>{" "}
        with a solid foundation in{" "}
        <span className="font-semibold">VueJS and MySQL.</span> I have a knack
        for transforming design concepts into seamless, user-centric web
        experiences. Leveraging tools like{" "}
        <span className="font-semibold"> Figma and Canva</span>, I ensure every
        project not only functions flawlessly but also captivates visually.
      </p>

      <p className="mb-3 text-xl leading-10 mt-10">
        Throughout my internships at prestigious companies such as{" "}
        <span className="underline">PT Telkom Indonesia</span>,
        <span className="underline"> Tomps Indonesia </span>, and
        <span className="underline"> Nawa Data Solution</span>, I've gained
        practical experience and honed my skills in real-world settings. Beyond
        technical prowess, I excel in{" "}
        <span className="italic">
          communication, problem-solving, and adaptability
        </span>
        , making me an asset in any collaborative environment.
      </p>

      <p className="mb-3 text-xl leading-10 mt-10">
        With a passion for innovation and a commitment to excellence, I'm eager
        to contribute my expertise to your team. Let's collaborate on projects
        that push the boundaries of web development and create lasting impact
        together.
      </p>
    </motion.section>
  );
}
