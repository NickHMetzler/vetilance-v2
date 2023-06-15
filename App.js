import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PetInfoScreen from './PetInfoScreen';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';

const Stack = createStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false); // Track the login state

  const handleLogin = () => {
    // Perform your login logic here
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Perform your logout logic here
    setIsLoggedIn(false);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="PetInformation" component={PetInfoScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login">
              {(props) => <LoginScreen {...props} onLogin={handleLogin} />}
            </Stack.Screen>
            <Stack.Screen name="SignUp" component={SignUpScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  const handleLogout = () => {
    // Call the logout logic and navigate back to the login screen
    navigation.navigate('Login');
    handleLogout(); // Optional: Call a logout function if needed
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vetilance</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PetInformation')}>
          <Text style={styles.buttonText}>Pet Information</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => console.log('Navigate to Track Behaviour')}>
          <Text style={styles.buttonText}>Track Behaviour</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => console.log('Navigate to Search Conditions')}>
          <Text style={styles.buttonText}>Search Conditions</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomButtonsContainer}>
        <TouchableOpacity style={styles.bottomButton} onPress={() => console.log('Call Vet')}>
          <Text style={styles.bottomButtonText}>Call Vet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton} onPress={() => console.log('Email Vet')}>
          <Text style={styles.bottomButtonText}>Email Vet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton} onPress={handleLogout}>
          <Text style={styles.bottomButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#3f51b5',
  },
  buttonsContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#3f51b5',
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 24,
    width: '100%',
    height: '25%',
    alignItems: 'center',
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 'auto',
    width: '100%',
  },
  bottomButton: {
    flex: 1,
    backgroundColor: '#f44336',
    borderRadius: 8,
    paddingVertical: 16,
    marginRight: 8,
    alignItems: 'center',
  },
  bottomButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});