import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

type Props = {
    filmId: string;
    onPress: () => void;
};

const BookButton: React.FC<Props> = ({ filmId, onPress }) => {
    const isBooked = useSelector((state: RootState) =>
        state.bookings.some((b) => b.id === filmId)
    );

    return (
        <TouchableOpacity
            style={[styles.button, isBooked && styles.disabledButton]}
            onPress={onPress}
            disabled={isBooked}
        >
            <Text style={styles.text}>{isBooked ? 'Already Booked' : 'Book Ticket'}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#007AFF',
        padding: 10,
        borderRadius: 5,
    },
    disabledButton: {
        backgroundColor: '#ccc',
    },
    text: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default BookButton;