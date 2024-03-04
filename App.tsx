import { ScrollView, StyleSheet } from "react-native";
import SignIn from "./pages/SignIn/SignIn";
import { ThemeProvider } from "@rneui/themed";
import theme from "./theme";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Register from "./pages/Register/Register";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Register />
      </Provider>
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
