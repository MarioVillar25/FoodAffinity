import React from "react";
import "./App.css";
import { AppRoutes } from "./Routes/AppRoutes";
import { FoodProvider } from "./Context/FoodProvider";

function App() {
  return (
    <FoodProvider>
      <AppRoutes />
    </FoodProvider>
  );
}

export default App;
