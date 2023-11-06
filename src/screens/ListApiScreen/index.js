import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ApiHelper} from '../../../helpers';
import {kApiTodos} from '../../../config/WebServices';
import styles from '../styles';

const ListApiScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    requestApi();
  }, []);

  const requestApi = async () => {
    const response = await ApiHelper.get(kApiTodos);

    setData(response);
  };

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item, index}) => {
          return (
            <View style={{margin: 10, backgroundColor: 'skyblue'}}>
              <Text>{item.title}</Text>
              <Text>{item.id}</Text>
              <Text>{item.userId}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ListApiScreen;
