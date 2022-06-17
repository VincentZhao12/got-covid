import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { AuthProvider } from './contexts/AuthContext';
import Home from './pages/Home';
import GotCovid from './pages/GotCovid';
import Login from './pages/Login';

export default function App() {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <AuthProvider>
                <NativeBaseProvider>
                    <Stack.Navigator>
                        <Stack.Screen name="Home" component={Home} />
                        <Stack.Screen
                            name="GotCovid"
                            component={GotCovid}
                            options={{
                                headerRight: () => (
                                    <Button
                                        title="I tested negative!"
                                        color="#22d3ee"
                                        //style={{margin: 20}}
                                    />
                                ),
                            }}
                        />
                        <Stack.Screen name="Login" component={Login} />
                    </Stack.Navigator>
                </NativeBaseProvider>
            </AuthProvider>
        </NavigationContainer>
    );
}
