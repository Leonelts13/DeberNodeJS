import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const Task = ({ task }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: task.urls.regular }} style={styles.image} />
            </View>
            <Text style={styles.description}>{task.alt_description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F5',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
        width: '100%',
        alignItems: 'center',
    },
    imageContainer: {
        borderRadius: 50,
        overflow: 'hidden',
        marginBottom: 10,
    },
    image: {
        width: 100,
        height: 100,
        aspectRatio: 1, // Mantiene la relación de aspecto
    },
    description: {
        fontSize: 16,
        color: '#333333',
    },
});

export default Task;
