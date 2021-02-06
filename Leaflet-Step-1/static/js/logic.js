let url =
  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

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
  let locationData = data.features;

  locationData.forEach((item) => {
    let coordinate = item.geometry.coordinates;
    let intensity = item.properties.mag;
    let coordinates = [coordinate[1], coordinate[0]];
    let circle = L.circle(coordinates, intensity * 35000, {
      color: colorGrade(intensity),
    });

    circle
      .bindPopup(
        "<h3>" +
          item.properties.place + 
          "</h3><hr></p><p> Magnitude: " +
          item.properties.mag +
          "</p><p> Coordinates (lat, lng): " +
          coordinates +
          "</p>"
      )
      .openPopup();

    circle.addTo(myMap);
  });


  let legend = L.control({ position: "bottomright" });
  legend.onAdd = function (map) {
    let div = L.DomUtil.create("div", "info legend"),
      grades = [0, 1, 2, 3, 4, 5],
      labels = ['Magnitude'];

    for (let i = 0; i < grades.length; i++) {
      div.innerHTML +=
        '<i style="background:' +
        colorGrade(grades[i] + 0) +
        '"></i> ' +
        grades[i] +
        (grades[i + 1] ? "&ndash;" + grades[i + 1] + "<br>" : "+");
    }

    return div;
  };
  legend.addTo(myMap);

  function colorGrade(magnitude) {
    if (magnitude < 1) {
      return "#74c476";
    } else if (magnitude < 2) {
      return "#ffffb2";
    } else if (magnitude < 3) {
      return "#fecc5c";
    } else if (magnitude < 4) {
      return "#fd8d3c";
    } else if (magnitude < 5) {
      return "#f03b20";
    } else if (magnitude < 10) {
      return "#bd0026";
    }
  }

}