import {Box} from 'atoms/Box';
import {TextView} from 'atoms/TextView';
import {Touch} from 'atoms/Touch';
import {ClientCards} from 'molecules/ClientCards';
import React from 'react';
import {FlatList} from 'react-native';
import {navigate} from 'services/NavigationService';
import Data from 'screens/Main/ActiveJobScreens/organisms/data';

export const ActiveServices = () => {
  const renderItem = ({item}) => {
    return (
      <Box>
        <ClientCards name={item.title} />
      </Box>
    );
  };

  return (
    <Box>
      <Box mt="xxl">
        <Touch onPress={() => navigate('ActiveJobScreens')}>
          <TextView>Back</TextView>
        </Touch>
      </Box>
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </Box>
  );
};
