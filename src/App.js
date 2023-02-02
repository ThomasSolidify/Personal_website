import './App.css';
import { NavBar } from './components/navbar';
import { Banner } from './components/banner';
import { Skills } from './components/skills';
import { Projects } from './components/projects';
import { Footer } from './components/footer';
import { ContactUs } from './components/contact.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
	  <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
