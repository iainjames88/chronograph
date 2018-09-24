import React from 'react';
import BpkButton from 'bpk-component-button';
import BpkPanel from 'bpk-component-panel';
import TrashIconSm from 'bpk-component-icon/sm/trash';
import { withButtonAlignment } from 'bpk-component-icon';

import STYLES from './MobsterDetails.scss';

const c = className => STYLES[className] || 'UNKNOWN';
const AlignedTrashIcon = withButtonAlignment(TrashIconSm);

export default (props) => {
  return (
    <li className={c('MobsterDetails__li')}>
      <BpkPanel className={c('MobsterDetails__panel')}>
        <span className={c('MobsterDetails__mobster')}>{props.mobster}</span>
        <span className={c('MobsterDetails__removeMobster')}>
          <BpkButton
            onClick={() => props.onClickDeleteMobster(props.mobster)}
            destructive
          >
            <AlignedTrashIcon />
          </BpkButton>
        </span>
      </BpkPanel>
    </li>
  );
};
