import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfileCard from './src/Componentes/Home/ProfileCard';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (

    <NavigationContainer>
      <ProfileCard/>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
