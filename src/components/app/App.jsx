import { Tabs, Tab, Card } from "react-bootstrap";

import Login from "../login/Login";
import Signup from "../signup/Signup";

import { UserAuthProvider } from "../../context";

import "./app.css";

function App() {
  return (
    <div className="app">
      <UserAuthProvider>
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
      </UserAuthProvider>
    </div>
  );
}

export default App;
