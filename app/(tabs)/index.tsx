import { Image, StyleSheet, Platform, View, Text } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { styled, withExpoSnack } from "nativewind";

const StyledView = styled(View);
const StyledText = styled(Text);

const HomeScreen = () => {
  return (
    <StyledView>
      <StyledText className="text-red-500 text-[60px]">Hello World!</StyledText>
    </StyledView>
  );
};

export default withExpoSnack(HomeScreen);
