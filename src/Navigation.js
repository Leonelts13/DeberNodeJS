import * as React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Menu from './Componentes/Home/Menu';
import ListComponent from './Componentes/List/List';

const Tab = createMaterialTopTabNavigator();

const Navigation = () => {
    return (

        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#3498db',
                tabBarInactiveTintColor: '#7f8c8d',
                tabBarLabelStyle: { fontWeight: 'bold' },
                tabBarIndicatorStyle: { backgroundColor: '#3498db' },
                tabBarStyle: { backgroundColor: '#ecf0f1' },
            }}
            style={styles.container}
        >
            <Tab.Screen name="Perfil" component={Menu} />
            <Tab.Screen name="Lista" component={ListComponent} />
        </Tab.Navigator>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
});

export default Navigation;
