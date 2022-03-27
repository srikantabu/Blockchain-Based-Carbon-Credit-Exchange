import React, { useEffect } from "react";

import MyNav from "../MyNav/MyNav";
import SignIn from "../SignIn/SignIn";

const App = () => {
  useEffect(() => {
    document.title = "BBCCX";
  }, []);
  return (
    <div>
      <MyNav />
      <SignIn></SignIn>
    </div>
  );
};

export default App;
