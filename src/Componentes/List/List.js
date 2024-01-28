import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, StatusBar, Modal, Alert, Dimensions, ImageBackground } from "react-native";
import Task from "./Task";
import Profile from "./Profile";
import axios from "axios";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ListComponent = () => {
    const [taskItems, setTaskItems] = useState([]);
    const [showProfile, setShowProfile] = useState(false);
    const [task, setTask] = useState();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://api.unsplash.com/photos/', {
                params: {
                    client_id: 'tmXX2qlmRsZbsX7eXhvWsY1wfSpKeQj6fU9EQN0fkAw'
                }
            });
            const jsonData = response.data;
            setTaskItems(jsonData);
            //console.log(jsonData);
        } catch (error) {
            console.error('error', error);
        }
    }

    const Item = ({ task, i }) => {
        return (
            <TouchableOpacity style={styles.perItem} key={i} onPress={() => {
                getProfile(task);
            }}>
                <Task task={task} />
            </TouchableOpacity>
        );
    }

    const getProfile = (task) => {
        setShowProfile(true);
        setTask(task);
    }

    const closeProfile = () => {
        setShowProfile(!showProfile);
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={{ uri: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} style={styles.backgroundImage}>
                {taskItems &&
                    <View style={styles.taskWrapper}>
                        <Text style={styles.sectionTitle}>Lista de Axios</Text>
                        <View style={styles.items}>
                            <FlatList
                                data={taskItems}
                                renderItem={({ item, i }) => (
                                    <Item task={item} i={i} />
                                )}
                                keyExtractor={(item) => item.id.toString()}
                            />
                        </View>
                    </View>
                }
                <Modal
                    transparent={true}
                    animationType={'slide'}
                    visible={showProfile}
                    onRequestClose={() => {
                        Alert.alert('Modal ha sido cerrado');
                        setShowProfile(!showProfile);
                    }}
                >
                    <View style={styles.centerView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>
                                <Profile task={task} closeProfile={closeProfile} />
                            </Text>
                        </View>
                    </View>
                </Modal>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    taskWrapper: {
        paddingTop: 40,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        //marginVertical: 10,
        color: 'black',
    },
    items: {
        width: '100%',
        alignItems: 'center',
    },
    perItem: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        width: '100%',
        paddingVertical: 15,
        marginVertical: 10,
        alignItems: 'center',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 5,
    },
    centerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        //borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        width: '70%',
        height: '65%',
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        width: '100%',
        color: '#333',
    },
});

export default ListComponent;
