import React from 'react';
import MobsterDetails from './MobsterDetails';

export default (props) => {
  return props.mobsters.map((mobster) => {
    return (
      <MobsterDetails
        key={mobster.name}
        name={mobster.name}
        isDriver={mobster.isDriver}
        isNavigator={mobster.isNavigator}
        onClickDeleteMobster={props.onClickDeleteMobster}
        onClickPromoteToDriver={props.onClickPromoteToDriver}
      />
    );
  });
};
