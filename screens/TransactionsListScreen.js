import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const transactions = [
  { id: '1', name: 'Starbucks', amount: 12.00, date: '2024-07-01' },
  { id: '2', name: 'Apple Store', amount: 101.00, date: '2024-07-02' },
  { id: '3', name: 'Sephora', amount: 120.00, date: '2024-07-03' },
  { id: '4', name: 'Shoppers Drug Mart', amount: 12.00, date: '2024-07-04' },
  { id: '5', name: 'Pizza Hut', amount: 24.00, date: '2024-07-05' },
  { id: '6', name: 'Cheesecake Factory', amount: 45.00, date: '2024-07-06' },
  { id: '7', name: 'Nike', amount: 250.00, date: '2024-07-07' },
  { id: '8', name: 'Tim Hortons', amount: 7.89, date: '2024-07-08' },
  { id: '9', name: 'Whole Foods', amount: 78.00, date: '2024-07-09' },
  { id: '10', name: 'Cineplex', amount: 42.50, date: '2024-07-10' },
];

const TransactionsListScreen = ({ navigation }) => {  
  
  return (
    <View style={styles.container}>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.item}
            onPress={() => navigation.navigate('TransactionDetail', { transaction: item })}
          >
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.amount}>${item.amount.toFixed(2)}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  amount: {
    fontSize: 16,
    color: '#555',
  },
});

export default TransactionsListScreen;
