import React from 'react';
import {Box} from 'atoms/Box';
import {Icon} from 'atoms/Icon';
import {Row} from 'atoms/Row';
import {Touch} from 'atoms/Touch';
import {TextView} from 'atoms/TextView';
import {PressEvent} from 'typings/utils';
import theme from 'styles/theme';
import {color} from '@shopify/restyle';

type LabelIconProps = {
  name?: string;
  onClick?: PressEvent;
};

export const LabelIcon = ({name, onClick}: LabelIconProps) => {
  return (
    <Box mt="m" mb="m" ml="m" mr="m">
      <Touch onPress={onClick}>
        <Row justifyContent="space-between" alignItems="center">
          <Row>
            <Icon name="profile" size={25} color="blue" />

            <TextView ml="xxl" fontSize={20}>
              {name}
            </TextView>
          </Row>

          <Icon name="ic_enter_arrow" color="black" size={15} />
        </Row>
      </Touch>
    </Box>
  );
};
