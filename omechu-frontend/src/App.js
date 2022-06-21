import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Detail from './pages/book/Detail';
import SaveForm from './pages/book/SaveForm';
import Home from './pages/book/Home';
import UpdateForm from './pages/book/UpdateForm';
import JoinForm from './pages/user/JoinForm';
import LoginForm from './pages/user/LoginForm';

function App() {
  return (
  <div>
    <Header />
     <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/saveForm" element={<SaveForm />} />
          <Route path="/book/:id" element={<Detail />} />
          <Route path="/loginForm" element={<LoginForm />} />
          <Route path="/joinForm" element={<JoinForm />} />
          <Route path="/updateForm/:id" element={<UpdateForm />} />
        </Routes>
      </Container>    
  </div>
  );
};

export default App;