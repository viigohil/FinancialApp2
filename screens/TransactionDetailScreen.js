import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TransactionDetailScreen = ({ route }) => {
  const { transaction } = route.params;
  return (
    <View style={styles.container}>
       <Text style={styles.label}>Name:</Text>
       <Text style={styles.value}>{transaction.name}</Text>
       <Text style={styles.label}>Amount:</Text>
       <Text style={styles.value}>${transaction.amount.toFixed(2)}</Text>
       <Text style={styles.label}>Date:</Text>
       <Text style={styles.value}>{transaction.date}</Text>
     </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#65bfff',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 16,
  },
  value: {
    fontSize: 16,
    marginTop: 8,
  },
});

export default TransactionDetailScreen;
