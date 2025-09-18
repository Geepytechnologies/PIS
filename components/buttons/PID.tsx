import UserCheck from "@/assets/icons/usercheck.svg";
import UserX from "@/assets/icons/userx.svg";
import React from "react";
import { ColorValue, StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = {
  label?: string;
  background?: ColorValue | undefined;
};

const PID = ({ background, label }: Props) => {
  const getIcon = () => {
    switch (label?.toLowerCase()) {
      case "paid pid":
        return <UserCheck />;
      case "not paid pid":
        return <UserX />;
      case "part paid pid":
        return <UserX />;
      default:
        break;
    }
  };
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{ backgroundColor: background ? background : "#11111170" }}
      className="p-2 rounded-[4px] border border-[#808080] flex flex-row gap-2 items-center"
    >
      {getIcon()}
      <Text className="text-[#f0f0f0] font-[500] text-[10px] tracking-[0.15px] capitalize">
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default PID;

const styles = StyleSheet.create({});
