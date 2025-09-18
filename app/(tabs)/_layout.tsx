import { Tabs } from "expo-router";
import React from "react";

import { HapticTab } from "@/components/haptic-tab";
import TabBar, { TabBarProps } from "@/components/tabs/TabBar";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}
      tabBar={(props: TabBarProps) => <TabBar {...props} />}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Dashboard",
        }}
      />
      <Tabs.Screen
        name="distribution"
        options={{
          title: "Bill Distribution",
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
        }}
      />
      <Tabs.Screen
        name="enforcement"
        options={{
          title: "Enforcement",
        }}
      />
      <Tabs.Screen
        name="request"
        options={{
          title: "Change Request",
        }}
      />
    </Tabs>
  );
}
