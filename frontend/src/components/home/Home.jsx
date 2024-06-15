import React, { useEffect } from "react";
import "./Home.css";
import * as THREE from "three";
// import { redirect } from 'react-router-dom';

import moonImage from "../../Images/moon.jpg";
import venusImage from "../../Images/venus.jpg";
import spaceImage from "../../Images/space.jpg";
import { Typography } from "@mui/material";
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
    pointLight.position.set(8, 5, 5);
    pointLight2.position.set(-8, -5, -5);
    scene.add(moon);
    scene.add(venus);
    scene.add(pointLight);
    scene.add(pointLight2);
    scene.background = spaceTexture;

    /*//pointLightHelper
     const lightHelper = new THREE.PointLightHelper(pointLight);
     scene.add(lightHelper);
    */

    const constSpeed = 0.01;
    window.addEventListener("mousemove", (e) => {
      if (e.clientX <= window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }
      if (e.clientX > window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }
      if (e.clientY > window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }
      if (e.clientY <= window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }
    });

    const animate = () => {
      requestAnimationFrame(animate);
      // moon.rotation.x +=0.01;
      // moon.rotation.y +=0.01;
      moon.rotation.y += 0.01;
      venus.rotation.y += 0.001;

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
        <TimeLine timelines={[1, 2, 3, 4]} />
      </div>
      <div className="homeSkills">
      <Typography variant="h3">Skills</Typography>
      <div className="homeCubeSkills">
        <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
        <img src="https://images.unsplash.com/photo-1718139207078-0f55b2a8a34d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D" alt="Face1" />
        
        </div>
        <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
        <img src="https://images.unsplash.com/photo-1718139207078-0f55b2a8a34d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D" alt="Face2" />
        
        </div>
        <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
        <img src="https://plus.unsplash.com/premium_photo-1718169684197-adf733b5c7ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wxfHx8ZW58MHx8fHx8" alt="Face3" />
        
        </div>
        <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
        <img src="https://images.unsplash.com/photo-1632395627732-005012dbc286?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D" alt="Face4" />
        
        </div>
        <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
        <img src="https://images.unsplash.com/photo-1657586640569-4a3d4577328c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8" alt="Face5" />
        
        </div>
        <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
        <img src="https://images.unsplash.com/photo-1718139207078-0f55b2a8a34d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D" alt="Face6" />
        
        </div>


      </div>
      <div className="cubeshadow"></div>
      </div>
    </div>
  );
};

export default Home;
