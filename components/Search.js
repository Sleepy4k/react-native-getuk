import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet } from 'react-native';

const SearchFeature = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  const data = [
    { id: 1, name: 'Tempat A' },
    { id: 2, name: 'Tempat B' },
    // ... tambahkan data lainnya sesuai kebutuhan
  ];

  const handleSearch = (text) => {
    const results = data.filter(item => item.name.toLowerCase().includes(text.toLowerCase()));
    setSearchResults(results);
    setSearchText(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={isFocused ? styles.inputFocused : styles.input}
        placeholder="Cari tempat atau produk"
        value={searchText}
        onChangeText={handleSearch}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {searchResults.length > 0 ? (
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Text style={styles.resultItem}>{item.name}</Text>
          )}
        />
      ) : (
        <Text style={styles.noResultsText}>Tidak ada hasil ditemukan</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  inputFocused: {
    height: 40,
    borderColor: 'blue', // warna border saat fokus
    borderWidth: 2,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  resultItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  noResultsText: {
    marginTop: 10,
    textAlign: 'center',
  },
});

export default SearchFeature;
