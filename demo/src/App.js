import React from 'react';
import { DarkThemeProvider, Button } from 'react-lib'

const App = () => {
  return (
    <div className="App">
        <DarkThemeProvider>
          <Button>Hi</Button>
        </DarkThemeProvider>
          Learn React
    </div>
  );
}

export default App;
