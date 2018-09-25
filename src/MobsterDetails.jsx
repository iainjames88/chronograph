import React from 'react';
import BpkButton from 'bpk-component-button';
import BpkPanel from 'bpk-component-panel';
import TrashIconSm from 'bpk-component-icon/sm/trash';
import TaxiIconSm from 'bpk-component-icon/sm/taxi';
import { withButtonAlignment } from 'bpk-component-icon';

import STYLES from './MobsterDetails.scss';

const c = className => STYLES[className] || 'UNKNOWN';
const AlignedTrashIcon = withButtonAlignment(TrashIconSm);
const AlignedTaxiIcon = withButtonAlignment(TaxiIconSm);

export default (props) => {
  return (
    <li className={c('MobsterDetails__li')}>
      <BpkPanel className={c('MobsterDetails__panel')}>
        <span className={c('MobsterDetails__mobster')}>{props.name}</span>
        <span className={c('MobsterDetails__removeMobster')}>
          <BpkButton
            disabled={props.isDriver}
            onClick={() => props.onClickPromoteToDriver(props.name)}
            className={c('MobsterDetails__button')}
          >
            <AlignedTaxiIcon />
          </BpkButton>
          <BpkButton
            destructive
            onClick={() => props.onClickDeleteMobster(props.name)}
            className={c('MobsterDetails__button')}
            disabled={props.isDriver}
          >
            <AlignedTrashIcon />
          </BpkButton>
        </span>
      </BpkPanel>
    </li>
  );
};
