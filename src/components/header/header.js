import styles from './header.module.css';
import Pic from '../../imgs/pic2.png'
import { langsList, toolsList, findMeList } from "../../imgs/logos";
 
function Header() {
  return (
    <div>
      <div className={styles.hello}>
        <p>
        <span className={styles.Ghazal}> Hi, I'm Ghazal.</span><br className={styles.break}/>
        <span className={styles.student}>A Computer Science student from Canada.</span>
        <div className={styles.findMeIcons}>
          {findMeList.map(imgs =>
            <div className={styles.skill}>
              <a href={imgs.link}><img src={imgs.src} alt={imgs.alt} id={imgs.id} /></a> <span>{imgs.alt}</span>
            </div>
          )
          }
        </div>
        </p>
        
        <img src={Pic}></img>
      </div>
      
    </div>
  );
}

export default Header;