import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Utama from "./components/utama/Index";
import "./style/index.css";

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Utama />} />
                </Routes>
            </Router>
        </>
    );
};

export default App;
