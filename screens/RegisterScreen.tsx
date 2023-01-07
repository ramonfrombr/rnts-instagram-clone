import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSignUp = () => {};

  return (
    <View>
      <TextInput placeholder="name" onChangeText={(text) => setName(text)} />
      <TextInput placeholder="email" onChangeText={(text) => setName(text)} />
      <TextInput
        placeholder="password"
        secureTextEntry
        onChangeText={(text) => setName(text)}
      />
    </View>
  );
};

export default RegisterScreen;
