import styles from './header.module.css';
import Pic from '../../imgs/pic2.png'
import { findMeListBlack } from "../../imgs/logos";
 
function Header() {
  return (
    <div className={styles.main}>
      <div className={styles.hello}>
        <p>
        <span className={styles.Ghazal}> Hi, I'm Ghazal.</span><br className={styles.break}/>
        <span className={styles.student}>A Computer Science student from Canada.</span>
        <div className={styles.findMeIcons}>
          {findMeListBlack.map(imgs =>
            <div className={styles.skill}>
              <a href={imgs.link}><img src={imgs.src} alt={imgs.alt} id={imgs.id} /></a> <span>{imgs.alt}</span>
            </div>
          )
          }
        </div>
        </p>
        
        <img src={Pic} className={styles.mainImg}></img>
      </div>
      
      <div className={styles.scrollDown}>
        <span></span>
     </div>
    </div>
  );
}

export default Header;