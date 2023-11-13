import { MainStack } from "@navigations";
import { CustomStatusBar } from "@components";
import { AuthProvider } from "@contexts/AuthContext";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return (
    <AuthProvider>
      <CustomStatusBar barStyle="light" />
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
