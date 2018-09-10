import React from 'react';
import MarkerManager from '../util/marker_manager';



class BenchMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };
    let bounds;

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.map.addListener('idle', () => {
      const LatLngBounds = this.map.getBounds();
      const ne = LatLngBounds.getNorthEast();
      const sw = LatLngBounds.getSouthWest();
      const neLat = ne.lat();
      const neLng = ne.lng();
      const swLat = sw.lat();
      const swLng = sw.lng();
      bounds = {
        northEast: {
          lat: neLat,
          lng: neLng
        },
        southWest: {
          lat: swLat,
          lng: swLng
        }
      };
      debugger
      this.props.updateBounds(bounds);
    });
    this.props.fetchBenches(bounds);

    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.benches);

  }

  componentWillReceiveProps () {
    this.MarkerManager.updateMarkers(this.props.benches);
  }

  render () {
    return (
      <div id='map-container' ref={ map => this.mapNode = map }>
      </div>
    );
  }
}
export default BenchMap;
