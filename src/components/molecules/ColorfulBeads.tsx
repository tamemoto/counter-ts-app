import React, { FC } from 'react';
import { Container, Label, SemanticCOLORS } from 'semantic-ui-react';

const range = (n: number): number[] => {
  return n < 0 ? [] : Array.from(Array(n), (_, i) => i);
};

const colors: SemanticCOLORS[] = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
];

const ColorfulBeads: FC<{ count?: number }> = ({ count = 0 }) => {
  return (
    <Container className="beads-box">
      {range(count).map((n: number) => (
        <Label circular color={colors[n % colors.length]} key={n} />
      ))}
    </Container>
  );
};

export default ColorfulBeads;
