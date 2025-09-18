import BillFill from "@/assets/icons/billfill.svg";
import BillOutline from "@/assets/icons/billline.svg";
import DashboardFill from "@/assets/icons/dashboardfill.svg";
import DashboardOutline from "@/assets/icons/dashboardline.svg";
import EnforcementFill from "@/assets/icons/enforcementfill.svg";
import EnforcementOutline from "@/assets/icons/enforcementline.svg";
import RequestFill from "@/assets/icons/requestfill.svg";
import RequestOutline from "@/assets/icons/requestline.svg";
import SearchFill from "@/assets/icons/searchfill.svg";
import SearchOutline from "@/assets/icons/searchline.svg";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export type TabBarProps = {
  state: BottomTabBarProps["state"];
  descriptors: BottomTabBarProps["descriptors"];
  navigation: BottomTabBarProps["navigation"];
};

const TabBar = ({ state, descriptors, navigation }: TabBarProps) => {
  return (
    <View
      className="bg-[#111111]"
      style={{
        flexDirection: "row",
        minHeight: 76,
        height: 76,
      }}
    >
      {state.routes.map(
        (
          route: { key: string | number; name: any },
          index: React.Key | null | undefined
        ) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;

          const isFocused = state.index === index;
          const getLogoIcon = (route: any, isFocused: boolean) => {
            switch (route.name) {
              case "index":
                return isFocused ? <DashboardFill /> : <DashboardOutline />;

              case "enforcement":
                return isFocused ? <EnforcementFill /> : <EnforcementOutline />;
              case "search":
                return isFocused ? <SearchFill /> : <SearchOutline />;

              case "distribution":
                return isFocused ? <BillFill /> : <BillOutline />;
              case "request":
                return isFocused ? <RequestFill /> : <RequestOutline />;

              default:
                return;
            }
          };

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key as string,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity
              className="h-full"
              activeOpacity={0.8}
              key={index}
              onPress={onPress}
              style={{
                flex: 1,
                gap: 10,
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
            >
              <View
                className={`${label == "Search" && "rounded-full bg-[#111111] -translate-y-4"} flex flex-col items-center justify-center w-full h-full`}
              >
                {getLogoIcon(route, isFocused)}
                <Text
                  className="font-pop mb-2 font-[500] mt-1"
                  style={{
                    color: isFocused ? "#00A86D" : "#F6F6F6",
                    fontSize: 8,
                  }}
                >
                  {label}
                </Text>
                {isFocused && (
                  <View className="w-full">
                    <LinearGradient
                      colors={[
                        "rgba(0,168,109,0)", // 0% transparent
                        "rgba(0,168,109,0.04)", // 83.65%
                        "rgba(0,168,109,0.44)", // 100%
                      ]}
                      locations={[0.5, 0.8365, 1]} // same stops as your CSS
                      start={{ x: 0, y: 0 }}
                      end={{ x: 0, y: 1 }}
                      className="h-[10px] w-full"
                    />

                    <View className="h-[1px] w-full  bg-green1"></View>
                  </View>
                )}
              </View>
            </TouchableOpacity>
          );
        }
      )}
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({});
