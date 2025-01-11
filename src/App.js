import logo from './logo.svg';
import './App.css';
import Create from './components/CRUD-blog/CreateBlog';
import BlogComponent from './components/CRUD-blog/bloglist';
import ViewBlog from './components/CRUD-blog/viewblog';
import ModifyBlog from './components/CRUD-blog/modifyblog';
import CreateBlog from './components/CRUD-blog/CreateBlog';
import CKEditorDemo from './components/CRUD-blog/editor';
import Header from './components/common/Header';
import Footer from './components/common/Footer/footer';
import LoginPage from "./components/login/login";
import SignupPage from "./components/signup/signup";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header />
      <Router>
      <Routes>
        <Route path="/" element={<BlogComponent />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/editor" element={<CKEditorDemo />} />
        <Route path="/view/:id" element={<ViewBlog />} />
        <Route path="/modify/:id" element={<ModifyBlog />} />
        <Route path="/create" element={<CreateBlog />} />
      </Routes>
    </Router>
      {/* <Create />
      <BlogComponent /> */}
      <Footer />
    </div>
  );
}

export default App;
