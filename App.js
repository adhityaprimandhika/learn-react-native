import { StatusBar } from "expo-status-bar";
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useState } from "react";

// 1. Buat komponen baru
// Component
const CounterApp = (props) => {
  // 3. Pindahkan useState()
  const [count, setCount] = useState(props.initialValue);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  // 2. Pindahkan text button dll ke dalam return dan jangan lupa dibungkus View
  return (
    <View style={styles.container}>
      <Text>Counter: {count}</Text>
      <TouchableOpacity style={styles.buttonIncrement} onPress={increment}>
        <Text style={styles.buttonLabel}>Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonDecrement} onPress={decrement}>
        <Text style={styles.buttonLabel}>Decrement</Text>
      </TouchableOpacity>
    </View>
  );
};

const DynamicValueApp = () => {
  const [dynamicValue, setDynamicValue] = useState("");

  const updateDynamicValue = (text) => {
    setDynamicValue(text);
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 18, margin: 10 }}>
        Dynamic Value: {dynamicValue}
      </Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          borderRadius: 10,
          padding: 5,
        }}
        placeholder="Enter dynamic value"
        onChangeText={updateDynamicValue}
        value={dynamicValue}
      />
      {dynamicValue !== "" && (
        <View style={styles.container}>
          <Text style={{ fontSize: 16, margin: 10 }}>
            {`You entered: ${dynamicValue}`}
          </Text>
          <TouchableOpacity
            style={styles.buttonIncrement}
            onPress={() => setDynamicValue("")}
          >
            <Text style={styles.buttonLabel}>Clear</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      {/* // 4. Cara memanggil komponen */}
      <CounterApp initialValue={10} />
      {/* <DynamicValueApp /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonIncrement: {
    backgroundColor: "#fb8500",
    padding: 5,
    borderRadius: 8,
    margin: 5,
  },

  buttonDecrement: {
    backgroundColor: "#023047",
    padding: 5,
    borderRadius: 8,
    margin: 5,
  },

  buttonLabel: {
    color: "#fff",
    fontSize: 24,
  },
});
