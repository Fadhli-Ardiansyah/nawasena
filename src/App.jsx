import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style/index.css";
import Utama from "./components/utama/Index";
import HubungiKami from "./components/hubungi_kami";

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Utama />} />
                    <Route path="/hubungiKami" element={<HubungiKami />} />
                </Routes>
            </Router>
        </>
    );
};

export default App;
