import { ExpoConfig } from "@expo/config";
import baseConfig from "./app.json";

export default ({ config }: { config: ExpoConfig }) => ({
  ...config,
  ...baseConfig.expo,
  plugins: [
    ...(baseConfig.expo.plugins || []),
    [
      "@rnmapbox/maps",
      {
        RNMapboxMapsImpl: "mapbox",
        RNMapboxMapsVersion: "11.0.0",
        RNMapboxMapsDownloadToken: process.env.MAPBOX_DOWNLOADS_TOKEN,
      },
    ],
  ],
});
