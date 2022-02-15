import './App.css';
import Header from './components/header/header';
import Projects from './components/projects/projects';
import About from './components/about/aboutMe';
import Divider from './components/divider/divider';
import CustomNavbar from './components/nav/navbar';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <Header />
      <Divider color="rgb(224, 224, 224)" aos="" />
      <Projects/>
      <Divider color="rgb(56, 63, 68)" aos="fade-up"/>
      <About />
      <Footer />
    </div>
  );
}

export default App;
