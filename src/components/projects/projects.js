
import ProjCard from './projCard';
import { ProjectsList } from './projectsData';
import styles from './projCard.module.css';

function Projects() {
  
  return (
    <div id="Projects">
      <div className={styles.header} data-aos="fade-up"> Projects
      <p>Here you can find most of the projects I have been a part of over the past few years. </p>
      </div>
    <div className={styles.projects}>

         {ProjectsList.map (proj => (<ProjCard 
      where={proj.where} 
      name={proj.name}
      date={proj.date}
      desc={proj.desc}
      tags={(proj.tags).map (x => <span>{x}</span>)}
      buttons={(proj.buttons).map (x => <button><a href= {x.link} >{x.view}</a></button> )}
//      view={proj.view}
//      link={proj.link}

        />) )}

    </div>
    </div>

  );
}

export default Projects;
