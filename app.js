// variables for setup 

let container; 
let camera; 
let renderer; 
let scene; 
let car; 

function run(){
    container = document.querySelector('.scene');

    //Create Scene 
    scene = new THREE.Scene(); 

    const fov = 35; 
    const aspect = container.clientWidth / container.clientHeight;
    const near =0.1; 
    const far = 500;

    //camera Setup 
    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(-40,5,100);
     
    // const ambient = new THREE.AmbientLight(0x404040, );
    // scene.add(ambient);


    // Renderer

    renderer = new THREE.WebGLRenderer({antialias:true, alpha:true});
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    container.appendChild(renderer.domElement);


    //load Model 
    let loader = new THREE.GLTFLoader();
    loader.load('./Car/scene.gltf', function (gltf){
        scene.add(gltf.scene);
        car = gltf.scene.children[0];
        animate();
    });
}

run();

function animate (){ 
    requestAnimationFrame(animate);
    car.rotation.z += 0.008; 
    renderer.render(scene, camera);
}


