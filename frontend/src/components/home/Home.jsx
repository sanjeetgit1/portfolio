import React, { useEffect } from 'react'
import "./Home.css";
import * as THREE from "three";
// import { redirect } from 'react-router-dom';






const Home=()=> {

    useEffect(()=>{
        const scene = new THREE.Scene();
        const camera=new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight,0.1,1000);

        const canvas= document.querySelector('.homeCanvas');
        const renderer= new THREE.WebGLRenderer({canvas});

        const geometry = new THREE.BoxGeometry(1,1,1);
        const material = new THREE.MeshBasicMaterial({color: 0x00ff00});

        const mesh = new THREE.Mesh(geometry,material);

       scene.add(mesh);

        mesh.rotation.y =1;
        camera.position.z=5;
 






        renderer.setSize(window.innerWidth , window.innerHeight);
        renderer.render(scene,camera)


    },[])

    return (
        <div className='home'>
            <canvas className='homeCanvas'></canvas>
        </div>
      
    )
}

export default Home

// import React, { useEffect } from 'react';
// import "./Home.css";
// import * as THREE from 'three';

// const Home = () => {
//   useEffect(() => {
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     camera.position.z = 5;

//     const canvas = document.querySelector('.homeCanvas');
//     const renderer = new THREE.WebGLRenderer({ canvas });
//     renderer.setSize(window.innerWidth, window.innerHeight);

//     const geometry = new THREE.BoxGeometry(1, 1, 1);
//     const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//     const mesh = new THREE.Mesh(geometry, material);

//     scene.add(mesh);
//     mesh.rotation.y = 1;

//     const animate = () => {
//       requestAnimationFrame(animate);
//       mesh.rotation.x += 0.01;
//       mesh.rotation.y += 0.01;
//       renderer.render(scene, camera);
//     };

//     animate();

//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//       renderer.dispose();
//     };
//   }, []);

//   return (
//     <div className='home'>
//       <canvas className='homeCanvas'></canvas>
//     </div>
//   );
// };

// export default Home;
