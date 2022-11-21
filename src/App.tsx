import React from "react";
import ContextProvider from "./context/provider";
import AppRoutes from "./routes";

function App() {
  return (
    <ContextProvider>
      <AppRoutes />
    </ContextProvider>
  );
}

export default App;
