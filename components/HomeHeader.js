import React from "react";
import { View, Text, Image, TextInput } from "react-native";

import { COLORS, FONTS, SIZES, assets } from "../constants";

const HomeHeader = () => {
  return (
    <View
      style={{
        backgroundColor: COLORS.headerTheme4,
        padding: SIZES.font,
        height: 250,
        zIndex: 1
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        {/* <Text style={{ fontSize: 25, color: COLORS.white, fontWeight: 'bold' }}>QUINFO</Text> */}

        <View style={{ width: 32, height: 24,}}>
          <Image
            source={assets.userid}
            resizeMode="contain"
            style={{ width: "100%", height: "100%", cursor:'pointer' }}
          />
        </View>
      </View>

      <View style={{ marginVertical: SIZES.font }}>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
            color: COLORS.white,
          }}
        >
          Hello Citizens 👋 Welcome to Quinfo 
        </Text>

        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            color: COLORS.white,
            marginTop: SIZES.base / 2,
          }}
        >
          Let’s find the Information
        </Text>
      </View>

      <View style={{ marginTop: SIZES.font }}>
        <View
          style={{
            width: "100%",
            borderRadius: SIZES.font,
            backgroundColor: COLORS.gray,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 2,
          }}
        >
          <Image
            source={assets.search}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: SIZES.base }}
          />
          <TextInput
            placeholder="Search For Info"
            style={{ flex: 1 }}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;