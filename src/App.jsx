import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { useProvider } from "./component/PostProvider";
import Dashboard from "./pages/Dashboard";
import { auth } from "./Firebase.js";

function App() {
  const { dispatch } = useProvider();
  const [checkLoginState, setCheckLoginState] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setCheckLoginState(true);
      } else {
        setCheckLoginState(false);
      }
    });

    // Cleanup on component unmount
    return () => unsubscribe();
  }, []); // No need to add `navigate` to dependencies since it doesn't change

  useEffect(() => {
    const handleResize = () => {
      dispatch({ type: "responsiveness", payload: window.innerWidth < 900 });
    };

    handleResize(); // Initial check on mount
    window.addEventListener("resize", handleResize); // Add event listener for window resize

    return () => window.removeEventListener("resize", handleResize); // Cleanup event listener on unmount
  }, [dispatch]); // Only depend on `dispatch`

  return (
    <Routes>
      {/* Default route for login */}
      <Route path="/" element={checkLoginState ? <Dashboard /> : <Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
