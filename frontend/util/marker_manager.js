class MarkerManager{

  constructor (map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers (benches) {
    Object.values(benches).forEach((bench) => {
      if (!this.markers[bench.id]) {
        this.markers[bench.id] = this.createMarkerFromBench(bench);
      }
    });


    Object.keys(this.markers).forEach((key) => {
      if (!benches[key]) {
        this.removeMarker(key);
      }
    });
  }

  createMarkerFromBench(bench) {
    const latLng = {lat: bench.lat, lng: bench.lng};

    return (
      new google.maps.Marker({
        position: latLng,
        map: this.map,
        title: bench.description
      })
    );
  }

  removeMarker(marker) {
    return null;
  }
}

export default MarkerManager;
