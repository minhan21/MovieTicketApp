import React from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import FilmItem from './FilmItem';

type Film = {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
};

type Props = {
    films: Film[];
};

const FilmList: React.FC<Props> = ({ films }) => {
    const renderItem = ({ item }: ListRenderItemInfo<Film>) => <FilmItem film={item} />;

    return (
        <FlatList
            data={films}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            initialNumToRender={10}
            maxToRenderPerBatch={20}
            windowSize={21}
        />
    );
};

export default FilmList;