
import AppRoutes from "./Routes/Routers"
import React, { Suspense } from "react";
function App() {
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <AppRoutes />
    </Suspense>
  );
}

export default App;
