
import * as THREE from '../node_modules/three/build/three.module.js';

console.log("THREE",THREE);


document.addEventListener("DOMContentLoaded", () => 
{
    const scene = new THREE.Scene();
    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    let testcamera = new THREE.PerspectiveCamera();
    testcamera.position.set(1,1,1);

    const renderer = new THREE.WebGL1Renderer();
    renderer.setSize(500,500);
    renderer.render(scene,testcamera);

    document.body.appendChild(renderer.domElement);
});
