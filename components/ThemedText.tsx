import { Colors } from "@/constants/Colors";
import { globalStyles } from "@/styles/global-styles";
import { Text, TextProps } from "react-native";

interface Props extends TextProps {
  variant?: "h1" | "h2";
}

const ThemedText = ({ children, variant, ...rest }: Props) => {
  return (
    <Text
      style={[
        { color: "white" },
        variant === "h1" && globalStyles.mainResult,
        variant === "h2" && globalStyles.subResult,
      ]}
      numberOfLines={1}
      adjustsFontSizeToFit
      {...rest}
    >
      {children}
    </Text>
  );
};

export default ThemedText;
