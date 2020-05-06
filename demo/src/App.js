import React from 'react';
import { Button } from 'react-lib'

function App() {
  return (
    <Button info onClick={() => {alert("hi")}}>Hi</Button>
  );
}

export default App;
