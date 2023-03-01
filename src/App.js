
import {BrowserRouter as Router ,Routes, Route} from "react-router-dom";


import  HomePage  from './components/HomePage/HomePage';
import Register from './components/HomePage/Users/Register/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route exact path="/register" element={<Register/>}/>
      </Routes>
    </Router>
  );
};

export default App;
