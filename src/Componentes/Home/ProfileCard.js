import React from "react";
import { View, Text, Image, StyleSheet, Platform, Linking, TouchableWithoutFeedback } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/FontAwesome6";

const telegram = <Icon name={'telegram'} size={40} color={'#0088cc'} />
const twitch = <Icon name={'twitch'} size={40} color={'#6441a5'} />
const pinterest = <Icon name={'pinterest'} size={40} color={'#c8232c'} />
const reddit = <Icon name={'reddit'} size={40} color={'#FF5700'} />
const discord = <Icon2 name={'discord'} size={40} color={'#7289da'} />
const ProfileCard = () => {
    const user = {
        coverPhoto: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        avatar: "https://get.wallhere.com/photo/Assassin's-Creed-Assassin's-Creed-Valhalla-viking-warrior-1914269.jpg",
        name: "Leonel Tualombo"
    }
    return (
        <View style={styles.container}>
            <Image source={{ uri: user.coverPhoto }} style={styles.backgroundImage} resizeMode="cover" />
            <View style={styles.overlay}>
                <View style={styles.centeredBox}>
                    <View style={styles.avatarContainer}>
                        <Image source={{ uri: user.avatar }} style={styles.avatar} />
                        <Text style={styles.name}>
                            {user.name}
                        </Text>
                        <Text style={styles.nameText}>
                            Desarrollador
                        </Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableWithoutFeedback onPress={() => Linking.openURL('https://t.me/')}>
                            {telegram}
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => Linking.openURL('https://www.twitch.tv/')}>
                            {twitch}
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => Linking.openURL('https://www.pinterest.es/')}>
                            {pinterest}
                        </TouchableWithoutFeedback>
                    </View>
                    
                    <View style={styles.buttonContainer2}>
                        <TouchableWithoutFeedback onPress={() => Linking.openURL('https://www.reddit.com/')}>
                            {reddit}
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => Linking.openURL('https://discord.com/')}>
                            {discord}
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: { //Usamos para establecer la imagen de fondo
        flex: 1,
        width: '100%',
        height: '100%',
        position: 'absolute',//para que cubra toda la pantalla
    },
    overlay: { //ponemos una capa semi oscura encima de la imagen de fondo
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Un fondo oscuro para que la imagen no sea demasiado brillante
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    centeredBox: { //el cuadro que contrendra el ProfileCard del usuario
        width: '75%',
        height: '75%',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        overflow: 'hidden',
        borderColor: 'rgba(192, 192, 192, 0.8)',
        borderWidth: 10,

    },
    avatarContainer: {
        marginTop: -40,//alineamos la imagen con el borde superior
        width: '100%',
        height: '75%',
        alignItems: 'center',

    },
    avatar: { //para poner la foto del avatar
        width: '100%',
        height: '75%',
        borderRadius: 150,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        //borderBottomLeftRadius: 0,
        //borderBottomRightRadius: 0,
    },
    name: {
        fontSize: 30,
        marginTop: 10,
        color: 'black', // Cambia al color que desees
        fontWeight: 'bold', //  ajustar el peso de la fuente
        fontStyle: 'italic', //  establecer la cursiva si lo deseas

    },
    nameText: {
        fontSize: 20,
        marginTop: 10,
        color: 'black', // Cambia al color que desees

    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 20,
        width: '75%',
        justifyContent: 'space-between'
    },
    buttonContainer2: {
        flexDirection: 'row',
        marginTop: 20,
        width: '40%',
        justifyContent: 'space-between'
    },
    iconText: {
        marginTop: 5,
        fontSize: 12,
    },
    iconContainer: {
        alignItems: 'center',
    }
});
export default ProfileCard