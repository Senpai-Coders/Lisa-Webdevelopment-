
import AppRoutes from "./Routes/Routers"
import React, { Suspense } from "react";
import "./Assets/Styles/_Fonts.scss"

function App() {
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <AppRoutes />
    </Suspense>
  );
}
/* 

*/


export default App;
