import React from "react";
import styles from './footer.module.css';


function Footer(){
  return(
    <div className={styles.footer}>
      <div className={styles.footerLinks}>
      <a className="Link"  href="#">Top&uarr;</a>
        <a className="Link" href="#About">About</a>
        <a className="Link" href="#skills">Skills</a>
        <a className="Link" href="#Projects">Projects</a>

        <a className="Link" href="https://linkedin.com/in/ghazalmir">LinkedIn</a>
        <a className="Link" href="https://github.com/Ghazalmir">GitHub</a>
        <a className="Link" href="mailto:contact@ghazalmir.com">Email</a>

    </div>
    <h5>&copy; {(new Date().getFullYear())} Ghazal Mir</h5>

    </div>
  );
}

export default Footer;