import { useState, useEffect } from "react";
import "./App.css";
import SignInPage from "./pages/signIn";
import SignUpPage from "./pages/signUp";

function App() {
  const [currentPage, setCurrentPage] = useState(
    window.location.pathname === '/signin' ? 'signin' : 'signup'
  );

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(
        window.location.pathname === '/signin' ? 'signin' : 'signup'
      );
    };

    window.addEventListener('popstate', handlePopState);
    
    // Listen for custom navigation events
    window.addEventListener('navigate', (e) => {
      const path = e.detail;
      setCurrentPage(path === '/signin' ? 'signin' : 'signup');
      window.history.pushState({}, '', path);
    });

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('navigate', handlePopState);
    };
  }, []);

  return (
    <>
      {currentPage === 'signin' ? <SignInPage /> : <SignUpPage />}
    </>
  );
}

export default App;