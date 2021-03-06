import React from 'react';

import { VisibilityContext } from 'react-horizontal-scrolling-menu';

export default function Card({ itemId, selected, onClick, title }) {
  const visibility = React.useContext(VisibilityContext);

  const visible = visibility.isItemVisible(itemId);

  return (
    <div
      onClick={() => onClick()}
      role='button'
      style={{
        border: '1px solid',
        borderRadius: '5px',
        display: 'inline-block',
        margin: '0 10px',
        width: '160px',
        padding: '5px',
        userSelect: 'none',
      }}
      tabIndex={0}
      className='card'
    >
      <div>
        <div>{title}</div>
        <div style={{ backgroundColor: visible ? 'transparent' : 'gray' }}>
          visible: {JSON.stringify(visible)}
        </div>
        <div>selected: {JSON.stringify(!!selected)}</div>
      </div>
      <div
        style={{
          backgroundColor: selected ? 'green' : 'bisque',
          height: '50px',
        }}
      />
    </div>
  );
}
