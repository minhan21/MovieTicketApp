import React from 'react';
import { View, Text, StyleSheet, Button, Image, ScrollView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useDispatch } from 'react-redux';
import { bookFilm } from '../redux/bookingsSlice';

export default function BookingScreen() {
    const params = useLocalSearchParams();
    const dispatch = useDispatch();
    const router = useRouter();

    const film = {
        id: params.id as string,
        title: params.title as string,
        description: params.description as string,
        imageUrl: params.imageUrl as string
    };

    const handleBooking = () => {
        dispatch(bookFilm(film));
        router.push('/(tabs)/bookings');
    };

    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: film.imageUrl }} style={styles.coverImage} />
            <View style={styles.content}>
                <Text style={styles.title}>{film.title}</Text>
                <Text style={styles.description}>{film.description}</Text>
                <Button title="Book Ticket" onPress={handleBooking} />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    coverImage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
    content: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        marginBottom: 20,
    },
});