import React from "react";
import styles from './projCard.module.css';

import Aos from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react';

function ProjCard(props) {
  // scroll animation
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, [])

  return (
  <div className = {styles.card} data-aos="fade-up">
    <div className ={styles.where}>{props.where}</div>
    <div className = {styles.name}>{props.name} </div> 
    <div className = {styles.date}>{props.date}</div>
    <div className = {styles.description}>{props.desc}</div>
    <div className = {styles.tags}> {props.tags} </div>
    {/* 
    <button className = {styles.view}><a href={props.link}>{props.view}</a></button>
    */}
    <div className = {styles.btns}> {props.buttons} </div>

    </div>

  );
}
export default ProjCard;