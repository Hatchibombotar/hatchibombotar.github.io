import logo from './assets/logo.png';
import styles from './App.module.css';

import Markdown from "solid-markdown";

import { Icon } from "solid-heroicons";
import { link as linkIcon } from "solid-heroicons/solid";
import githubIcon from "./assets/github.svg"

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
                <Icon path={linkIcon} />
              </a>
              : null
            }
            {"github" in project ?
              <a href={project.github}>
                <img src={githubIcon} />
              </a>
              : null
            }
          </div>
        </div>
      }</For>
    </div>
  </div>
}

function Skills() {
  return <div>
    <Markdown>{`
- JS/HTML/CSS - Advanced

- SolidJS - Intermediate

- Python - Intermediate

- Minecraft Addons - Expert
  `}</Markdown>
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