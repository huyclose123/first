import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'All',
  },
  {
    id: '2',
    title: 'Bike',
  },
  {
    id: '3',
    title: 'Animal',
  },
];

const Item = ({item, onPress, style}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
);

const Header = (onPress) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : 'white';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{backgroundColor}}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        horizontal={true}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  item: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
  },
});

export default Header;
