import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import FilmItem from '../../components/FilmItem';

export default function FavoritesScreen() {
    const favorites = useSelector((state: RootState) => state.favorites);

    return (
        <View style={styles.container}>
            <FlatList
                data={favorites}
                renderItem={({ item }) => <FilmItem film={item} />}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
});