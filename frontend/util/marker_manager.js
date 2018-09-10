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
}

export default MarkerManager;
