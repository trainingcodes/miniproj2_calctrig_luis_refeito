import React from "react";
import styles from "../KeyboardStyle";
import { View, TouchableOpacity, Text } from "react-native";

export default (Comp) => {
  const buttons = ["DEC", "OCT", "HEX", "BIN"];
  return (
    <View style={styles.buttons}>
      {buttons.map((button) => (
        <TouchableOpacity
          onPress={() => Comp.action(button)}
          key={button}
          style={styles.buttonOther}
        >
          <Text
            style={[
              styles.textButton,
              { color: typeof button === "number" ? "yellow" : "#28203e" },
            ]}
          >
            {button}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
