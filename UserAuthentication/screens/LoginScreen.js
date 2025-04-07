import AuthContent from '../components/Auth/AuthContent';
import { loginUser } from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { useState } from 'react';
import { Alert } from 'react-native';
function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);


  async function loginHandler({ email, password }) {
    try {
      setIsAuthenticating(true);
      await loginUser(email, password);
    } catch (error) {

      Alert.alert('Error Message', 'API Call are failing', 'Ok');
    }
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message='Login ....' />;
  }
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
