import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './Main';
import Home from './Home';
import Todo from './Todo';
import Contact from './Contact';
function App(){
  return( 
    <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Main/>} />
    <Route path="/home" element={<Home/>} />
    <Route path="/contact" elementt={<Contact />} />
    <Route path="/todo" element={<Todo />} />

  </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

