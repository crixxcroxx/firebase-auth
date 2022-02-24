import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Container, Form } from "react-bootstrap";

import { useUserAuth } from "../../context";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("second");

  const { login, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleGoogleSignin = async (e) => {
    e.preventDefault();

    try {
      await googleSignIn();
      navigate("./home");
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(email, password);
      navigate("./home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <br />
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <br />
        <Button variant="primary" type="submit">
          Submit
        </Button>

        <hr />
        <Button variant="primary" onClick={handleGoogleSignin}>
          Signin with Google
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
