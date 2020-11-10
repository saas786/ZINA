import React, { Fragment, Component } from 'react'
import { Marker, Popup, MapContainer, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import data from './data';

export const VenueLocationIcon = L.icon({
  iconUrl: require('./venue_location_icon.svg'),
  iconRetinaUrl: require('./venue_location_icon.svg'),
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [35, 35],
  className: 'leaflet-venue-icon'
});

const MarkerPopup = (props) => {
  const { name } = props.data;
  return  (
  	<Popup>
  		<div className='poup-text'>{name}</div>
  	</Popup>);
};

const VenueMarkers = (props) => {
  const { venues } = props;

  const markers = venues.map((venue, index) => (
    <Marker key={index} position={venue.geometry} icon={VenueLocationIcon} >
      <MarkerPopup data={venue} />
    </Marker>
  ));

  return <Fragment>{markers}</Fragment>
};

export default class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: { lat: -28.308377, lng: -49.327237 },
      zoom: 4,
    }
  }
  render() {
    const { currentLocation, zoom } = this.state;
    return (
      <MapContainer center={currentLocation} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <VenueMarkers venues={ data.venues }/>
      </MapContainer>
    );
  }
}