import React from 'react';

import { Container } from '@material-ui/core';
import CharacterList from './components/CharacterList';
import Page from './components/Page';

function App() {
  return (
    <div>
      <Container maxWidth='md'>
        <Page />
        <CharacterList />
      </Container>
    </div>
  );
}

export default App;
