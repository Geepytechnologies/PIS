import { GeoJsonProperties } from 'geojson';

export type CustomGeoJsonProperties = {
	property_id: string; // Adjust the type accordingly
	payment_status: string;
	building_type: string;
	address: string;
	building_use: string;
	area_name: string;
	total_due: number;
	bill_delivery_status: string;
	// Add other properties as needed
} & GeoJsonProperties;

// Use CustomGeoJsonProperties in your GeoJSON feature
export interface CustomGeoJsonFeature {
	type: 'Feature';
	geometry: {
		type: string;
		coordinates: number[];
	};
	properties: CustomGeoJsonProperties;
}

// Use CustomGeoJsonFeature as the type of your GeoJSON source
export interface CustomGeoJsonSource {
	type: 'geojson';
	data: {
		type: 'FeatureCollection';
		features: CustomGeoJsonFeature[];
	};
}
