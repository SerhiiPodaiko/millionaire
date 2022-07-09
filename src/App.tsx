import React, { useState } from "react";
import HomeScreen from "./pages/HomeScreen";
import StartScreen from "./pages/StartScreen";

function App() {

  const [username, setUsername] = useState<string>('');

  return (
    <>
      {
        username ? (
          <HomeScreen />
        ) : (
          <StartScreen setUsername={setUsername} />
        )
      }
    </>
  );
}

export default App;
