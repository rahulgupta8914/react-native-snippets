import React, {useEffect, useState} from 'react';
import {
  FlatList,
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
} from 'react-native';
import {Avatar} from 'react-native-elements';
import RBSheet from 'react-native-raw-bottom-sheet';
import { useDispatch, useSelector } from 'react-redux';
import { selectPeoples, selectPagination, selectIsPeoplesLoading, askPeoples} from './PeopleSlice';


const Item = ({item, onPress, style}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.name}</Text>
    <Avatar
      size="medium"
      rounded
      source={{
        uri:
          'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      }}
    />
  </TouchableOpacity>
);

export default function ShowList() {
  const [selectedUser, setSelectedUser] = useState(null);
  const dispatch = useDispatch();
  const peoples = useSelector(selectPeoples);
  const paginationUrl = useSelector(selectPagination);
  const isLoading = useSelector(selectIsPeoplesLoading);
  const sheetRef = React.useRef(null);


  useEffect(() => {
    fetchData(); // fetch data
    return () => {
      // cleanup
    };
  }, []);

  const renderItem = ({item}) => {
    const backgroundColor = item.url === selectedUser?.url ? '#bababa' : '#ededed';
    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedUser(item);
          sheetRef.current.open()
        }}
        style={{backgroundColor}}
      />
    );
  };

  const fetchData = async () => {
      dispatch(askPeoples(paginationUrl))
  };

//   footer
  const renderFooter = () => {
    return (
      <View style={styles.footer}>
        <TouchableOpacity
            onPress={()=>dispatch(askPeoples(paginationUrl))}
          style={styles.loadMoreBtn}>
          <Text style={styles.btnText}>Load More</Text>
          {isLoading ? (
          <ActivityIndicator color="white" style={{marginLeft: 8}} />
            ) : null} 
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
      <FlatList
        data={peoples}
        renderItem={renderItem}
        keyExtractor={(item) => item.url}
        extraData={selectedUser?.url}
        ListFooterComponent={renderFooter}
      />

      <RBSheet
        ref={sheetRef}
        height={500}
        openDuration={250}
        customStyles={{
          container: {
            justifyContent: 'center',
            // alignItems: 'center',
          },
        }}>
        <View
          style={{
            backgroundColor: 'white',
            padding: 16,
            height: 450,
          }}>
          <Text style={styles.modalText}>{`name: ${selectedUser?.name}`}</Text>
          <Text style={styles.modalText}>{`height: ${selectedUser?.height}`}</Text>
          <Text style={styles.modalText}>{`mass: ${selectedUser?.mass}`}</Text>
          <Text style={styles.modalText}>{`hair color: ${selectedUser?.hair_color  }`}</Text>
          <Text style={styles.modalText}>{`skin color: ${selectedUser?.skin_color}`}</Text>
          <Text style={styles.modalText}>{`eye color: ${selectedUser?.eye_color}`}</Text>
          <Text style={styles.modalText}>{`birth year: ${selectedUser?.birth_year}`}</Text>
          <Text style={styles.modalText}>{`gender: ${selectedUser?.gender}`}</Text>
          <Text style={styles.modalText}>{`number of films: ${selectedUser?.films.length}`}</Text>
          <Text style={styles.modalText}>{`number of species: ${selectedUser?.species.length}`}</Text>
          <Text style={styles.modalText}>{`number of vehicles: ${selectedUser?.vehicles.length}`}</Text>
          <Text style={styles.modalText}>{`number of starships: ${selectedUser?.starships.length}`}</Text>
        </View>
      </RBSheet>
    </>
  );
}

const styles = StyleSheet.create({
    modalText: {fontSize:16, marginVertical: 5},
    item: {
      display: 'flex',
      padding: 20,
      marginVertical: 5,
      marginHorizontal: 8,
      borderRadius: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    title: {
      fontSize: 18,
    },
    footer: {
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    loadMoreBtn: {
      padding: 10,
      backgroundColor: '#292828',
      borderRadius: 4,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    btnText: {
      color: 'white',
      fontSize: 15,
      textAlign: 'center',
    },
  });