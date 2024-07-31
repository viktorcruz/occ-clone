import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AuthProvider from "./context/AuthContext";
import AppConntent from "./AppConntent";

const App = () => {

  return (
    <AuthProvider>
      <Router>
        <AppConntent />
      </Router>
    </AuthProvider>
  )
}

export default App