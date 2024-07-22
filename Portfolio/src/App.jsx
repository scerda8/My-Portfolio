import styles from './App.module.css';

import {Hero} from "./components/Hero/Hero";
import { Navbar } from './components/navbar/Navbar';
import { About } from './components/About/About';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';
import {ContactBtn} from './components/ContactBtn/ContactBtn';
import {Resume} from './components/Resume/Resume';

function App() {
  return(
     <div className={styles.App}>
    <Navbar/>
    <Hero />
    <About/>
    <Projects/>
    <Contact/>
    <ContactBtn/>
    <Resume/>
   </div>
  );
}

export default App;

