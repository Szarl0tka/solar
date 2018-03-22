
// Scene
var scene = new THREE.Scene();
scene.background = new THREE.Color( 0x190A54 );
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

controls = new THREE.OrbitControls( camera, renderer.domElement )

// Sun
var sunGeo = new THREE.SphereGeometry( 20, 32, 32 );
var sunMat = new THREE.MeshPhongMaterial( { color: 0xF8F02B, specular: 0xff0000, shininess: 0 } );
var sun = new THREE.Mesh( sunGeo, sunMat );
// sun.rotation.x = 0.08;
scene.add( sun );

// Earth
var earthGeo = new THREE.SphereGeometry( 3, 32, 32 );
var earthMat = new THREE.MeshPhongMaterial( { color: 0x008B8B, specular: 0xff0000, shininess: 0/*, map: new THREE.TextureLoader( ).load( 'img/earth-texture.jpg' )*/ } );
var earth = new THREE.Mesh( earthGeo, earthMat );
earth.position.z = -50;
sun.add( earth );

// Moon
var moonGeo = new THREE.SphereGeometry( 1, 32, 32 );
var moonMat = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0xff0000, shininess: 0 } );
var moon = new THREE.Mesh( moonGeo, moonMat );
moon.position.z = -8;
earth.add( moon );

// Sunlights
// sunlight.target = earth;
var sunlight = new THREE.SpotLight( 0xffffff );
sunlight.position.set( 100, 1000, 100 );
sun.add(sunlight);

var light = new THREE.DirectionalLight( 0xffffff );
light.position.set( 0, 1, 1 ).normalize();
scene.add(light);

camera.position.z = 70;

// App Logic
var update = function ( )
{
	 earth.rotation.y += 0.01;
	 sun.rotation.y += 0.002;
	// sun.rotation.y += 0.001;

};

// draw Scene
var render = function ( )
{
	renderer.render( scene, camera );
};

// run app loop (update, render, repeat)
var AppLoop = function ( )
{
	requestAnimationFrame( AppLoop );

	update( );
	render( );
};

AppLoop( );