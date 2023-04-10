import logo from './assets/logo_small.png';
import styles from './App.module.scss';

import Markdown from "solid-markdown";

import { FiLink, FiGithub } from 'solid-icons/fi'

import { SiJavascript, SiHtml5, SiCss3, SiPython } from 'solid-icons/si'

import SolidIcon from "./assets/icon/solidIcon.svg"
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

            <img src={logo} alt="My Logo" class={styles.logo} height="100" width="81"></img>
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
    "alt": "An image of my light mode theme.",
    "link": "https://marketplace.visualstudio.com/items?itemName=Hatchibombotar.lovely-light",
    "github": "https://github.com/Hatchibombotar/lovely-light-vscode-theme"
  },
  {
    "name": "Minicrafter Maker",
    "description": "A 2D character creator based off of the one in Minecraft",
    "image": "/projects/minicrafter-maker.png",
    "alt": "An image of my character creator.",
    "link": "https://hatchibombotar.com/minicrafter-maker/",
    "github": "https://github.com/Hatchibombotar/minicrafter-maker"
  },
  {
    "name": "Minecraft Add-Ons",
    "image": "/projects/addons.png",
    "alt": "A preview of my some of my addons.",
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
            <a href={project.link}>
              <img src={project.image} class={styles.image} alt={project.alt} />
            </a>
            : null
          }
          <div class={styles.projectActions}>
            {"link" in project ?
              <a href={project.link} aria-label="Go to the project page.">
                <FiLink/>
              </a>
              : null
            }
            {"github" in project ?
              <a href={project.github} aria-label="Go to the project github.">
                <FiGithub/>
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
    iconType: "image",
    icon: SolidIcon
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
    iconType: "image",
    icon: MCIcon
  }
]

function Skills() {
  return <div>
    <For each={skillsData}>{(skill) =>
      <div class={styles.skill}>{() => {
        const SkillIcon = skill.icon
        if (skill.iconType == "image") {
          return <div>
            <img width={25} class={styles.skillIcon} src={SkillIcon} alt={`skill icon for ${skill.name}`}/>
          </div>
        } else {
          return <div style={{ "--colour": skill.colour }}>
            <SkillIcon size={25} class={styles.skillIcon} />
          </div>
        }
      }}
        {skill.name} - {skill.level}
      </div>
    }</For>
  </div>
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