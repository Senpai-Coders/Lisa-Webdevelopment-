
import AppRoutes from "./Routes/Routers"
import React, { Suspense } from "react";
import "./Assets/Styles/_Classes.scss";
import "./_App.scss"
import Loading_Screen from "./components/Global_Component/Loading_screen/Loading_screen"

function App() {
  return (
    <Suspense fallback={<Loading_Screen />}>
      <AppRoutes />
    </Suspense>
  );
}
/* 

*/


export default App;
