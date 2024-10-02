import {Route, Routes} from "react-router-dom";
import TableList from "./TableList";
import TableDetail from "./TableDetail";
import TableCreateDetail from "./TableDetailCreate";
import {Provider} from "react-redux";
import {store} from "./store";
import TableDetailEdit from "./TableDetailEdit";

export default function App() {
    return (
        <Provider store={store}>
            <Routes>
                <Route path="/" element={<TableList/>}/>
                <Route path="/detail" element={<TableDetail/>}/>
                <Route path="/create" element={<TableCreateDetail/>}/>
                <Route path="/edit" element={<TableDetailEdit/>}/>
            </Routes>
        </Provider>
    )
}
