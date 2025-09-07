import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import BackupRecuperacao from "./pages/BackupRecuperacao.jsx";
import UsoAceitavel from "./pages/UsoAceitavel.jsx";
import SegurancaFisicaAmbiental from "./pages/SegurancaFisicaAmbiental.jsx";
import PaginaNaoEncontrada from "./pages/PaginaNaoEncontrada.jsx";
import AppLayout from "./ui/AppLayout.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="backup-recuperacao" element={<BackupRecuperacao />} />
          <Route path="uso-aceitavel" element={<UsoAceitavel />} />
          <Route
            path="seguranca-fisica-ambiental"
            element={<SegurancaFisicaAmbiental />}
          />
        </Route>
        <Route path="*" element={<PaginaNaoEncontrada />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
