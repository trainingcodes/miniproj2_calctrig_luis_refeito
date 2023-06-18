import React from "react";
import styles from "../KeyboardStyle";
import { View, TouchableOpacity, Text } from "react-native";

export default (Comp) => {
  const buttons = [
    "LIMPAR",
    "DEL",
    "%",
    "/",
    7,
    8,
    9,
    "x",
    4,
    5,
    6,
    "-",
    1,
    2,
    3,
    "+",
    0,
    ".",
    "+/-",
    "^",
    "^ 3",
    "^ 2",
    "=",
  ];

  return (
    <View style={styles.buttons}>
      {buttons.map((button) =>
        button === "=" ? ( 
          <TouchableOpacity
            onPress={() => Comp.action(button)}
            key={button}
            style={[styles.button, { backgroundColor: "#28203e" }]}
          >
            <Text style={[styles.textButton, { color: "yellow", fontSize: 25 }]}>
              {button}
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => Comp.action(button)}
            key={button}
            style={styles.button}
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
        )
      )}
    </View>
  );
};
