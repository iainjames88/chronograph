import React from 'react';
import BpkButton from 'bpk-component-button';
import BpkPanel from 'bpk-component-panel';
import { BpkGridRow, BpkGridColumn } from 'bpk-component-grid';
import TrashIconSm from 'bpk-component-icon/sm/trash';
import { withButtonAlignment } from 'bpk-component-icon';

import STYLES from './MobsterDetails.scss';

const c = className => STYLES[className] || 'UNKNOWN';
const AlignedTrashIcon = withButtonAlignment(TrashIconSm);

export default (props) => {
  return (
    <li className={c('MobsterDetails__li')}>
      <BpkPanel>
        <BpkGridRow>
          <BpkGridColumn width={8}>
            {props.mobster}
          </BpkGridColumn>
          <BpkGridColumn width={4}>
            <BpkButton
              onClick={() => props.onClickDeleteMobster(props.mobster)}
              destructive
            >
              <AlignedTrashIcon />
            </BpkButton>
          </BpkGridColumn>
        </BpkGridRow>
      </BpkPanel>
    </li>
  );
};
