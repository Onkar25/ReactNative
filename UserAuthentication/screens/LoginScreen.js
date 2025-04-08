import AuthContent from "../components/Auth/AuthContent";
import { loginUser } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { useContext, useState } from "react";
import { Alert } from "react-native";
import { AuthContext } from "../store/auth-context";
function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);
  async function loginHandler({ email, password }) {
    try {
      setIsAuthenticating(true);
      const token = await loginUser(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert("Error Message", "API Call are failing", "Ok");
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Login ...." />;
  }
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
