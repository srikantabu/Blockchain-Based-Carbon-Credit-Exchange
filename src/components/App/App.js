import React, { useEffect } from "react";
import MyNav from "../MyNav/MyNav";

const App = () => {
  useEffect(() => {
    document.title = "BBCCX";
  }, []);
  return <MyNav />;
};

export default App;
