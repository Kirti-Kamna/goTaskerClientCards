import React, {useEffect, useState, useCallback} from 'react';
import {FlatList} from 'react-native';
import {Box} from 'atoms/Box';
import {Text} from 'atoms/Text';
import {LabelIcon} from 'molecules/LabelIcon';
import {Divider} from 'atoms/Divider';
import {navigate} from 'services/NavigationService';
import {TextView} from 'atoms/TextView';

import Data from 'screens/Main/ActiveJobScreens/organisms/data';
import {api} from 'utils/api/api';

export const ClientScreen = () => {
  useEffect(() => {
    getClients();
  }, []);

  const getClients = async () => {
    await api
      .get(
        `mobile/clients?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTI0fQ.gKegWr8Dz6DhztRfAgWeQGa1SRYKm4AwGt1gEQN9Tqo&active_job=true`,
      )
      .then(async res => {
        if (res.data) {
          console.log('api is up and running', res);
        } else {
          console.log('api is not working', res);
        }
      })
      .catch(e => {
        console.log('this is the error', e);
      });
  };

  // const [selectedId, setSelectedId] = useState(null);
  const renderItem = ({item}) => {
    // console.log('item ', item);

    return (
      <Box>
        <LabelIcon name={item.title} onClick={() => navigate('ClientScreen')} />
      </Box>
      // <Item
      //   item={item}
      //   itemId={() => {
      //     setSelectedId(item.id);
      //     console.log('Item id is:', selectedId);
      //   }}
      // />
    );
  };

  return (
    <Box flex={1}>
      <Box mt="l" alignItems="center">
        <TextView fontSize={18}> Search Box will come here</TextView>
      </Box>
      <Box mt="m">
        <Text fontSize={18} ml="m">
          Following is the list of clients
        </Text>
      </Box>
      <Box mt="l">
        <FlatList
          data={Data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={Divider}
          // extraData={selectedId}
        />
      </Box>
    </Box>
  );
};
