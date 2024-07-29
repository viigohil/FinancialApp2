import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Dummy data for transactions
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

const SummaryScreen = () => {
  const totalExpenses = transactions.reduce((acc, item) => acc + item.amount, 0);
  const transactionsCount = transactions.length;
  const highestSpending = Math.max(...transactions.map(t => t.amount));
  const lowestSpending = Math.min(...transactions.map(t => t.amount));
  const highestSpendingItem = transactions.find(t => t.amount === highestSpending);
  const lowestSpendingItem = transactions.find(t => t.amount === lowestSpending);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Total Transactions:</Text>
      <Text style={styles.value}>{transactionsCount}</Text>
      <Text style={styles.label}>Total Expenses:</Text>
      <Text style={styles.value}>${totalExpenses.toFixed(2)}</Text>
      <Text style={styles.label}>Highest Spending:</Text>
      <Text style={styles.value}>{highestSpendingItem.name} ${highestSpendingItem.amount.toFixed(2)}</Text>
      <Text style={styles.label}>Lowest Spending:</Text>
      <Text style={styles.value}>{lowestSpendingItem.name} ${lowestSpendingItem.amount.toFixed(2)}</Text>
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

export default SummaryScreen;
