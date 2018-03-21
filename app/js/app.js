var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

controls = new THREE.OrbitControls( camera, renderer.domElement )

var sunGeo = new THREE.SphereGeometry( 5, 32, 32 );
var sunMat = new THREE.MeshPhongMaterial( { color: 0xf3ffe2, specular: 0xff0000, shininess: 0 } );
var sun = new THREE.Mesh( sunGeo, sunMat );

scene.add( sun );

var earthGeo = new THREE.SphereGeometry( 6000, 32, 32 );
var earthMat = new THREE.MeshPhongMaterial( { color: 0xf3ffe2, specular: 0xff0000, shininess: 0, map: new THREE.TextureLoader( ).load( 'img/earth-texture.jpg' ) } );
var earth = new THREE.Mesh( earthGeo, earthMat );
earth.position.z = 10;
scene.add( earth );


var light = new THREE.DirectionalLight( 0xffffff );
light.position.set( 0, 1, 1 ).normalize();
scene.add(light);

camera.position.z = 30;

// App Logic
var update = function ( )
{
	sun.rotation.x += 0.01;
	sun.rotation.y += 0.001;

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