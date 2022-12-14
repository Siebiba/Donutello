//import threejs

import * as THREE from 'three';
import {
    OBJLoader
} from 'three/examples/jsm/loaders/OBJLoader.js';
import {
    OrbitControls
} from 'three/examples/jsm/controls/OrbitControls.js';



//Scene
const scene = new THREE.Scene();
//Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5; // <- New code
//Renderer
const renderer = new THREE.WebGLRenderer({
    antialias: true
});
renderer.setClearColor("#FFFAFA");
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


// Make Canvas Responsive
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
})


//Lights
const light = new THREE.PointLight(0xFFFFFF, 1, 200);
light.position.set(5, 5, 5);
scene.add(light);

//ambient light
const ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.1);
scene.add(ambientLight);


//orbit Controls for Camera 
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.screenSpacePanning = false;
controls.minDistance = 1;
controls.maxDistance = 5;


camera.position.set(0, 20, 100);
controls.update();


//when clicking button reload obj file
//get the color from button


//get data-color from clicked div by class

const buttons = document.querySelectorAll('.color-circle');
buttons.forEach(button => {
    button.addEventListener('click', function () {
        console.log("button clicked");
        let color = button.getAttribute("data-color");
        console.log(color);



        console.log(button);

        //omport donu tmodel from obj file
        const loader = new OBJLoader();
        loader.load(
            // resource URL
            '/assets/models/Dough.obj',
            // called when resource is loaded
            function (object) {

                //add the color from the button when clicking button green
                object.traverse(function (child) {
                    if (child.isMesh) {
                        //add the color from the button when clicking button green
                        child.material.color.set(color);
                    }
                });


//object rotation set
object.rotation.set(0.6, 5, 0.3);

                object.scale.set(15, 15, 15);
                scene.add(object);
            },
            // called when loading is in progresses
            function (xhr) {
                console.log((xhr.loaded / xhr.total * 100) + '% loaded');

                document.getElementById("loading__time").innerHTML = (xhr.loaded / xhr.total * 100) + '% loaded';
            },
            // called when loading has errors
            function (error) {
                console.log('An error happened');
            }
        )

    });

});


///////////////////////////////////////////////////////////////////////////////////////////////

const buttonsglaze = document.querySelectorAll('.color-circle-glaze');
buttonsglaze.forEach(buttonglaze => {
    buttonglaze.addEventListener('click', function () {
        console.log("button clicked");
        let color = buttonglaze.getAttribute("data-color");
        console.log(color);


        //omport donu tmodel from obj file
        const loader = new OBJLoader();
        loader.load(
            // resource URL
            '/assets/models/Glaze.obj',
            // called when resource is loaded
            function (object) {

                //add the color from the button when clicking button green
                object.traverse(function (child) {
                    if (child.isMesh) {
                        //add the color from the button when clicking button green
                        child.material.color.set(color);
                    }
                });


//object rotation set
object.rotation.set(0.6, 5, 0.3);

                object.scale.set(15, 15, 15);
                scene.add(object);
            },
            // called when loading is in progresses
            function (xhr) {
                console.log((xhr.loaded / xhr.total * 100) + '% loaded');

                document.getElementById("loading__time").innerHTML = (xhr.loaded / xhr.total * 100) + '% loaded';
            },
            // called when loading has errors
            function (error) {
                console.log('An error happened');
            }
        )

    });

});

//when clicking button reload obj file

///////////////////////////////////////////////////////////////////////////////////////////////


const buttonssprinkles = document.querySelectorAll('.color-circle-sprinkles');
buttonssprinkles.forEach(buttonsprinkle => {
    buttonsprinkle.addEventListener('click', function () {
        console.log("button clicked");
        let color = buttonsprinkle.getAttribute("data-color");
        console.log(color);


        //omport donu tmodel from obj file
        const loader = new OBJLoader();
        loader.load(
            // resource URL
            '/assets/models/Sprinkles.obj',
            // called when resource is loaded
            function (object) {

                //add the color from the button when clicking button green
                object.traverse(function (child) {
                    if (child.isMesh) {
                        //add the color from the button when clicking button green
                        child.material.color.set(color);
                    }
                });


//object rotation set
object.rotation.set(0.6, 5, 0.3);

                object.scale.set(15, 15, 15);
                scene.add(object);
            },
            // called when loading is in progresses
            function (xhr) {
                console.log((xhr.loaded / xhr.total * 100) + '% loaded');

                document.getElementById("loading__time").innerHTML = (xhr.loaded / xhr.total * 100) + '% loaded';
            },
            // called when loading has errors
            function (error) {
                console.log('An error happened');
            }
        )

    });

});

///////////////////////////////////////////////////////////////////////////////////////////////
//buttincard from id



// Rendering Function
const rendering = function () {
    requestAnimationFrame(rendering);

    // Update trackball controls
    controls.update();
    //rotate object


    // Render Scene



    
    
 
    renderer.render(scene, camera);
}
rendering();