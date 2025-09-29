import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// React Native ka built-in Picker (iOS/Android):
import { Picker } from '@react-native-picker/picker';

const Academies = ({ navigation }) => {
  const [selectedState, setSelectedState] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.containerHeader}>
        <Icon
          name="arrow-left"
          size={25}
          color="white"
          onPress={() => navigation.goBack()}
        />

        <TouchableOpacity>
          <Image
            source={{ uri: 'https://listwr.com/SMxHpI' }}
            style={styles.imageIcon}
          />
        </TouchableOpacity>

        <View style={styles.icons}>
          <Icon name="magnify" size={30} color="white" />
          <Icon name="bell-outline" size={25} color="white" />
        </View>
      </View>

      <Text style={styles.header}>Academies</Text>

      {/* Filter area */}
      <View style={styles.filterRow}>
        <TextInput
          placeholder="Search by Name"
          placeholderTextColor="#999"
          style={[styles.input, { flex: 1, marginRight: 8 }]}
        />
        <TextInput
          placeholder="Select City"
          placeholderTextColor="#999"
          style={[styles.input, { flex: 1, marginLeft: 8 }]}
        />
      </View>

      <View style={styles.filterRow}>
        <View
          style={[
            styles.input,
            { flex: 1, marginRight: 8, paddingVertical: 0 },
          ]}
        >
          <Picker
            dropdownIconColor="white"
            style={{ color: 'white', width: '100%' }}
            selectedValue={selectedState}
            onValueChange={itemValue => setSelectedState(itemValue)}
          >
            <Picker.Item label="Select State" value="" />
            <Picker.Item label="Haryana" value="Haryana" />
            <Picker.Item label="Punjab" value="Punjab" />
            {/* aur bhi states */}
          </Picker>
        </View>
        <TouchableOpacity
          style={[styles.applyButton, { flex: 0.5, marginLeft: 8 }]}
        >
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Apply</Text>
        </TouchableOpacity>
      </View>

      {/* List of academies */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 10 }}
      >
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://your-image-url.com' }}
            style={styles.cardImage}
          />
          <View style={styles.stateBadge}>
            <Text style={styles.stateText}>Haryana</Text>
          </View>
          <Text style={styles.cardTitle}>Obra Kabaddi Club</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://your-second-image-url.com' }}
            style={styles.cardImage}
          />
          <View style={[styles.stateBadge, { backgroundColor: '#E65100' }]}>
            <Text style={styles.stateText}>Punjab</Text>
          </View>
          <Text style={styles.cardTitle}>Obra Kabaddi Club</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Academies;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121858', paddingHorizontal: 12 },
  containerHeader: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 15,
    marginBottom: 10,
  },
  imageIcon: {
    height: 45,
    width: 45,
    resizeMode: 'contain',
  },
  icons: {
    flexDirection: 'row',
    gap: 20,
  },
  filterRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#1C2070',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    color: 'white',
  },
  applyButton: {
    backgroundColor: '#FF6F00',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
  },
  card: {
    backgroundColor: '#1C2070',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 15,
    paddingBottom: 10,
  },
  cardImage: {
    width: '100%',
    height: 150,
  },
  stateBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#F57C00',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  stateText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 12,
  },
  cardTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 8,
    marginHorizontal: 10,
  },
});
