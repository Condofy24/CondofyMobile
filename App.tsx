import { StyleSheet } from "react-native";
import SignIn from "./pages/SignIn/SignIn";
import { ThemeProvider } from "@rneui/themed";
import theme from "./theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SignIn />
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
