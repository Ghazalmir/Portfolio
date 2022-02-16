import React from "react";
import styles from './about.module.css';
import './about.css'
import { langsList, toolsList, findMeList } from "../../imgs/logos";
function About(props) {
  return (
    <div id="About" data-aos="fade-up">
      <div className={styles.about}>

      <div className={styles.header}>About Me</div>
      <div className={styles.main}>
        <p>I'm currently an undergrad student, studying Computer Science to expand on my ever-growing passion for creating new things, designing systems, and coming up with creative solutions.  <br /> <br /> So far, I have mastered OOP, web development, shell scripting, and game development as well as becoming fluent in Java, Python, C, C#, JavaScript, HTML/CSS, and a variety of other tools and languages. I’m also working towards expanding my knowledge in other fields of Computer Science.
          <br /><br />Other than that, in my free time, I like to read on various topics, draw/paint, and make sculptures. Feel free to shoot me a message on LinkedIn if you want to collaborate on a project or just chat.
        
        <div className={styles.findMeIcons}>
          {findMeList.map(imgs =>
            <div className={styles.skill}>
              <a href={imgs.link}><img src={imgs.src} alt={imgs.alt} id={imgs.id} /></a> <span>{imgs.alt}</span>
            </div>
          )
          }
        </div>
        </p>
      </div>
      <br />
      <br />
      <div className={styles.skillsWrapper} data-aos="fade-up">
        <div className={styles.skillsHeader} id="skills"> Skills</div>
        <div className={styles.langsHeader}>Languages</div>
        <div className={styles.images}>
          {langsList.map(imgs =>
            <div className={styles.skill}>
              <img src={imgs.src} alt={imgs.alt} id={imgs.id} />
              <span>{imgs.alt}</span>
            </div>
          )
          }
        </div>

        <div className={styles.toolsHeader}>Development Tools</div>
        <div className={styles.images}>
          {toolsList.map(imgs =>
            <div className={styles.skill}>
              <img src={imgs.src} alt={imgs.alt} id={imgs.id} />
              <span>{imgs.alt}</span>
            </div>
          )
          }
        </div>

      </div>
      </div>
    </div>
  );
}
export default About;