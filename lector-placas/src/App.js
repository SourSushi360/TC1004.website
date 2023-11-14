import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {Header, Home, Registro} from './components';
import { Suspense } from 'react';

function App() {
  return (
    <Router>
      <Suspense>
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/registro' exact Component={Registro}/>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
