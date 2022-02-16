import './App.css';
// scroll animation
import Aos from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react';
//----------------
// Components
import Header from './components/header/header';
import Projects from './components/projects/projects';
import About from './components/about/aboutMe';
import Divider from './components/divider/divider';
import CustomNavbar from './components/nav/navbar';
import Footer from './components/footer/footer';
//----------------
function App() {
  //scroll animation
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, [])

  return (
    <div className="App">
      <CustomNavbar />
      <Header />
      <Divider color="rgb(56, 63, 68)" aos="fade-up"/>
      <About />
      <Divider color="rgb(224, 224, 224)" aos="fade-up" />
      <Projects/>
      <Footer />
    </div>
  );
}

export default App;
