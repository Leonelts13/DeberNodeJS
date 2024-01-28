import React from "react";
import { View, StyleSheet, Image, Text, Linking, Button } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const instagram = <Icon name={'instagram'} size={30} color={'#3498db'} />;
const portafolio_url = <Icon name={'globe'} size={30} color={'#3498db'} />;

const Profile = ({ task, closeProfile }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: task.urls.raw }} style={styles.image} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.userName} onPress={() => Linking.openURL(task.user.portfolio_url)}>
                    {task.user.name}
                </Text>
                <View style={styles.socialIcons}>
                    <Text style={styles.icon} onPress={() => Linking.openURL(task.user.social.instagram_url)}>
                        {instagram}
                    </Text>
                    <Text style={styles.icon} onPress={() => Linking.openURL(task.user.social.portfolio_url)}>
                        {portafolio_url}
                    </Text>
                </View>
            </View>
            <View style={styles.kpiContainer}>
                <Image source={require('../../../assets/img.png')} style={styles.kpiImage} />
            </View>
            <Button title={'Cerrar'} onPress={closeProfile} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
        padding: 20,
    },
    imageContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
        borderRadius: 10,
        marginBottom: 20,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 75,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    userName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#3498db',
        marginTop: 10,
    },
    socialIcons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '80%',
        marginTop: 10,
    },
    icon: {
        color: '#3498db',
    },
    kpiContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    kpiImage: {
        width: 30,
        height: 30,
    },
});

export default Profile;
