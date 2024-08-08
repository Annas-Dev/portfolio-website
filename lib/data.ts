import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/skincheckai.png";
import rmtdevImg from "@/public/rstcpersonal.png";
import wordanalyticsImg from "@/public/chandraasri.png";
import medicasIMG from "@/public/medicaas.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [

  {
    title: "Bangkit Graduate",
    location: "Bangkit Academy by Google, GoTo & Tokopedia",
    description:
      "I graduated after 6 months of studying as Bangkit cohort Mobile Development Learning Path",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Co-Founder",
    location: "Skincheck.AI",
    description:
      "After graduate of Bangkit academy, I built a startup over the past year, namely Skincheck.AI.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - Present",
  },
  {
    title: "Full-Stack Developer",
    location: "PT.Metafora Technology",
    description:
      "I worked as a full-stack developer for 3 monts in 2 job, Chandra asri internal career and PT Elbema",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  {
    title: "Mobile Developer",
    location: "PT.Bisa Artificial Indonesia",
    description:
      "I worked as a Mobile developer for 1 year built SIAKAD mobile application by Bisa AI. I also upskilled to the Project Manager.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "CV.Onex Mitratama",
    description:
      "I worked as full-stack developer at Onext Mitratama for 2 years as Frelace Officer",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2022",
  },
] as const;

export const projectsData = [
  {
    title: "Skincheck.AI",
    description:
      "I built a startup over the past year. Users can find solutions to their facial skin problems.",
    tags: ["Flutter", "User Experience", "Firebase", "Kotlin","GCP"],
    imageUrl: corpcommentImg,
  },{
    title: "Medicaas",
    description:
      "I created a service information system for clinics that has been used by the Makassar Axis Eye clinic",
    tags: ["React.js", "Node.js", "User interface", "PrimeReact", "Mysql"],
    imageUrl: medicasIMG,
  },
  {
    title: "rstcPersonal",
    description:
      "I created an employee application for RSUP Dr. Tadjuddin Chalid. Employees can clock in and out through the mobile application.",
    tags: ["Flutter", "Node.js", "User interface", "Dart", "Mysql"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Chandra Asri",
    description:
      "I created an internal career website for PT Chandra Asri. Chandra Asri employees can more easily develop their careers.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "Kotlin",
  "Dart",
  "API",
  "Firebase",
  "User Experience",
  "Flutter",
  "Mysql",
  "Node.js",
  "React.js",
  "Git",
  "Flutter",
  "Time Management",
  "Leadership",
  "Authentication",
  "Android Jetpack",
  "Next.js"
] as const;
