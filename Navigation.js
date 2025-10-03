import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Login from "./app/login";
import Home from "./app/home";
import ProductDetail from "./app/product/[id]";
import Info from "./app/info";

const Stack = createNativeStackNavigator();

function AppStack() {
  const { token } = useAuth();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#4652ffff" },
        headerTintColor: "#ffffffff",
        headerTitleAlign: "center",
        headerShadowVisible: true,
        headerTitleStyle: {
          textShadowColor: "#000000ff",
          textShadowOffset: { width: 1, height: 1 },
          textShadowRadius: 3,
        },
      }}
    >
      {!token ? (
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
      ) : (
        <>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Produtos" }}
          />
          <Stack.Screen
            name="ProductDetail"
            component={ProductDetail}
            options={{ title: "Detalhes" }}
          />
          <Stack.Screen
            name="Info"
            component={Info}
            options={{ title: "Informações do Grupo" }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}

export default function Navigation() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </AuthProvider>
  );
}
