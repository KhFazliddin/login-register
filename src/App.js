import "./App.css";
import { useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { initialState, reducer } from "./reducer/reducer";
import { StateContext } from "./Context/context";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("APP");
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </StateContext.Provider>
  );
}

export default App;
