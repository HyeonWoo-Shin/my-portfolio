import React, { useEffect, useState } from "react";
import { Mail, Github } from "lucide-react";
import "./index.css";
import novel from "./novel.jpg";
import aiClothRec from "./aiClothRec.jpg";
import inBodyOCR from "./inBodyOCR.jpg";

export default function App() {
  const [color, setColor] = useState(false);

  function changeColor() {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  }

  useEffect(function () {
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div className="gradient">
      <div className="container">
        <Navbar color={color} />
        <Header />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

function Navbar({ color }) {
  return (
    <nav className={color ? "navbar navbar-bg" : "navbar"}>
      <p>
        <a href="#skills">Skills</a>
      </p>
      <p>
        <a href="#projects">Projects</a>
      </p>
    </nav>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="headerContent">
        <h1 className="title">
          안녕하십니까 <span className="title-name">신현우 </span>입니다
        </h1>
        <p className="subtitle">👨🏻‍💻프론트엔드 개발</p>
        <p className="about-me">
          저는 신입 프론트엔드 개발자 신현우입니다. 직관적인 UI/UX 디자인으로
          유저 친화적인 웹/앱 어플리케이션을 만드려고합니다.
        </p>
        <div className="contactLinks">
          <a
            data-tooltip="Email"
            data-flow="bottom"
            href="mailto:larenghyeon310@gmail.com"
            className="iconLink"
          >
            <Mail size={24} />
          </a>
          <a
            data-tooltip="GitHub"
            data-flow="bottom"
            href="https://github.com/HyeonWoo-Shin"
            target="_blank"
            rel="noopener noreferrer"
            className="iconLink"
          >
            <Github size={24} />
          </a>
        </div>
      </div>
    </header>
  );
}

function Skills() {
  return (
    <section className="section">
      <h2 className="sectionTitle" id="skills" tabIndex={-1}>
        Skills
      </h2>
      <div className="skills">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </section>
  );
}

function SkillCard({ skill }) {
  return (
    <div data-tooltip={skill.title} data-flow="bottom">
      <img
        className="skillCard"
        src={skill.image}
        alt={skill.title}
        loading="lazy"
      />
    </div>
  );
}

function Projects() {
  return (
    <section className="section">
      <h2 className="sectionTitle" id="projects" tabIndex={-1}>
        Projects
      </h2>
      <div className="projectGrid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <div className={`card project${project.id}`}>
      <img
        src={project.image}
        alt={project.title}
        className="cardImage"
        loading="lazy"
      />
      <div className="cardContent">
        <h3 className="cardTitle">{project.title}</h3>
        <p className="cardDescription">{project.description}</p>
        <p className="cardTech">
          Technologies: {project.technologies.join(", ")}
        </p>
        <ul className="featureList">
          {project.features.map((feature, index) => (
            <li key={index} className="featureItem">
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <section className="section">
      <p className="about-me">
        포트폴리오를 봐주셔서 감사합니다.{" "}
        <span data-tooltip="좋은하루 보내세요!" data-flow="bottom">
          😀
        </span>
      </p>
    </section>
  );
}

const skills = [
  {
    title: " HTML",
    image:
      "https://cdn.iconscout.com/icon/free/png-256/free-html-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-3-pack-logos-icons-2944937.png",
  },
  {
    title: "CSS",
    image:
      "https://cdn.iconscout.com/icon/free/png-256/free-css-logo-icon-download-in-svg-png-gif-file-formats--logos-pack-icons-722685.png",
  },

  {
    title: "JavaScript",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png",
  },
  {
    title: "React.js",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
  },
  {
    title: "BootStrap",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png",
  },
  {
    title: "Python",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/1f/Python_logo_01.svg",
  },
  {
    title: "Flutter",
    image:
      "https://storage.googleapis.com/cms-storage-bucket/0dbfcc7a59cd1cf16282.png",
  },
  {
    title: "Java",
    image:
      "https://cdn.iconscout.com/icon/free/png-512/free-java-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-language-pack-logos-icons-1174953.png",
  },
  {
    title: "GitHub",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Github-desktop-logo-symbol.svg/2048px-Github-desktop-logo-symbol.svg.png",
  },
];

const projects = [
  {
    id: 1,
    title: "Novel",
    image: novel,
    technologies: ["HTML", "CSS", "JavaScript", "JSP", "MySQL"],
    description: "웹 소설 정보 웹앱 Novel입니다",
    features: ["Static Web App"],
  },
  {
    id: 2,
    title: "AI 옷 추천 앱",
    image: aiClothRec,
    technologies: ["Flutter", "Dart", "Python"],
    description:
      "OpenAI의 api로 그날의 날씨,일정에 따른 옷을 추천받고 text to image로 이미지화시켜 옷을 추천하도록 하였습니다.",
    features: ["Dynamic Android App", "API Data Fetching"],
  },
  {
    id: 3,
    title: "Inbody 운동 추천 ( 앱 구현 파트 )",
    image: inBodyOCR,
    technologies: ["Flutter", "Dart", "Python"],
    description:
      "Inbody의 결과지를 사진으로 찍거나, 이미지에서 선택하여 몸상태에 맞는 운동을 추천하도록 하였습니다.",
    features: ["Dynamic Android App", "API Data Fetching", "Python OCR"],
  },
];
