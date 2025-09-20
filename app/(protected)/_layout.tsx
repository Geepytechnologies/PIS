import Auth from "@/utils/auth";
import { router, Stack } from "expo-router";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";

type Props = {};

const ProtectedLayout = (props: Props) => {
  const { isAuthenticated } = Auth;

  useEffect(() => {
    const checkAuth = async () => {
      const res = await isAuthenticated();
      console.log({ isAuthenticated: res });
      if (!res) {
        router.replace("/");
      }
    };

    checkAuth();
  }, []);
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default ProtectedLayout;

const styles = StyleSheet.create({});
