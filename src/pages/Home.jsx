import { Button } from "react-bootstrap";
import { useUserAuth } from "../context";

const Home = () => {
  const { user, logout } = useUserAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="home">
      <div>home page</div>
      <div>{user.email}</div>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default Home;
