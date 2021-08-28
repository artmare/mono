import React, { useState, useEffect, FC } from 'react';

export interface TextProps {
  value: string,
}

const Text: FC<TextProps> = ({ value }) => {
  return (
    <p>
      {value}
    </p>
  )
};

export { Text };