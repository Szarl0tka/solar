
// Scene
var scene = new THREE.Scene();
var initialHeight = window.innerHeight - 140;
scene.background = new THREE.TextureLoader( ).load( 'img/scene-background.jpg' );
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / initialHeight, 0.1, 1000 );


var renderer = new THREE.WebGLRenderer( { canvas: document.getElementById('appContent'), antialias: true } );
renderer.setSize( window.innerWidth, initialHeight );
document.body.appendChild( renderer.domElement );

window.addEventListener( 'resize', function( ) 
{
	var width = window.innerWidth;
	var height = window.innerHeight - 140;	
	renderer.setSize( width, height );
	camera.aspect = width / height;
	camera.updateProjectionMatrix();

} );

controls = new THREE.OrbitControls( camera, renderer.domElement )

// Sun
var sunGeo = new THREE.SphereGeometry( 20, 32, 32 );
var sunMat = new THREE.MeshPhongMaterial( { color: 0xF8F02B, ambient: 0xaaaaaa, specular: 0x333333, shininess: 15, map: new THREE.TextureLoader( ).load( 'img/sun-texture.jpg' )} );
var sun = new THREE.Mesh( sunGeo, sunMat );

sun.position.set(0,-15,0);
sun.rotation.set(0.5,0.5,0);
scene.add( sun );

// var axis = new THREE.AxisHelper(100);
// sun.add( axis );

// Earth
var earthGeo = new THREE.SphereGeometry( 8, 32, 32 );;
var earthMat = new THREE.MeshPhongMaterial( { color: 0xaaaaaa, ambient: 0xaaaaaa, specular: 0x333333, shininess: 15, map: new THREE.TextureLoader( ).load( 'img/earth-texture.jpg' ), specularMap: new THREE.TextureLoader( ).load( 'img/earth-specular.png' ), normalMap: new THREE.TextureLoader( ).load( 'img/earth-normal.jpg' ) } );
var earth = new THREE.Mesh( earthGeo, earthMat );
earth.position.set( 75, 0, 0 );
earth.rotation.set( 0, -0.25, 0.3 );
sun.add( earth );


// var axis2 = new THREE.AxisHelper(100);
// earth.add( axis2 );


// Moon
var moonGeo = new THREE.SphereGeometry( 2, 32, 32 );
var moonMat = new THREE.MeshPhongMaterial( { color: 0xaaaaaa, ambient: 0xffffff, specular: 0x333333, shininess: 0, map: new THREE.TextureLoader( ).load( 'img/moon-texture.jpg' ) } );
var moon = new THREE.Mesh( moonGeo, moonMat );
moon.position.x = 25;

earth.add( moon );

// Sunlights
// sunlight.target = earth;
var sunlight = new THREE.SpotLight( 0xffffff );
sunlight.position.set( 100, 1000, 100 );
sun.add(sunlight);

var light = new THREE.DirectionalLight( 0xffffff );
light.position.set( 0, 1, 1 ).normalize();
scene.add(light);

camera.position.set( 0, 0, 80 );


// App Logic
var update = function ( )
{
	
	sun.rotation.y += 0.005;
	earth.rotation.y += 0.015;
	moon.rotation.y += 0.020;
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