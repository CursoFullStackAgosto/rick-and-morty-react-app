import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import DefaultPage from "./pages/DefaultPage";
import DetailCharacter from "./pages/DetailCharacter";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="personajes">
          <Route index element={<Characters />} />
          <Route path="info/:characterId" element={<DetailCharacter />} />
        </Route>
        <Route path="lugares" element={<Characters />} />
        <Route path="episodios" element={<Characters />} />

        <Route path="*" element={<DefaultPage />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
