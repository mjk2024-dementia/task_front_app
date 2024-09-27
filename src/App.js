import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

import Home from './components/Home';
import Completed from './components/completed';
import Important from './components/Important';
import Proceeding from './components/Proceeding';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="/proceeding" element={<Proceeding />} />
          <Route path="/important" element={<Important />} />

        </Routes>

        <ToastContainer 
          position="buttom-center"
          autoClose="(1000}"
          theme='loght'
          />
      </div>
    </BrowserRouter>
  );
}
export default App;
