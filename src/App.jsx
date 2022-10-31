import logo from './assets/logo.png';
import styles from './App.module.css';
import projects from "./projects.json"
import skills from "./skills.json"

import Markdown from "solid-markdown";
import homeContent from "./assets/homepage.md?raw"


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

        <main class={styles.markdownContainer}>
          <Markdown>{homeContent}</Markdown>
        </main>
      </div>
    </div>
  );
}

export default App;
