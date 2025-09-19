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
        RNMapboxMapsDownloadToken:
          "sk.eyJ1IjoiZ2VlcHl0ZWNoIiwiYSI6ImNtZnBreW5sdTBneDYyanM4YzY5ZjRxZ3UifQ.YKgBnWMLEhznDgcPDdfmIg",
        RNMapboxMapsVersion: "11.0.0",
      },
    ],
  ],
});
