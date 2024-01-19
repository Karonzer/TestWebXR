
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
    testcamera.position.set(0,0,10);

    const renderer = new THREE.WebGLRenderer({alpha : true});
    renderer.setSize(1000,1000);
    renderer.render(scene,testcamera);

    const video = document.createElement("video");
    navigator.mediaDevices.getUserMedia({videe : true}).then
    (
        (stream) =>
        {
            video.srcObject = stream;
            video.play();
        }
    );

    video.style.position = "absolute";
    video.style.width = renderer.domElement.width;
    video.style.height = renderer.domElement.height;
    renderer.domElement.style.position = "absolute";

    document.body.appendChild(video);
    document.body.appendChild(renderer.domElement);

    const ar = new SOME_AR_ENGINE();
    while(true)
    {
        
        const {position, rotation} = ar.computeObjectPose(video);
        cube.position = position;
        cube.rotation = rotation;
    }
});
