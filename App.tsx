import { ScrollView, StyleSheet } from "react-native";
import SignIn from "./pages/SignIn/SignIn";
import { ThemeProvider } from "@rneui/themed";
import theme from "./theme";
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";
import Register from "./pages/Register/Register";
import { PersistGate } from "redux-persist/integration/react";
import Toast from "react-native-toast-message";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Toast />
          <NavigationContainer>
            <Tab.Navigator initialRouteName="Home">
              <Tab.Screen name="Home" component={SignIn} />
              <Tab.Screen name="Register" component={Register} />
              <Tab.Screen name="Profile" component={SignIn} />
            </Tab.Navigator>
          </NavigationContainer>
        </PersistGate>
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
