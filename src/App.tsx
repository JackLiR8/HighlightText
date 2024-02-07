import { FC, useState } from 'react';

import './style.css';
import HighlightNumber from './components/HighlightNumber';
import HighlightText from './components/HighlightText';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div className='container'>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16}}>
        <HighlightNumber content={'距过年还有1天，距离开工还有30天'} onTargetClick={({index, target}) => {
            if (index === 0) {
              alert(`距过年还有${target}天`)
            } else if (index === 1) {
              alert(`距开工还有${target}天`)
            }
          }} 
        />

        <HighlightText
          content={'操作成功，请前往 [异步任务列表] 查看结果！'}
          pattern={/\[.+\]+/g}
          onTargetClick={() => {
            alert('前往异步任务列表')
          }}
        />

      </div>
    </div>
  );
};
