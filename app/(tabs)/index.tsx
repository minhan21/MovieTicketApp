import React, { useCallback, useState } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import FilmItem from '../../components/FilmItem';
import { useWindowDimensions } from 'react-native';

export default function FilmsScreen() {
  const films = useSelector((state: RootState) => state.films);
  const { width } = useWindowDimensions();
  const [fps, setFps] = useState(60);

  const renderItem = useCallback(({ item }) => (
    <FilmItem film={item} />
  ), []);

  const keyExtractor = useCallback((item) => item.id, []);

  const getItemLayout = useCallback((data, index) => ({
    length: 170, // Approximate height of FilmItem
    offset: 170 * index,
    index,
  }), []);

  const onScrollBeginDrag = useCallback(() => {
    // Start monitoring FPS
    let lastFrameTime = Date.now();
    let frameCount = 0;

    const intervalId = setInterval(() => {
      const now = Date.now();
      const delta = now - lastFrameTime;
      frameCount++;

      if (delta >= 1000) {
        setFps(Math.round((frameCount * 1000) / delta));
        frameCount = 0;
        lastFrameTime = now;
      }
    }, 1000 / 60); // Check every frame at 60fps

    // Stop monitoring after 5 seconds
    setTimeout(() => clearInterval(intervalId), 5000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.fpsCounter}>FPS: {fps}</Text>
      <FlatList
        data={films}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        getItemLayout={getItemLayout}
        removeClippedSubviews={true}
        maxToRenderPerBatch={10}
        updateCellsBatchingPeriod={50}
        windowSize={21}
        initialNumToRender={10}
        onScrollBeginDrag={onScrollBeginDrag}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fpsCounter: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(0,0,0,0.7)',
    color: 'white',
    padding: 5,
    zIndex: 1000,
  },
});