const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( 0, 0, 50 );
camera.lookAt( 0, 0, 0 );

const scene = new THREE.Scene();

//create a blue LineBasicMaterial
const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );

const points = [];
points.push( new THREE.Vector3( -5,-5,-5 ) );
points.push( new THREE.Vector3(-5, 5,-5 ) );
points.push( new THREE.Vector3( 5, 5,-5 ) );
points.push( new THREE.Vector3( 5,-5,-5 ) );
points.push( new THREE.Vector3(-5,-5,-5 ) );

points.push( new THREE.Vector3(-5,-5, 5 ) );
points.push( new THREE.Vector3( 5,-5, 5 ) );
points.push( new THREE.Vector3( 5,-5,-5 ) );

points.push( new THREE.Vector3( 5, 5,-5 ) );
points.push( new THREE.Vector3( 5, 5, 5 ) );
points.push( new THREE.Vector3( 5,-5, 5 ) );

points.push( new THREE.Vector3(-5,-5, 5 ) );

points.push( new THREE.Vector3(-5,-5,-5 ) );
points.push( new THREE.Vector3(-5, 5,-5 ) );
points.push( new THREE.Vector3(-5, 5, 5 ) );
points.push( new THREE.Vector3(-5,-5, 5 ) );


points.push( new THREE.Vector3(-5, 5, 5 ) );
points.push( new THREE.Vector3(-5, 5,-5 ) );
points.push( new THREE.Vector3( 5, 5,-5 ) );
points.push( new THREE.Vector3( 5, 5, 5 ) );
points.push( new THREE.Vector3(-5, 5, 5 ) );


const geometry = new THREE.BufferGeometry().setFromPoints( points );

const line = new THREE.Line( geometry, material );

scene.add( line );
renderer.render( scene, camera );

function animate() {
	requestAnimationFrame( animate );
    line.rotation.y += 0.02;
    line.rotation.x = 0.5;
	renderer.render( scene, camera );
}
animate();