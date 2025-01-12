import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { useProvider } from "./component/PostProvider";
import Dashboard from "./pages/Dashboard";

function App() {
  const { dispatch } = useProvider();

  useEffect(() => {
    const handleResize = () => {
      // Dispatch the action with the new screen size condition
      dispatch({ type: "responsiveness", payload: window.innerWidth < 900 });
    };

    // Initial check on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch]); // Dependency array includes `dispatch`

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
