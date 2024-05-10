import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, Polyline, InfoWindow, LoadScript, useJsApiLoader } from '@react-google-maps/api';

const LiveTracking = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [polyline, setPolyline] = useState([]);
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyBTfxW7GwAhpH7gtxSEMbHq_D453O7DYdM', // Replace with your API key
  });

  useEffect(() => {
    // Fetch user's current location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ lat: latitude, lng: longitude });
      },
      (error) => {
        console.error('Error getting user location:', error);
      }
    );
  }, []);

  useEffect(() => {
    // Update markers and polyline when current location changes
    if (currentLocation) {
      updateMarkerAndPolyline();
    }
  }, [currentLocation]);

  const updateMarkerAndPolyline = () => {
    // Update markers
    const newMarkers = [
      {
        id: 'current',
        position: currentLocation,
        info: 'Current Location',
      },
      {
        id: 'source',
        position: { lat: 28.573120, lng: 77.022667 },
        info: 'Source Location',
      },
      {
        id: 'destination',
        position: { lat: 28.572730, lng: 77.024370 },
        info: 'Destination Location',
      },
    ];

    setMarkers(newMarkers);

    // Update polyline
    const newPolyline = [
      { lat: 28.573120, lng: 77.022667 },
      currentLocation,
      { lat: 28.572730, lng: 77.024370 },
    ];

    setPolyline(newPolyline);
  };

  if (loadError) {
    console.error('Error loading Google Maps API:', loadError);
    return <div>Error loading Google Maps API</div>;
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  console.log('Markers:', markers);
  console.log('Polyline:', polyline);

  return (
    <div style={{ height: '500px', width: '100%' }}>
      <GoogleMap
        center={currentLocation}
        zoom={13}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            position={marker.position}
            onClick={() => {
              console.log('Clicked marker:', marker.id);
            }}
          >
            <InfoWindow position={marker.position}>
              <div>{marker.info}</div>
            </InfoWindow>
          </Marker>
        ))}
        {polyline.length > 0 && <Polyline path={polyline} options={{ strokeColor: 'red' }} />}
      </GoogleMap>
    </div>
  );
};

export default LiveTracking;
