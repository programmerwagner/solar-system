const mouse = new THREE.Vector2();
const raycaster = new THREE.Raycaster();

function onMouseClick(event) {
    // Convert the mouse position to normalized device coordinates (-1 to +1) for both components
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Update the raycaster with the camera and mouse position
    raycaster.setFromCamera(mouse, camera);

    // Calculate objects intersecting the picking ray
    const intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0) {
        // Assuming the first intersected object is the most relevant one
        if (intersects[0].object.userData.URL) {
            window.location.href = intersects[0].object.userData.URL; // Redirect to the stored URL
        }
    }
}

renderer.domElement.addEventListener('click', onMouseClick);
