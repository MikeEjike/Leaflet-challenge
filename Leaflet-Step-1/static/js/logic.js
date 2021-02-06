let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

d3.json(url).then(createEarthQuake);

// d3.json(url, function(data){
//     console.log(data)

// })

function createEarthQuake(data) {
  console.log(data);
  
// //   let myMap = createMap();
  
// //   points = data.map((d) => [
// //     d.location.coordinates[1],
// //     d.location.coordinates[0],
// //   ]);
  
// //   console.log(points)
  
// //   var heat = L.heatLayer(points, { radius: 20, blur: 35 })
// //   heat.addTo(myMap);

}