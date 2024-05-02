import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Fight from "./pages/Fight";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Fight />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
