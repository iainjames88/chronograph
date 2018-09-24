import React from 'react';
import MobsterDetails from './MobsterDetails';

export default (props) => {
  return props.mobsters.map(mobster => <MobsterDetails key={mobster} mobster={mobster} onClickDeleteMobster={props.onClickDeleteMobster} />);
};
