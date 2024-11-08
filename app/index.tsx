import { View, Text } from "react-native";
import React from "react";
import { globalStyles } from "@/styles/global-styles";
import ThemedText from "@/components/ThemedText";
import CalculatorButton from "@/components/CalculatorButton";
import { Colors } from "@/constants/Colors";
import { useCalculator } from "@/hooks/useCalculator";

const CalculatorApp = () => {
  const {
    formula,
    prevNumber,
    buildNumber,
    clean,
    deleteLast,
    toggleSign,
    addOperation,
    divideOperation,
    multiplyOperation,
    subtractOperation,
    calculateResult,
  } = useCalculator();

  return (
    <View style={globalStyles.calculatorContanier}>
      <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
        <ThemedText variant="h1">{formula}</ThemedText>
        {formula === prevNumber ? (
          <ThemedText variant="h2"></ThemedText>
        ) : (
          <ThemedText variant="h2">{prevNumber}</ThemedText>
        )}
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          onPress={() => clean()}
          blackText
          color={Colors.lightGray}
          label="C"
        />
        <CalculatorButton
          onPress={toggleSign}
          blackText
          color={Colors.lightGray}
          label="+/-"
        />
        <CalculatorButton
          onPress={deleteLast}
          blackText
          color={Colors.lightGray}
          label="del"
        />
        <CalculatorButton
          color={Colors.orange}
          onPress={divideOperation}
          label="%"
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton onPress={() => buildNumber("7")} label="7" />
        <CalculatorButton onPress={() => buildNumber("8")} label="8" />
        <CalculatorButton onPress={() => buildNumber("9")} label="9" />
        <CalculatorButton
          color={Colors.orange}
          onPress={multiplyOperation}
          label="X"
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton onPress={() => buildNumber("4")} label="4" />
        <CalculatorButton onPress={() => buildNumber("5")} label="5" />
        <CalculatorButton onPress={() => buildNumber("6")} label="6" />
        <CalculatorButton
          color={Colors.orange}
          onPress={subtractOperation}
          label="-"
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton onPress={() => buildNumber("1")} label="1" />
        <CalculatorButton onPress={() => buildNumber("2")} label="2" />
        <CalculatorButton onPress={() => buildNumber("3")} label="3" />
        <CalculatorButton
          color={Colors.orange}
          onPress={addOperation}
          label="+"
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton
          doubleSize
          onPress={() => buildNumber("0")}
          label="0"
        />
        <CalculatorButton onPress={() => console.log("")} label="." />
        <CalculatorButton
          color={Colors.orange}
          onPress={calculateResult}
          label="="
        />
      </View>
    </View>
  );
};

export default CalculatorApp;
