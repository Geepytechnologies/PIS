import MapboxGL from "@rnmapbox/maps";
import pako from "pako";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

// MapboxGL.setAccessToken(process.env.EXPO_PUBLIC_MAPBOX_ACCESS_TOKEN!);
MapboxGL.setAccessToken(
  "pk.eyJ1IjoiZ2VlcHl0ZWNoIiwiYSI6ImNsejJsaTRycjBsZTQyaXBubHVkcXl4MnAifQ.blpG7Z6yXdZjnxwOtY7HQA"
);

interface MapProps {
  coords: [number, number];
  onPropertyClick?: (feature: any) => void;
}

const Map = ({ coords, onPropertyClick }: MapProps) => {
  const [geojson, setGeojson] = useState<any>(null);

  useEffect(() => {
    const fetchAndAddGeojson = async () => {
      try {
        const response = await fetch(
          "https://pis-portal.up.railway.app/engisblob/Data.geojson.gz"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // decompress gzip
        const arrayBuffer = await response.arrayBuffer();
        const decompressed = pako.ungzip(new Uint8Array(arrayBuffer), {
          to: "string",
        });
        const parsed = JSON.parse(decompressed);
        setGeojson(parsed);
      } catch (error) {
        console.error("Error fetching GeoJSON:", error);
      }
    };

    fetchAndAddGeojson();
  }, []);

  return (
    <View style={styles.page}>
      <MapboxGL.MapView
        style={styles.map}
        styleURL="mapbox://styles/mapbox/streets-v11"
      >
        <MapboxGL.Camera
          centerCoordinate={coords}
          zoomLevel={16}
          animationMode="flyTo"
          animationDuration={2000}
        />

        {/* Marker */}
        <MapboxGL.PointAnnotation
          id="marker1"
          coordinate={[coords[0], coords[1]]}
        >
          {/* You must pass children — e.g. a custom marker */}
          <View
            style={{
              width: 30,
              height: 30,
              backgroundColor: "red",
              borderRadius: 15,
            }}
          />
        </MapboxGL.PointAnnotation>
        {/* GeoJSON Layer */}
        {geojson && (
          <MapboxGL.ShapeSource
            id="buildingSource"
            shape={geojson}
            onPress={(e) => {
              const feature = e.features[0];
              onPropertyClick?.(feature);
            }}
          >
            <MapboxGL.FillLayer
              id="buildingFill"
              style={{
                fillColor: [
                  "match",
                  ["get", "payment_status"],
                  "Paid",
                  "green",
                  "Not Paid",
                  "red",
                  "#d8ad88",
                ],
                fillOpacity: 0.6,
              }}
            />
            <MapboxGL.LineLayer
              id="buildingLine"
              style={{
                lineColor: "#000",
                lineWidth: 1,
              }}
            />
          </MapboxGL.ShapeSource>
        )}
      </MapboxGL.MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default Map;
