import React from 'react';
import { Stack } from 'styled-system/jsx'

import './Example.css';


export type ExampleProps = {
  text?: String;
};

export function Example(props: ExampleProps) {
  return (
    <Stack
      bg="red"
      p="100px"
    >
     Testing
    </Stack>
  );
}
