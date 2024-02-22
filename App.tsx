import { StyleSheet } from "react-native";
import SignIn from "./pages/SignIn/SignIn";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { object, string, z, TypeOf } from "zod";
import { useState } from "react";
import { ThemeProvider } from "@rneui/themed";
import theme, { colors } from "./theme";

const signupSchema = object({
  email: string().email({ message: "A valid email is required" }),
  name: string()
    .min(3, { message: "Name must be at least 3 character long" })
    .max(20, "Name cannot exceed 20 characters"),
  phoneNumber: string()
    .min(10, "Phone number must be valid")
    .max(10, { message: "Phone number must be valid" }),
  password: string()
    .min(8, "Password must contain at least 8 characters")
    .max(20, "Password cannot exceed 20 characters"),
});

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    resolver: zodResolver(signupSchema),
  });
  const [profilePic, setProfilePic] = useState<File | null>(null);
  const [profilePicError, setProfilePicError] = useState<string | null>(null);
  return (
    <ThemeProvider theme={theme}>
      <SignIn
        register={register}
        errors={errors}
        profilePic={{ setProfilePic, profilePicError, setProfilePicError }}
      />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
