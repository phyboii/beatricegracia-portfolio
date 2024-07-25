import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import scblms from "@/public/scb-lms.png"
import jico from "@/public/jico.png";
import tompsAsset from "@/public/tompsAsset.png"

export const links = [
  {
    name: "Home",
    hash: "https://beatricegracia-portfolio.netlify.app/#home",
  },
  {
    name: "About",
    hash: "https://beatricegracia-portfolio.netlify.app/#about",
  },
  {
    name: "Skills",
    hash: "https://beatricegracia-portfolio.netlify.app/#skills",
  },
  {
    name: "Experience",
    hash: "https://beatricegracia-portfolio.netlify.app/#experience",
  },
  {
    name: "Projects",
    hash: "https://beatricegracia-portfolio.netlify.app/#projects",
  },
  {
    name: "Contact",
    hash: "https://beatricegracia-portfolio.netlify.app/#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full-Stack Engineer Intern",
    location: "Nawa Data Solutions",
    description:
      "I'm utilizing Microsoft SQL Server to design, implement, and optimize robust database schemas and queries. With that, I also optimised queries running on multiple databases for better performance.",
    icon: React.createElement(CgWorkAlt),
    date: "Mar 2023 - Sep 2023",
  },
  {
    title: "Front-End Developer Intern",
    location: "PT Telkom Indonesia",
    description:
      "I received front-end specialized training and created UI prototypes using Figma, Vue.js and other front-end technologies. Also collaborated with designers to create a modern, user-friendly interface.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2023 - Sep 2023",
  },
  {
    title: "Frontend Web Developer Intern",
    location: "Tomps Indonesia",
    description:
      "In this internship, I created user interfaces with Next, React, HTML, CSS, JavaScript, and other frontend technologies. Using tools like PowerBi, Leaflet and such, I implemented responsive designs that worked across multiple device sizes and platforms.",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2023 - Feb 2024",
  },
  {
    title: "University Graduation",
    location: "BINUS University",
    description:
      "After 3.5 years, I'm currently waiting to receive my diploma. My current GPA is 3.31",
    icon: React.createElement(LuGraduationCap),
    date: "July 2024",
  },
] as const;

export const projectsData = [
  {
    title: "SCB Loan Management System",
    description:
      "I organized and improved the database setup and wrote queries to get and manage data smoothly using Microsoft SQL Server Management Studio.",
    tags: ["SQL", ".NET", "ReactJs"],
    imageUrl: scblms,
  },
  {
    title: "JICO",
    description:
      "A connector for JIRA and Discord. This project serve to convenience worker using Discord as notification for JIRA updates.",
    tags: ["React", "Javascript", "Next.js", "Tailwind", "Figma", "MongoDB", "GO"],
    imageUrl: jico,
  },
  {
    title: "Tomps Asset",
    description:
      "Tomps Asset is a platform created by Tomps Indonesia to help businesses manage their assets and schedule maintenance easier.",
    tags: ["React", "Next.js", "Typescript", "Tailwind", "PowerBi", "HTML"],
    imageUrl: tompsAsset,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "React",
  "Next.js",
  "Tailwind",
  "JavaScript",
  "TypeScript",
  "Git",
  "SQL",
] as const;
