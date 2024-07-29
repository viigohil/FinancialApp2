import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';

const App = (): React.JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#333' : '#fff', // Customize these colors as needed
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
      >
        <View
          style={{
            backgroundColor: isDarkMode ? '#000' : '#fff',
          }}
        >
          <Text style={styles.title}>Step One</Text>
          <Text style={styles.description}>
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this screen and then come back to see your edits.
          </Text>
          {/* Add more components or content as needed */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '600',
    margin: 16,
  },
  description: {
    fontSize: 18,
    fontWeight: '400',
    margin: 16,
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
