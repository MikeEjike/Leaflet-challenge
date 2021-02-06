let url =
  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// let lightmap = L.tileLayer(
//   "https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
//   {
//     attribution:
//       'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: "light-v10",
//     accessToken: API_KEY,
//   }
// );

// center: [34.0522, -118.2437],
// zoom: 8
let myMap = L.map("map").setView([37.0902, -95.7129], 4);

L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY,
  }
).addTo(myMap);

d3.json(url).then(createEarthQuake);

function createEarthQuake(data) {
  console.log(data.features);
  //   console.log(data.features[0].geometry.coordinates);
  let locationData = data.features;
  let latLng = [];
  let lng = [];
  let lat = [];
  locationData.forEach((item) => {
    let coordinate = item.geometry.coordinates;
    let coordinates = [coordinate[1], coordinate[0]];
    lng.push(coordinate[0]);
    lat.push(coordinate[1]);
    latLng.push(coordinates);
  });
  console.log(latLng);

  function colorGrade{
  if (rating <= 1) {
    return "red";
    }
    else if (rating === 3) and (rating === 3); {
        return "orange";
    } 
    // else if (rating === 5){
    //     return = "orange"
    // }
    // else{};
    // }
//   var blueMarker = L.AwesomeMarkers.icon({
//     markerColor: customColor,
//   });

  //   var bikeMarkers = [];

  //   // Loop through the stations array
  //   for (var index = 0; index < stations.length; index++) {
  //     var station = stations[index];

  //     // For each station, create a marker and bind a popup with the station's name
  //     var bikeMarker = L.marker([station.lat, station.lon])
  //       .bindPopup("<h3>" + station.name + "<h3><h3>Capacity: " + station.capacity + "</h3>");

  //     // Add the marker to the bikeMarkers array
  //     bikeMarkers.push(bikeMarker);
  //   }
  // //   let myMap = createMap();

  // //   points = data.map((d) => [
  // //     d.location.coordinates[1],
  // //     d.location.coordinates[0],
  // //   ]);

  // //   console.log(points)

  // //   var heat = L.heatLayer(points, { radius: 20, blur: 35 })
  // //   heat.addTo(myMap);
}
