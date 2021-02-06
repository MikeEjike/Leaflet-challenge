let url =
  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

d3.json(url).then(createEarthQuake);

function createEarthQuake(data) {
  console.log(data.features);
  //   console.log(data.features[0].geometry.coordinates);
  let locationData = data.features;
  let lng = [];
  let lat = [];
  locationData.forEach((item) => {
    let coordinates = item.geometry.coordinates;
    lng.push(coordinates[0]);
    lat.push(coordinates[1]);
    //   console.log(coordinates[1])
  });

  // //   let myMap = createMap();

  // //   points = data.map((d) => [
  // //     d.location.coordinates[1],
  // //     d.location.coordinates[0],
  // //   ]);

  // //   console.log(points)

  // //   var heat = L.heatLayer(points, { radius: 20, blur: 35 })
  // //   heat.addTo(myMap);
}
