import { Route, Routes } from "react-router-dom";

import { Tabs, Tab, Card } from "react-bootstrap";

import Login from "../login/Login";
import Signup from "../signup/Signup";
import Home from "../../pages/Home";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import { UserAuthProvider } from "../../context";

import "./app.css";

function App() {
  return (
    <UserAuthProvider>
      <Routes>
        <Route
          index
          element={
            <div className="app">
              <Card>
                <Card.Body>
                  <Tabs defaultActiveKey="login">
                    <Tab eventKey="login" title="Login">
                      <Login />
                    </Tab>
                    <Tab eventKey="signup" title="Signup">
                      <Signup />
                    </Tab>
                  </Tabs>
                </Card.Body>
              </Card>
            </div>
          }
        />
        <Route
          path="home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </UserAuthProvider>
  );
}

export default App;
