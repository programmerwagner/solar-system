var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('solar-system-container').appendChild(renderer.domElement);

// Code to create planets and handle clicks...

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
