import React, { useState } from 'react';
import { Pane, Paragraph, Tab, Tablist } from 'evergreen-ui';

function Header({ tabs }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Pane clearfix>
      <Tablist textAlign={'center'} marginBottom={16}>
        {tabs.map((tab, index) => (
          <Tab
            key={tab}
            id={tab}
            onSelect={() => setSelectedIndex(index)}
            isSelected={index === selectedIndex}
            aria-controls={`panel-${tab}`}
          >
            {tab}
          </Tab>
        ))}
      </Tablist>
      <Pane padding={16} background='tint1' flex='1'>
        {tabs.map((tab, index) => (
          <Pane
            key={tab}
            id={`panel-${tab}`}
            role='tabpanel'
            aria-labelledby={tab}
            aria-hidden={index !== selectedIndex}
            display={index === selectedIndex ? 'block' : 'none'}
          >
            <Paragraph>>> {tab}</Paragraph>
          </Pane>
        ))}
      </Pane>
    </Pane>
  );
}

export default Header;
