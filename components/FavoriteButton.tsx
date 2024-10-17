import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../redux/favoritesSlice';
import { RootState } from '../redux/store';

type Props = {
    filmId: string;
};

const FavoriteButton: React.FC<Props> = ({ filmId }) => {
    const dispatch = useDispatch();
    const isFavorite = useSelector((state: RootState) =>
        state.favorites.some((f) => f.id === filmId)
    );

    const handlePress = () => {
        dispatch(toggleFavorite(filmId));
    };

    return (
        <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.text}>{isFavorite ? '❤️' : '🤍'}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        padding: 10,
    },
    text: {
        fontSize: 20,
    },
});

export default FavoriteButton;
