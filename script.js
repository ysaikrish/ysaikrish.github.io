var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)
camera.position.z = 5;


var renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
//renderer = new THREE.CanvasRenderer({ alpha: true });

//renderer.setClearColor("#6d2a38");

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

var mouseX = 0;
var mouseY = 0;
document.addEventListener( 'mousemove', onDocumentMouseMove, false );

function onDocumentMouseMove( event ) {

    mouseX = ( event.clientX - window.innerWidth/2 ) / 100;
    mouseY = ( event.clientY - window.innerHeight/2) / 100;

}

var geometry = new THREE.SphereGeometry(0.016, 20, 20);
var material = new THREE.MeshLambertMaterial({color: 0xc7d2d4});
var mesh = new THREE.Mesh(geometry, material);
var x = 0;
var reverse = false;

mesh.position.set(1, 1, 1)

for(var i = 0; i < 1500; i++)
{
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = (Math.random() - 0.6) * 20;
    mesh.position.y = (Math.random() - 0.6) * 20;
    mesh.position.z = (Math.random() - 0.6) * 15;
    scene.add(mesh);
}
scene.add(mesh);

var light = new THREE.PointLight(0xFFFFFF, 1, 500);
light.position.set(10, 10, 30); 
scene.add(light);

var render = function(){
    requestAnimationFrame(render);
    var timer = 0.00002 * Date.now();

    camera.position.x += ( mouseX - camera.position.x ) * .05;
    camera.position.y += ( - mouseY - camera.position.y ) * .05;
    camera.position.z += (mouseX - camera.position.x) * 0.02; //considered for change.
	camera.lookAt( scene.position );
   var cubes = scene.children;
    for(var i = 0; i < cubes.length; i++)
    {
        //cubes[i].rotation.x += 0.01;
        //cubes[i].rotation.y += 0.01;
        //cubes[i].position.z += 0.01;

        cubes[i].position.x = 9 * Math.cos( timer + i);
		cubes[i].position.y = 9* Math.sin( timer + i * 1.1);

    }
    renderer.render(scene, camera);
}
render();

this.tl = new TimelineMax().duration(3);

//this.tl.to(this.camera.position, 3, {x: camera.position.x -1, ease: Expo.easeOut})
//this.tl.to(this.camera.position, 3, {x: camera.position.x, ease: Expo.easeOut})




