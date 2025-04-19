
import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
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
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    // Add markers for each location
    locations.forEach((location) => {
      if (!map.current) return;
      
      // Create a marker element
      const markerEl = document.createElement('div');
      markerEl.className = 'custom-marker';
      markerEl.style.backgroundImage = 'url(https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png)';
      markerEl.style.width = '32px';
      markerEl.style.height = '40px';
      markerEl.style.backgroundSize = 'cover';
      
      // Add marker to map
      new mapboxgl.Marker(markerEl)
        .setLngLat(location.coordinates)
        .setPopup(new mapboxgl.Popup({ offset: 25 })
          .setHTML(`<h3 class="font-bold">${location.title}</h3><p>${location.description}</p>`))
        .addTo(map.current);
    });

    return () => {
      if (map.current) {
        map.current.remove();
      }
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
    </div>
  );
};

export default MapComponent;
