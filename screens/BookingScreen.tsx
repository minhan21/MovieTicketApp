import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { bookFilm } from '../redux/bookingsSlice';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    Booking: { film: Film };
};

type BookingScreenRouteProp = RouteProp<RootStackParamList, 'Booking'>;

type BookingScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Booking'>;

type Props = {
    route: BookingScreenRouteProp;
    navigation: BookingScreenNavigationProp;
};

const BookingScreen: React.FC<Props> = ({ route, navigation }) => {
    const { film } = route.params;
    const dispatch = useDispatch();

    const handleBooking = () => {
        dispatch(bookFilm(film));
        navigation.navigate('Films');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{film.title}</Text>
            <Text style={styles.description}>{film.description}</Text>
            <Button title="Book Ticket" onPress={handleBooking} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
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
export default BookingScreen;