<script src="https://cdn.jsdelivr.net/npm/three@0.133.1/build/three.min.js"></script>

// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('scene-container').appendChild(renderer.domElement);

// Create a sphere
const geometry = new THREE.SphereGeometry(1, 32, 32); // Radius, width segments, height segments
const material = new THREE.MeshBasicMaterial({ color: 0xffffff }); // White color
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

// Position the camera
camera.position.z = 5; // Distance from the sphere

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Rotate the sphere (optional)
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();
