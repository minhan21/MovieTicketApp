import React, { memo } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '../redux/favoritesSlice';
import { RootState } from '../redux/store';
import Button from './common/Button';

type Film = {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
};

type Props = {
    film: Film;
};

const FilmItem: React.FC<Props> = memo(({ film }) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const isBooked = useSelector((state: RootState) =>
        state.bookings.some(booking => booking.id === film.id)
    );
    const isFavorite = useSelector((state: RootState) =>
        state.favorites.some(favorite => favorite.id === film.id)
    );

    const handleBookPress = () => {
        if (!isBooked) {
            router.push({
                pathname: "/booking",
                params: film
            });
        }
    };

    const handleFavoritePress = () => {
        dispatch(toggleFavorite(film));
    };

    return (
        <View style={styles.container}>
            <Image source={{ uri: film.imageUrl }} style={styles.image} />
            <View style={styles.info}>
                <Text testID="film-title" style={styles.title}>{film.title}</Text>
                <Text testID="film-description" style={styles.description} numberOfLines={2}>{film.description}</Text>
                <View style={styles.buttonContainer}>
                    <Button
                        testID="book-button"
                        title={isBooked ? 'Already Seen' : 'Book Ticket'}
                        onPress={handleBookPress}
                        disabled={isBooked}
                        style={styles.button}
                    />
                    <Button
                        testID="favorite-button"
                        title={isFavorite ? '❤️ Favorite' : '🤍 Add to Favorites'}
                        onPress={handleFavoritePress}
                        style={[styles.button, isFavorite && styles.favoriteButton]}
                    />
                </View>
            </View>
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        padding: 10,
    },
    image: {
        width: 100,
        height: 150,
        borderRadius: 5,
    },
    info: {
        flex: 1,
        marginLeft: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        color: '#666',
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        flex: 1,
        backgroundColor: '#007AFF',
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    disabledButton: {
        backgroundColor: '#cccccc',
    },
    favoriteButton: {
        backgroundColor: '#FF69B4',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 12,
    },
});
export default FilmItem;