import React, { useState } from "react";
import { View, Image } from "react-native";
import { Button, Input, Text } from "@rneui/themed";
import { styles } from "./SignInStyles";

enum InputNames {
  EMAIL = "email",
  PASSWORD = "password",
}

const SignIn = () => {
  const [userInfo, setUserInfo] = useState({
    [InputNames.EMAIL]: "",
    [InputNames.PASSWORD]: "",
  });

  //   <>
  //     <View
  //     // style={{ marginTop: 3, flexDirection: "row", alignItems: "center" }}
  //     >
  //       {/* <View style={{ position: "absolute" }}> */}
  //       <View>
  //         <Image
  //           style={styles.logo}
  //           source={require("../../assets/logo.png")}
  //         />
  //       </View>
  //       <TextInput
  //         // style={{
  //         //   width: "100%",
  //         //   paddingLeft: 11,
  //         //   paddingRight: 1,
  //         //   paddingVertical: 2,
  //         // }}
  //         placeholder="Name"
  //         onChangeText={(text) => register("name", { value: text })}
  //       />
  //     </View>
  //     <FormFieldError fieldError={errors.name} />
  //     <View
  //     // style={{ marginTop: 3, flexDirection: "row", alignItems: "center" }}
  //     >
  //       {/* <View style={{ position: "absolute" }}> */}
  //       <View>{/* <Text>Icon SVG or Image</Text> */}</View>
  //       <TextInput
  //         // style={{
  //         //   width: "100%",
  //         //   paddingLeft: 11,
  //         //   paddingRight: 1,
  //         //   paddingVertical: 2,
  //         // }}
  //         placeholder="Email"
  //         onChangeText={(text) => register("email", { value: text })}
  //       />
  //     </View>
  //     <FormFieldError fieldError={errors.email} />
  //     {/* Phone Number Input */}
  //     <View
  //     // style={{
  //     //   flexDirection: "row",
  //     //   justifyContent: "space-between",
  //     //   gap: 2,
  //     // }}
  //     >
  //       <View>
  //         <View
  //         // style={{ marginTop: 2, flexDirection: "row", alignItems: "center" }}
  //         >
  //           {/* <View style={{ position: "absolute" }}> */}
  //           <View>{/* <Text>Phone Number Icon</Text> */}</View>
  //           <TextInput
  //             // style={{
  //             //   width: "100%",
  //             //   paddingLeft: 11,
  //             //   paddingRight: 1,
  //             //   paddingVertical: 2,
  //             // }}
  //             placeholder="Phone Number"
  //             onChangeText={(text) => register("phoneNumber", { value: text })}
  //           />
  //         </View>
  //         <FormFieldError fieldError={errors.phoneNumber} />
  //       </View>
  //       {/* Profile Picture Input */}
  //       <View>
  //         <TouchableOpacity
  //           style={{ marginTop: 2, flexDirection: "row", alignItems: "center" }}
  //           onPress={handleProfilePicChange}
  //         >
  //           <View>{/* <Text>Upload Icon</Text> */}</View>
  //           <Text>
  //             {profilePicInputRef.current?.value ? "Uploaded" : "Picture"}
  //           </Text>
  //         </TouchableOpacity>
  //         <Text style={{ color: "red", marginTop: 1, fontSize: 12 }}>
  //           {profilePicError}
  //         </Text>
  //       </View>
  //     </View>
  //     {/* Password Input */}
  //     <View
  //       style={{ marginTop: 2, flexDirection: "row", alignItems: "center" }}
  //     >
  //       <View style={{ position: "absolute" }}>
  //         {/* <Text>Password Icon</Text> */}
  //       </View>
  //       <TextInput
  //         style={{
  //           width: "100%",
  //           paddingLeft: 10,
  //           paddingRight: 1,
  //           paddingVertical: 3,
  //         }}
  //         placeholder="Password"
  //         onChangeText={(text) => register("password", { value: text })}
  //         secureTextEntry
  //       />
  //     </View>
  //     <FormFieldError fieldError={errors.password} />
  //   </>
  // );
  return (
    <View style={styles.signInPage}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../../assets/logo.png")} />
        <Text h2>Welcome Back</Text>
        <Text h4>Enter your email to sign in!</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email Address</Text>
        <Input
          onChangeText={() => console.log("hehehe")}
          // onBlur={handleBlur(InputNames.EMAIL)}
          value={userInfo[InputNames.EMAIL]}
          placeholder="johndoe@email.com"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <Input
          onChangeText={() => console.log("hehehe")}
          // onBlur={handleBlur(InputNames.PASSWORD)}
          secureTextEntry={true}
          value={userInfo[InputNames.PASSWORD]}
          placeholder="*********"
        />
      </View>
      <View style={styles.inputContainer}>
        <Button onPress={() => console.log("mmm")} title="Sign In" />
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