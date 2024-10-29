import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "./firebase/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import PrivateRoutes from "./routes/private.routes";
import PublicRoutes from "./routes/public.routes";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
        console.log(user);
      } else {
        setIsAuthenticated(false);
        console.log("No hay usuario");
      }
    })
  }, []);

  return (
    <BrowserRouter>
        {isAuthenticated ? (
          <PrivateRoutes />
        ) : (
          <PublicRoutes />
        )}
    </BrowserRouter>
  );
};

export default App;
