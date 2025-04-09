import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

// Defines the style for the map container
const containerStyle = {
  width: '100%',
  height: '400px' // You can adjust the height as needed
};

// Define the initial center of the map (Tokyo, Japan)
const center = {
  lat: 35.6895,
  lng: 139.6917
};

function MapComponent() {
  // Check if the API key is available
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return <div>Error: Google Maps API key is missing. Please add it to your .env file.</div>;
  }

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10} // Adjust the initial zoom level as needed
      >
        {/* Children components, like markers, info windows, etc., can be added here */}
        <></> 
      </GoogleMap>
    </LoadScript>
  );
}

export default MapComponent;
