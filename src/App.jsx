import logo from './assets/logo.png';
import styles from './App.module.css';

import Markdown from "solid-markdown";

import { FiLink, FiGithub } from 'solid-icons/fi'

import { SiJavascript, SiHtml5, SiCss3, SiPython } from 'solid-icons/si'

import SolidIcon from "./assets/icon/SolidIcon.svg"
import SolidIconDark from "./assets/icon/SolidIconDark.svg"
import MCIcon from "./assets/icon/minecraft.svg"
import MCIconDark from "./assets/icon/minecraftDark.svg"

function App() {
  return (
    <div class={styles.App}>
      <div class={styles.content}>
        <header class={styles.header}>
          <div class={styles.title}>
            <div>
              <h1>Hatchibombotar</h1>
              <p>Developer</p>
            </div>

            <img src={logo} alt="My Logo" class={styles.logo}></img>
          </div>

        </header>

        <main class={styles.main}>
          {/* <Markdown>{homeContent}</Markdown> */}
          <div class={styles.centeredSection}>
            <h2>Projects</h2>
            <Projects />

            <h2>Skills</h2>
            <Skills />

            <h2>Contact</h2>
            <Contact />
          </div>
        </main>
        <footer class={styles.footer} />
      </div>
    </div>
  )
}

const projectData = [
  {
    "name": "Lovely Light Theme",
    "description": "An aethesticly pleasing editor theme for VSCode",
    "image": "/projects/lovely-light.svg",
    "link": "https://marketplace.visualstudio.com/items?itemName=Hatchibombotar.lovely-light",
    "github": "https://github.com/Hatchibombotar/lovely-light-vscode-theme"
  },
  {
    "name": "Minicrafter Maker",
    "description": "A 2D character creator based off of the one in Minecraft",
    "image": "/projects/minicrafter-maker.png",
    "link": "https://hatchibombotar.com/minicrafter-maker/",
    "github": "https://github.com/Hatchibombotar/minicrafter-maker"
  },
  {
    "name": "Minecraft Add-Ons",
    "image": "/projects/addons.png",
    "description": "Addons for Minecraft: Bedrock Edition",
    "link": "https://mcpedl.com/user/hatchibombotar/"
  },
  {
    "name": "Other Projects",
    "description": "My other projects can be found on my [Github Page](https://github.com/Hatchibombotar?tab=repositories)"
  }
]
function Projects() {
  return <div class={styles.projectsSection}>
    <div class={styles.projects}>
      <For each={projectData}>{(project) =>
        <div class={styles.project}>
          <h3>{project.name}</h3>
          <Markdown>{project.description}</Markdown>
          {"image" in project ?
            <img src={project.image} />
            : null
          }
          <div class={styles.projectActions}>
            {"link" in project ?
              <a href={project.link}>
                <FiLink />
              </a>
              : null
            }
            {"github" in project ?
              <a href={project.github}>
                <FiGithub />
              </a>
              : null
            }
          </div>
        </div>
      }</For>
    </div>
  </div>
}

const skillsData = [
  {
    name: "JavaScript",
    level: "Advanced",
    icon: SiJavascript,
    colour: "#FBD569"
  },
  {
    name: "HTML",
    level: "Advanced",
    icon: SiHtml5,
    colour: "#DD5538"
  },
  {
    name: "CSS",
    level: "Advanced",
    icon: SiCss3,
    colour: "#51A4EE"
  },
  {
    name: "SolidJS",
    level: "Intermediate",
    iconType: "multiple",
    icon: SolidIconDark,
    hoverIcon: SolidIcon
  },
  {
    name: "Python",
    level: "Intermediate",
    icon: SiPython,
    colour: "#4578A6"
  },
  {
    name: "Minecraft: Bedrock Addons",
    level: "Expert",
    iconType: "multiple",
    icon: MCIconDark,
    hoverIcon: MCIcon
  }
]

function Skills() {
  return <div>
    <For each={skillsData}>{(skill) =>
      <div class={styles.skill}>{() => {

        const SkillIcon = skill.icon ?? EmptyIcon
        const SkillHoverIcon = skill.hoverIcon ?? EmptyIcon
        if (skill.iconType == "multiple") {
          return <div class={styles.skillMultiple}>
            <img size={25} class={styles.skillIcon} src={SkillIcon}/>
            <img size={25} class={styles.skillHoverIcon} src={SkillHoverIcon} />
            {skill.name} - {skill.level}
          </div>
        } else if (skill.iconType == "external") {
          return <div class={styles.skillDefault} style={{ "--colour": skill.colour }}>
            <img size={25} class={styles.skillIcon} src={SkillIcon} /> {skill.name} - {skill.level}
          </div>
        } else {
          return <div class={styles.skillDefault} style={{ "--colour": skill.colour }}>
            <SkillIcon size={25} class={styles.skillIcon} /> {skill.name} - {skill.level}
          </div>
        }
      }}</div>
    }</For>
  </div>
}

function EmptyIcon() {
  return <></>
}

function Contact() {
  return <div>
    <Markdown>{`
- Discord - hatchibombotar#3794

- Email - [hatchibombotar.mc@gmail.com](mailto:hatchibombotar.mc@gmail.com)
  `}</Markdown>
  </div>
}

export default App;