'use client';
import React from 'react';


type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <div className='container mx-auto'>{children}</div>
  );
};

export default layout;
