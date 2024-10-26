import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import DefaultPage from "./pages/DefaultPage";
import DetailCharacter from "./pages/DetailCharacter";
import Login from "./pages/Login";

const App = () => {
  const isAuthenticated = true;

  return (
    <BrowserRouter>
      <Routes>
        {isAuthenticated && (
          <>
            <Route path="/" element={<Home />} />
            <Route path="personajes">
              <Route index element={<Characters />} />
              <Route path="info/:characterId" element={<DetailCharacter />} />
            </Route>
            <Route path="lugares" element={<Characters />} />
            <Route path="episodios" element={<Characters />} />
            <Route path="*" element={<DefaultPage />} />
          </>
        )}
          <Route path="*" element={<Login />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
