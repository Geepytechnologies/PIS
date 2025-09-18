import profile from "@/assets/images/Mr.jpg";
import React from "react";
import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";

type Props = {
  imageSource?: ImageSourcePropType | undefined;
};

const Photobox = ({ imageSource }: Props) => {
  return (
    <View>
      <Image
        className="rounded-full w-10 h-10 bg-cover border-[2.5px] border-green1"
        source={imageSource ? { uri: imageSource } : profile}
      />
    </View>
  );
};

export default Photobox;

const styles = StyleSheet.create({});
