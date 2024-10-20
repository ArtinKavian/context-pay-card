import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Addcard from "./components/Addcard";
import Transaction from "./components/Transaction";
import History from "./components/History";
import { Provider } from "./components/Context";

function App() {
  return (
    <div className="App">
      
        <Router>
          <nav className="w-11/12 p-4 flex  justify-between h-[40px]  font-bold  mx-auto mt-5 bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <Link rel="stylesheet" to={"/addCard"}>
              AddCard
            </Link>
            <Link rel="stylesheet" to={"/transaction"}>
              Transaction
            </Link>
            <Link rel="stylesheet" to={"/history"}>
              history
            </Link>
          </nav>
          <Routes>
            <Route path="/addCard" element={<Addcard />} />
            <Route path="/transaction" element={<Transaction />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </Router>
      
    </div>
  );
}

export default App;
