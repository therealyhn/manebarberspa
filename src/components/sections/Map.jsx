import mapMarker from "../../assets/logo-full-text.png"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import L from 'leaflet';


const mapStyles = `
  .leaflet-container {
    z-index: 0 !important;
  }
  .leaflet-pane {
    z-index: 0 !important;
  }
  .leaflet-top,
  .leaflet-bottom {
    z-index: 0 !important;
  }
`;

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

function Map() {
    const position = [44.64258386223394, 20.915421764320598]

    return (
        <>
            <style>{mapStyles}</style>
            <div className="w-full h-[380px]">
                <MapContainer
                    center={[44.64419386223394, 20.915421764320598]}
                    zoom={15}
                    scrollWheelZoom={false}
                    className="h-full w-full"
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            <div className="flex flex-col items-center">
                                <img src={mapMarker} alt="Map Marker" className="w-28" />
                                <p className="font-prata">1. Maja 35, Smederevo</p>
                            </div>
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </>
    )
}

export default Map
