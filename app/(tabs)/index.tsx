import PID from "@/components/buttons/PID";
import Photobox from "@/components/Photobox";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-white flex-1 p-3">
      <View className="flex flex-row items-center gap-3">
        <Photobox />
        <PID label="Paid PID" />
        <PID label="Not paid PID" />
        <PID label="Part paid PID" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
