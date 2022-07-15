import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import SaveForm from './pages/book/SaveForm';
import Home from './pages/book/Home';
import UpdateForm from './pages/book/UpdateForm';
import LoginForm from './pages/user/LoginForm';
import KakaoLoginRedirect from './pages/user/KakaoLoginRedirect';
import Footer from './components/Footer';
import MyPage from './pages/user/MyPage';
import KakaoMap from './components/KakaoMap';

function App() {
  return (
    <div>
    <Header />
     <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/saveForm" element={<SaveForm />} />
          <Route path="/loginForm" element={<LoginForm />} />
          <Route path="/updateForm/:id" element={<UpdateForm />} />
          <Route path="/kakao" element={<KakaoMap />} />
          <Route path="/myPage" element={<MyPage />} />

          <Route
            path="/oauth2/redirect/:token"
            element={<KakaoLoginRedirect />}
          />
          <Route path="*" element={<div>에러 페이지</div>}></Route>
        </Routes>
      </Container>  
    <Footer />    
  </div>
  );
};

export default App;