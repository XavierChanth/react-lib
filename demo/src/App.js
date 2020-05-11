import React from 'react';
import { ButtonBar, Button } from 'react-lib'

function App() {
  return (
    <ButtonBar>
      <Button success onClick={() => {alert("hi")}}>Submit</Button>
      <Button warning onClick={() => {alert("hi")}}>Return</Button>
      <Button danger onClick={() => {alert("hi")}}>Cancel</Button>
    </ButtonBar>
  );
}

export default App;
