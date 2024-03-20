import React from "react";
import { View, Image } from "react-native";
import { Button, Text } from "@rneui/themed";
import { styles } from "../SignIn/SignInStyles";
import RegistrationFormInputs from "../../components/form/registration-form-inputs";
import UseProfile from "./useProfile";

 export default function Profile () {
    const {
      onSubmit,
      handleSubmit,
      register,
      errors,
      control,
      setProfilePic,
      profilePicError,
      setProfilePicError,
      imageUrl,
      loading,
    } = UseProfile();

    return (
        <View style={styles.signInPage}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require("../../assets/logo.png")} />
            <Text h2>User Profile</Text>
          </View>
          <RegistrationFormInputs
            control={control}
            errors={errors}
            styles={styles}
          />
          <View style={styles.inputContainer}>
            <Button onPress={handleSubmit(onSubmit)} title="Update Profile" />
          </View>
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              By continuing, you agree to our Terms of Service and Privacy Policy.
            </Text>
          </View>
        </View>
      );

}