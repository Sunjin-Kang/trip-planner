//document.getElementById("map").innerText = "Hello from JS";



const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = 'pk.eyJ1Ijoic3Vuamlua2FuZyIsImEiOiJjajY4Mzl3d24wY25hMnFvbGxkNHA0YXcxIn0.j-z7B8rZKHZs831HOpRO_Q';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack coordinates
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/dark-v9" // mapbox has lots of different map styles available


});


new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);


const buildMarker = require("./marker");
