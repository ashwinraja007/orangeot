
import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { cn } from "@/lib/utils";

interface MapComponentProps {
  className?: string;
  locations: {
    title: string;
    description: string;
    coordinates: [number, number];
  }[];
}

const MapComponent = ({ className, locations }: MapComponentProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');

  useEffect(() => {
    // This is a temporary solution - in production, this should be an environment variable
    // or fetched from a secure backend
    const token = 'pk.eyJ1IjoiZGVtby1hY2NvdW50MSIsImEiOiJjbHprOGtuNmQwMGJ1MmptbGQ3c2Y2NHAzIn0.f7JM9e1DuEBwqCYbqcIvOg';
    setMapboxToken(token);
  }, []);

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    // Initialize map
    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: locations[0]?.coordinates || [80.2707, 13.0827], // Chennai coordinates as default
      zoom: 10,
      pitch: 45,
      bearing: 20,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    // Add markers for each location with enhanced styling
    locations.forEach((location) => {
      if (!map.current) return;
      
      // Create a custom marker element with better styling
      const markerEl = document.createElement('div');
      markerEl.className = 'flex items-center justify-center';
      markerEl.innerHTML = `
        <div class="relative w-8 h-8">
          <div class="absolute inset-0 bg-gray-800 rounded-full opacity-25 animate-ping" style="animation-duration: 3s;"></div>
          <div class="relative flex items-center justify-center w-8 h-8 bg-gray-800 rounded-full shadow-lg">
            <div class="w-4 h-4 bg-white rounded-full"></div>
          </div>
        </div>
      `;
      
      // Create a popup with enhanced styling
      const popup = new mapboxgl.Popup({
        offset: 25,
        closeButton: false,
        maxWidth: '300px',
        className: 'custom-popup'
      }).setHTML(`
        <div class="p-3">
          <h3 class="font-bold text-lg mb-1">${location.title}</h3>
          <p class="text-gray-600">${location.description}</p>
        </div>
      `);
      
      // Add marker to map with popup
      new mapboxgl.Marker(markerEl)
        .setLngLat(location.coordinates)
        .setPopup(popup)
        .addTo(map.current);
    });

    // Add atmospheric effect
    map.current.on('style.load', () => {
      map.current?.setFog({
        color: 'rgb(255, 255, 255)',
        'high-color': 'rgb(200, 200, 225)',
        'horizon-blend': 0.2,
      });
    });

    // Add 3D buildings for a more immersive experience
    map.current.on('load', () => {
      // Add 3D buildings, but only for high zoom levels
      map.current?.addLayer({
        'id': '3d-buildings',
        'source': 'composite',
        'source-layer': 'building',
        'filter': ['==', 'extrude', 'true'],
        'type': 'fill-extrusion',
        'minzoom': 14,
        'paint': {
          'fill-extrusion-color': '#aaa',
          'fill-extrusion-height': [
            'interpolate', ['linear'], ['zoom'],
            14, 0,
            16, ['get', 'height']
          ],
          'fill-extrusion-base': [
            'interpolate', ['linear'], ['zoom'],
            14, 0,
            16, ['get', 'min_height']
          ],
          'fill-extrusion-opacity': 0.6
        }
      }, 'waterway-label');
    });

    // Add auto-rotation for visual interest
    let userInteracting = false;
    
    map.current.on('mousedown', () => {
      userInteracting = true;
    });
    
    map.current.on('touchstart', () => {
      userInteracting = true;
    });
    
    map.current.on('mouseup', () => {
      userInteracting = false;
    });
    
    map.current.on('touchend', () => {
      userInteracting = false;
    });

    function rotateCamera() {
      if (!map.current || userInteracting) return;
      
      const rotationSpeed = 0.2;
      const currentBearing = map.current.getBearing();
      map.current.easeTo({ bearing: currentBearing + rotationSpeed, duration: 50, easing: (n) => n });
      
      requestAnimationFrame(rotateCamera);
    }
    
    // Start the rotation after a short delay
    const timer = setTimeout(() => {
      rotateCamera();
    }, 5000);

    // Add custom styling to the map
    // This will style the UI elements like the navigation control, attribution, and popups
    const customStyles = document.createElement('style');
    customStyles.textContent = `
      .mapboxgl-popup-content {
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        padding: 0;
        overflow: hidden;
        border: 1px solid rgba(0, 0, 0, 0.1);
      }
      
      .mapboxgl-popup-close-button {
        font-size: 16px;
        color: #666;
        right: 8px;
        top: 8px;
      }
      
      .mapboxgl-popup-close-button:hover {
        background: none;
        color: #000;
      }
      
      .mapboxgl-ctrl-group {
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        overflow: hidden;
      }
      
      .mapboxgl-ctrl button {
        width: 36px;
        height: 36px;
      }
    `;
    document.head.appendChild(customStyles);

    return () => {
      if (map.current) {
        map.current.remove();
      }
      clearTimeout(timer);
      document.head.removeChild(customStyles);
    };
  }, [locations, mapboxToken]);

  return (
    <div className={cn("relative w-full h-96 rounded-xl overflow-hidden shadow-lg", className)}>
      {!mapboxToken && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
          <p className="text-lg text-gray-500">Loading map...</p>
        </div>
      )}
      <div ref={mapContainer} className="w-full h-full" />
      
      {/* Fade overlay for aesthetics */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      
      {/* Interactive overlay with location info */}
      <div className="absolute bottom-4 left-4 z-10 p-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-md max-w-sm">
        <h3 className="font-bold text-gray-800 mb-1">Our Locations</h3>
        <p className="text-sm text-gray-600">Explore our global presence. Click on markers to see location details.</p>
      </div>
    </div>
  );
};

export default MapComponent;
