import React from "react";
import { View, Image } from "react-native";
import { Button, Input, Text } from "@rneui/themed";
import { styles } from "./SignInStyles";
import useLogin from "./useLogin";
import FormFieldError from "../../components/form/form-field-error";
import { Controller } from "react-hook-form";

const SignIn = () => {
  const { handleSubmit, errors, control, onSubmit } = useLogin();

  return (
    <View style={styles.signInPage}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../../assets/logo.png")} />
        <Text h2>Welcome Back</Text>
        <Text h4>Enter your email to sign in!</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email Address</Text>
        <Controller
          defaultValue=""
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="johndoe@email.com"
            />
          )}
          name="email"
        />
        <FormFieldError fieldError={errors.email} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <Controller
          defaultValue=""
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              secureTextEntry={true}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="*********"
            />
          )}
          name="password"
        />
        <FormFieldError fieldError={errors.password} />
      </View>
      <View style={styles.inputContainer}>
        <Button onPress={handleSubmit(onSubmit)} title="Sign In" />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </Text>
      </View>
    </View>
  );
};

export default SignIn;
