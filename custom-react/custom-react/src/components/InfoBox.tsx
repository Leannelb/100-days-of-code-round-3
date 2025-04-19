import React, { ReactNode } from 'react';

type InfoBoxProps = {
  mode: 'hint' | 'warning';
  children: ReactNode;
};
export const InfoBox = ({ mode, children }: InfoBoxProps) => {
  if (mode === 'hint') {
    return (
      <aside>
        <h2>Warning</h2>
        <p>{children}</p>
      </aside>
    );
  }

  return (
    <aside className='infobox infobox-warning warning--low'>
        <h2>Warning</h2>
        <p>{children}</p>
    </aside>
  )
};
