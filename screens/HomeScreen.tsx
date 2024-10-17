import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import FilmList from '../components/FilmList';
import { RootState } from '../redux/store';

type HomeScreenProps = {
    route: { params?: { tabIndex?: number } };
};

const HomeScreen: React.FC<HomeScreenProps> = ({ route }) => {
    const { tabIndex = 0 } = route.params || {};
    const films = useSelector((state: RootState) => state.films);
    const favorites = useSelector((state: RootState) => state.favorites);
    const bookings = useSelector((state: RootState) => state.bookings);

    let data = films;
    if (tabIndex === 1) data = favorites;
    if (tabIndex === 2) data = bookings;

    return (
        <View style={styles.container}>
            <FilmList films={data} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default HomeScreen;