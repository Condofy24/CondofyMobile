import React from "react";
import { View, Image, ScrollView } from "react-native";
import { Button, Text } from "@rneui/themed";
import { styles } from "../SignIn/SignInStyles";
import { StyleSheet } from "react-native";
import RegistrationFormInputs from "../../components/form/registration-form-inputs";
import useRegister from "./useRegister";

export default function Register() {
  const { handleSubmit, errors, control, onSubmit } = useRegister();

  return (
    <View style={styles.signInPage}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../../assets/logo.png")} />
        <View style={stylesRegister.signupType}>
          <Button size="sm">Owner / Tenant</Button>
          <Button size="sm">Company Manager</Button>
        </View>
      </View>
      <RegistrationFormInputs
        control={control}
        errors={errors}
        styles={styles}
      />
      <View style={styles.inputContainer}>
        <Button onPress={handleSubmit(onSubmit)} title="Sign Up" />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </Text>
      </View>
    </View>
  );
}

const stylesRegister = StyleSheet.create({
  signupType: {
    flexDirection: "row",
    gap: 10,
  },
});
