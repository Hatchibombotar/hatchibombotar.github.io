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
import { Show, createResource } from 'solid-js';


function App() {
  return (
    <div class="bg-gray-100">
      {/* <div class="relative left-0 bg-gray-50 w-24">
        <ul>
          <li>Projects</li>
        </ul>
      </div> */}
      <div class="mx-auto max-w-2xl px-4 text-center sm:text-left">

        <br class="my-5" />
        <header class="py-8">
          <div class="flex items-center justify-center sm:justify-normal">
            <img src={logo} class="h-16"></img>
            <div class="mx-4 text-left">
              <h1 class="text-3xl font-semibold">Hatchibombotar</h1>
              <p class="">Developer</p>
            </div>
          </div>

        </header>
        <hr class="my-5" />


        <h2 class="text-2xl font-semibold my-3">Projects</h2>
        <Projects />
        <hr class="my-5" />

        <h2 class="text-2xl font-semibold my-3">Skills</h2>
        <Skills />
        <hr class="my-5" />

        <h2 class="text-2xl font-semibold my-3">Contact</h2>
        <Contact />

        <footer class="h-24" />
      </div>
    </div>
  )
}

const projectData = [
  {
    "name": "Lovely Light Theme",
    "description": "An aethesticly pleasing light editor theme for VSCode",
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
    "name": "cubemaps",
    "image": "/projects/cubemaps.png",
    "alt": "An example cubemap.",
    "description": "A simple and performant cubemap viewer package made for the web.",
    "link": "https://hatchibombotar.com/cubemap/"
  }
]
function Projects() {

  const [githubUserData] = createResource(async () => {
    const data = await fetch("https://api.github.com/users/Hatchibombotar")
    return await data.json()
  })

  return <div class="overflow-x-scroll">
    <div class="w-max">
      <For each={projectData}>{(project) =>
        <div class="bg-white m-1 rounded-xl shadow-md w-56 overflow-hidden inline-block">
          <a href={project.link} class="">
            <img src={project.image} class="w-full -mt-1 mx-auto aspect-[1.36] " alt={project.alt} />
          </a>

          <div class="mx-3 my-2 h-24">
            <h3 class="font-semibold my-0">{project.name}</h3>
            <div class=" text-gray-700">{project.description}</div>
          </div>


          <div class="flex m-3">
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

      <div class="bg-white m-1 pb-2 rounded-xl shadow-md w-56 h-full overflow-hidden inline-block">

        <div class="text-left mb-2 px-2 mx-2 border-opacity-20 aspect-[1.36] flex flex-col">
          <h3 class="font-semibold my-2">Github</h3>
          
          <div class="flex items-center justify-left">
            <img src={githubUserData()?.avatar_url} class="h-10 border rounded-full mr-2 border-opacity-20 border-solid" />
            <p class="font-semibold">{githubUserData()?.login}</p>
          </div>
          <p class="ml-2">{githubUserData()?.public_repos} Public Repos</p>
          <p class="ml-2">{githubUserData()?.followers} Followers</p>
        </div>

        <div class="mx-3 h-24 my-2">
        </div>

        <div class="flex m-3">
          <a href={"https://github.com/hatchibombotar/"} target='_blank' aria-label="Go to the project page.">
            <FiLink size={24} />
          </a>
        </div>
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
  return <div class="grid sm:grid-cols-3">
    <For each={skillsData}>{(skill) =>
      <div class="flex sm:justify-normal justify-center items-center m-2 text-left sm:grayscale sm:brightness-[0.4] hover:filter-none hover:ease-[cubic-bezier(1,1,0,0)] hover:transition duration-[14s]">{() => {
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
  return <div class="prose">
    <ul>
      <li>Discord - @hatchibombotar</li>
      <li>Email - <a href="mailto:hatchibombotar.mc@gmail.com">hatchibombotar.mc@gmail.com</a></li>
    </ul>
  </div>
}

export default App;