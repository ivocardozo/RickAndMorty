import React from 'react';

import { Container } from '@material-ui/core';
import CharacterList from './components/CharacterList';

function App() {
  return (
    <div>
      <Container maxWidth='md'>
        <CharacterList />
      </Container>
    </div>
  );
}

export default App;
