import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
function App() {
  const [login, setLogin] = useState(true);
  let changeLogin = (login) => {
    setLogin(login);
  };
  return (
    <div className="App">
      {login ? (
        <Login changeLogin={changeLogin} />
      ) : (
        <Signup changeLogin={changeLogin} />
      )}
    </div>
  );
}

export default App;
