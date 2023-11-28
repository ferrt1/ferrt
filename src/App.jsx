import { About } from "./components/about/About.jsx";
import { Contact } from "./components/contact/Contact.jsx";
import { Header } from "./components/header/Header.jsx";
import { ProjectsContainer } from "./components/projects/ProjectsContainer.jsx";
import { Skills } from "./components/skills/Skills.jsx";
import { Title } from "./components/title/Title.jsx";

function App() {
  return (
    <>
    <header className="sticky top-[-1px] bg-shell-color dark:bg-dark-grape-color z-50">
        <Header />
    </header>
      <main>
        <Title />
        <About/>
        <ProjectsContainer />
        <Skills/>
        <Contact/>
      </main>
    </>
  );
}

export default App;
