import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ExploreScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Ionicons name="code-slash" size={100} color="#808080" style={styles.headerImage} />
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Explore</Text>
      </View>

      <Text style={styles.description}>This app includes example code to help you get started.</Text>

      <ExploreItem title="File-based routing">
        <Text>This app has two screens: app/(tabs)/index.tsx and app/(tabs)/explore.tsx</Text>
        <Text>The layout file in app/(tabs)/_layout.tsx sets up the tab navigator.</Text>
      </ExploreItem>

      <ExploreItem title="Android, iOS, and web support">
        <Text>You can open this project on Android, iOS, and the web. To open the web version, press w in the terminal running this project.</Text>
      </ExploreItem>

      <ExploreItem title="Images">
        <Text>For static images, you can use the @2x and @3x suffixes to provide files for different screen densities</Text>
        <Image source={require('../../assets/images/react-logo.png')} style={styles.image} />
      </ExploreItem>

      <ExploreItem title="Custom fonts">
        <Text>Open app/_layout.tsx to see how to load custom fonts.</Text>
      </ExploreItem>

      <ExploreItem title="Light and dark mode components">
        <Text>This template has light and dark mode support. The useColorScheme() hook lets you inspect what the user's current color scheme is, and so you can adjust UI colors accordingly.</Text>
      </ExploreItem>

      <ExploreItem title="Animations">
        <Text>This template includes an example of an animated component. The components/HelloWave.tsx component uses the powerful react-native-reanimated library to create a waving hand animation.</Text>
      </ExploreItem>
    </ScrollView>
  );
}

const ExploreItem: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <View style={styles.exploreItem}>
    <Text style={styles.exploreItemTitle}>{title}</Text>
    <View style={styles.exploreItemContent}>
      {children}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: '#D0D0D0',
  },
  headerImage: {
    marginBottom: -50,
  },
  titleContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  exploreItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  exploreItemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  exploreItemContent: {
    gap: 10,
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
});