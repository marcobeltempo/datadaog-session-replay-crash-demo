import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export function HomeScreen() {
  const [date, setDate] = useState(new Date());
  return (
    <View style={styles.container}>
      <Text>
        Interact with the date picker. Scroll past the valid dates until the UI
        locks up and a crash occurs.
      </Text>
      <DateTimePicker
        display="spinner"
        maximumDate={new Date()}
        minimumDate={new Date(2000, 0, 1)}
        onChange={(event, selectedDate) => setDate(selectedDate)}
        value={date}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});
