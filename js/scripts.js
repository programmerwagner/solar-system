<script src="https://cdn.jsdelivr.net/npm/three@0.133.1/build/three.min.js"></script>

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 5;
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('solar-system-container').appendChild(renderer.domElement);
var geometry = new THREE.SphereGeometry(1, 32, 32);
var material = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // Replace with texture
var planet = new THREE.Mesh(geometry, material);
scene.add(planet);
var loader = new THREE.TextureLoader();
material.map = loader.load('textures/earth.jpg'); // Example for Earth
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

function onMouseClick(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    var intersects = raycaster.intersectObjects(scene.children);

    if (intersects.length > 0) {
        window.location.href = intersects[0].object.userData.URL; // Redirect
    }
}
window.addEventListener('click', onMouseClick);
planet.userData = { URL: 'https://www.nytimes.com/games/wordle/index.html' };


// Code to create planets and handle clicks...

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
