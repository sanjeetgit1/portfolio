import React, { useEffect } from "react";
import "./Home.css";
import * as THREE from "three";
// import { redirect } from 'react-router-dom';

import moonImage from "../../Images/moon.jpg";
import venusImage from "../../Images/venus.jpg";
import spaceImage from "../../Images/space.jpg";
import {Typography} from "@mui/material" 
import TimeLine from "../TimeLine/TimeLine";


const Home = () => {
  useEffect(() => {
    const textureloader = new THREE.TextureLoader();
    const moonTexture = textureloader.load(moonImage);
    const venusTexture = textureloader.load(venusImage);
    const spaceTexture = textureloader.load(spaceImage);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(3.5, 3.5, 8);
    const canvas = document.querySelector(".homeCanvas");
    const renderer = new THREE.WebGLRenderer({ canvas });

    // ShereGeometry
    const moonGemetry = new THREE.SphereGeometry(2, 64, 64);
    const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
    const moon = new THREE.Mesh(moonGemetry, moonMaterial);
  


    const venusGemetry = new THREE.SphereGeometry(3, 64, 64);
    const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
    const venus = new THREE.Mesh(venusGemetry, venusMaterial);
  venus.position.set(8, 5, 5);
    // pointLight
    const pointLight = new THREE.PointLight(0xffffff, 30);
    const pointLight2 = new THREE.PointLight(0xffffff, 1);
   
    scene.add(moon);
    scene.add(venus); 
    pointLight.position.set(8,5,5);
    pointLight2.position.set(-8,-5,-5);
    scene.add(pointLight);
    scene.add(pointLight2);
    scene.background=spaceTexture;

    /*//pointLightHelper
     const lightHelper = new THREE.PointLightHelper(pointLight);
     scene.add(lightHelper);
    */


     const constSpeed =0.01;
     window.addEventListener("mousemove",(e)=>{
        if(e.clientX < window.innerWidth/2){
            moon.rotation.x -=constSpeed;
            moon.rotation.y += constSpeed;
            venus.rotation.x -=constSpeed;
            venus.rotation.y += constSpeed;

        }
        if(e.clientX > window.innerWidth/2){
            moon.rotation.x -=constSpeed;
            moon.rotation.y -= constSpeed;
            venus.rotation.x -=constSpeed;
            venus.rotation.y -= constSpeed;

        }
        if(e.clientY > window.innerHeight/2){
            moon.rotation.x -=constSpeed;
            moon.rotation.y += constSpeed;
            venus.rotation.x -=constSpeed;
            venus.rotation.y += constSpeed;

        }
         if(e.clientY <= window.innerHeight/2){
            moon.rotation.x -=constSpeed;
            moon.rotation.y -= constSpeed;
            venus.rotation.x -=constSpeed;
            venus.rotation.y -= constSpeed;

        }
        
     });



 

  


    const animate = () => {
      requestAnimationFrame(animate);
      // moon.rotation.x +=0.01;
      // moon.rotation.y +=0.01;
      moon.rotation.z += 0.01;
      venus.rotation.z += 0.001;

      // camera.position.x+=0.01
      // moon.position.x +=0.01;
      // moon.position.y +=0.01;
      // moon.position.z +=0.01;
      // moon.position.x -=0.02;
      // moon.position.y -=0.02;
      // moon.position.z -=0.02;
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    };
    animate();
  }, []);

  return (
    <div className="home">
      <canvas className="homeCanvas"></canvas>
       <div className="homeContainer">
        <Typography variant="h3">TIMELINE</Typography>
        <TimeLine timelines={[1,2,3,4]}/>

      </div> 
    </div>
  );
};

export default Home;

