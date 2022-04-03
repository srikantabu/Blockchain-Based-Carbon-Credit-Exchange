import React, { useEffect } from "react";
import MyNav from "../MyNav/MyNav";

const App = () => {
  useEffect(() => {
    document.title = "BBCCX";
  }, []);
  return <MyNav />;
  // return (
  //   <div>
  //     <Foorter></Foorter>
  //     <MySignIN></MySignIN>
      // <MySignIN></MySignIN>
  //   </div>

  // );
};

export default App;
