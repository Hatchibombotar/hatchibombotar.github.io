import logo from './assets/logo.png';
import styles from './App.module.css';
import projects from "./projects.json"
import skills from "./skills.json"

function App() {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <div class={styles.title}>
          <h1>Hatchibombotar</h1> <img src={logo} alt="My Logo" class={styles.logo}></img>
        </div>
        <p>Developer</p>
      </header>
      <Projects/>
      <Skills/>
      <div>
        <h2>Contact</h2>
        <p>Discord - hatchibombotar#3794</p>
        <p>Email - <a href="mailto:hatchibombotar.mc@gmail.com">hatchibombotar.mc@gmail.com</a></p>
      </div>
    </div>
  );
}

function Projects() {
  return <>
  <h2>Projects</h2>
  <p>
    <For each={projects}>{(project) =>
      <p>
        
        <a href={project.href}>
          {project.name}
        </a>
        <a> - </a> 
        {project.description} 
      </p>
    }</For>
  </p>
  </>
}

function Skills() {
  return <>
  <h2>Skills</h2>
  <p>
    <For each={skills}>{(skill) =>
      <p>
        {skill.name}
        <a> - </a> 
        {skill.level} 
      </p>
    }</For>
  </p>
  </>
}

export default App;
