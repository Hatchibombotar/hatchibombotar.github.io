import logo from './assets/logo_small.png';
// import styles from './App.module.scss';

import Markdown from "solid-markdown";

import { FiLink, FiGithub } from 'solid-icons/fi'

import { SiJavascript, SiHtml5, SiCss3, SiPython, SiTypescript, SiTailwindcss, SiAstro, SiSass } from 'solid-icons/si'

import SolidIcon from "./assets/icon/solidIcon.svg"
import SolidIconDark from "./assets/icon/SolidIconDark.svg"
import MCIcon from "./assets/icon/minecraft.svg"
import MCIconDark from "./assets/icon/minecraftDark.svg"

import './index.css';
import { createResource } from 'solid-js';


function App() {
  return (
    <div class="bg-cool-100 rounded-2xl m-3 max-h-screen overflow-hidden">
      <div class="m-2 overflow-y-scroll max-h-[calc(100vh-40px)]">
        <header class="overflow-hidden">
          <div class="">
            <div class="float-left">
              <h1 class="text-3xl m-1">Hatchibombotar</h1>
              <p class="m-1">Developer</p>
            </div>

            <img src={logo} alt="My Logo" class="h-12 w-auto float-right m-2" height="100" width="81"></img>
          </div>

        </header>

        <main class="text-center flex justify-center items-center flex-col">
          {/* <Markdown>{homeContent}</Markdown> */}
          <h2 class="text-2xl p-4 font-semibold">Projects</h2>
          <Projects />

          <h2 class="text-2xl p-4 font-semibold">Skills</h2>
          <Skills />

          <h2 class="text-2xl p-4 font-semibold">Contact</h2>
          <Contact />
        </main>
        <footer class="h-24" />
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
  }
]
function Projects() {

  const [githubUserData] = createResource(async () => {
    const data = await fetch("https://api.github.com/users/Hatchibombotar")
    // console.log(await data.json())
    return await data.json()
  })
  console.log(githubUserData())
  return <div class="">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-2xl">
      <For each={projectData}>{(project) =>
        <div class="bg-cool-50 text-center m-1 rounded-2xl shadow-xl">
          <h3 class="f font-bold text-xl m-3">{project.name}</h3>
          <Markdown class="m-2 prose">{project.description}</Markdown>
          {"image" in project ?
            <a href={project.link}>
              <img src={project.image} class="w-[calc(100%-24px)] m-2 rounded-2xl shadow-md inline aspect-[1.36] bg-[#eaeaeb]" alt={project.alt} />
            </a>
            : null
          }
          <div class="flex m-3 mt-1">
            {"link" in project ?
              <a href={project.link} aria-label="Go to the project page.">
                <FiLink size={24} />
              </a>
              : null
            }
            {"github" in project ?
              <a href={project.github} aria-label="Go to the project github.">
                <FiGithub size={24} />
              </a>
              : null
            }
          </div>
        </div>
      }</For>
      <div class="bg-cool-50 text-center m-1 rounded-2xl shadow-xl">
        <h3 class="font-bold text-xl m-3">Github</h3>
        <div class="text-left border-l-2 px-4 mx-6 border-opacity-20">
          <div class="flex items-center justify-left my-1">
            <img src={githubUserData()?.avatar_url} class="h-10 border rounded-full mr-2 border-opacity-20 border-solid" />
            <p class="font-semibold">{githubUserData()?.login}</p>
          </div>
          <p class="ml-2">{githubUserData()?.public_repos} Public Repos</p>
          <p class="ml-2">{githubUserData()?.followers} Followers</p>
        </div>

        <Markdown class="m-2 mb-5 prose">Find some of my other projects on my [Github Page](https://github.com/Hatchibombotar?tab=repositories)</Markdown>
      </div>
    </div>
  </div>
}

const skillsData = [
  {
    name: "TypeScript",
    level: "Expert",
    icon: SiTypescript,
    colour: "#3178c6"
  },
  {
    name: "Tailwind CSS",
    level: "Expert",
    icon: SiTailwindcss,
    colour: "#38bdf8"
  },
  {
    name: "Astro",
    level: "Expert",
    icon: SiAstro,
    colour: "#ff5d00"
  },
  {
    name: "SASS",
    level: "Expert",
    icon: SiSass,
    colour: "#c76494"
  },
  {
    name: "Solid JS",
    level: "Intermediate",
    iconType: "image",
    icon: SolidIcon
  },
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
    name: "Python",
    level: "Intermediate",
    icon: SiPython,
    colour: "#4578A6"
  },
  {
    name: "Minecraft Add-Ons",
    level: "Expert",
    iconType: "image",
    icon: MCIcon
  }
]

function Skills() {
  return <div class="grid sm:grid-cols-2">
    <For each={skillsData}>{(skill) =>
      <div class="flex items-center m-2 text-left sm:grayscale sm:brightness-[0.4] hover:filter-none hover:ease-[cubic-bezier(1,1,0,0)] hover:transition duration-[14s]">{() => {
        const SkillIcon = skill.icon
        if (skill.iconType == "image") {
          return <div class="mx-2 flex items-center">
            <img width={25} class="" src={SkillIcon} alt={`skill icon for ${skill.name}`} />
          </div>
        } else {
          return <div style={{ "--colour": skill.colour }} class="mx-2 flex items-center text-[var(--colour)]">
            <SkillIcon size={25} class="" />
          </div>
        }
      }}
        {skill.name}
      </div>
    }</For>
  </div>
}

function Contact() {
  return <div>
    <Markdown class="prose">{`
- Discord - hatchibombotar#3794

- Email - [hatchibombotar.mc@gmail.com](mailto:hatchibombotar.mc@gmail.com)
  `}</Markdown>
  </div>
}

export default App;