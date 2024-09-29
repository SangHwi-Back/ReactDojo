import {Route, Routes} from "react-router-dom";
import TableList from "./TableList";
import TableDetail from "./TableDetail";
import TableCreateDetail from "./TableDetailCreate";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<TableList/>} />
      <Route path="/detail" element={<TableDetail/>} />
      <Route path="/create" element={<TableCreateDetail/>} />
    </Routes>
  )
}
