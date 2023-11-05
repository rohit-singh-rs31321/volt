import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

/* =============== Styles ================= */
import "./reset.scss";

/* ================ Custom Components =============== */
import Navbar from "./components/Navbar/Navbar";
import Pages from "./pages/Pages";

const App = () => {
    return (
        <div className="App">
            <Toaster position="top-center" reverseOrder={true} />
            <BrowserRouter>
                <Navbar />
                <Pages />
            </BrowserRouter>
        </div>
    );
};

export default App;
