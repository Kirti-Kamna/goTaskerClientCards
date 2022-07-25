import React from 'react';
import {TextView} from 'atoms/TextView';
import {Box} from 'atoms/Box';
import {Card} from 'atoms/Card';
import {Row} from 'atoms/Row';
import {Icon} from 'atoms/Icon';

type ClientCardsProps = {
  name?: string;
};

export const ClientCards = ({name}) => {
  return (
    <Box mt="xxxl" flex={1}>
      <Box m="m" mb="-xxl">
        <Card variant="medium" height={150} width="100%" alignSelf="center">
          <Row justifyContent="space-between" bg="aliceBlue">
            <Box m="m">
              <TextView>Project Number</TextView>
              <Row alignItems="center" justifyContent="space-between" mt="s">
                <Icon name="profile" size={25} color="black" />

                <TextView>{name}</TextView>
              </Row>
            </Box>
            <Box m="m" justifyContent="center">
              <Icon name="ic_enter_arrow" size={15} />
              <Row>
                <Icon name="calendar" size={15} />
                <TextView>date</TextView>
              </Row>
            </Box>
          </Row>

          <Box m="m">
            <TextView text="app.name"> </TextView>
            <TextView>My new Project</TextView>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};
