import React from 'react';
import { DarkThemeProvider, Button } from 'react-lib'

function App() {
  return (
    <div>
      <DarkThemeProvider>
        <Button>Hi</Button>
      </DarkThemeProvider>
    </div>
  );
}

export default App;
