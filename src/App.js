import logo from './logo.svg';
import './App.css';
import Create from './components/CRUD-blog/CreateBlog';
import BlogComponent from './components/CRUD-blog/bloglist';
import ViewBlog from './components/CRUD-blog/viewblog';
import ModifyBlog from './components/CRUD-blog/modifyblog';
import CreateBlog from './components/CRUD-blog/CreateBlog';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
       <h1 >
        Welcome
      </h1>
      <Router>
      <Routes>
        <Route path="/" element={<BlogComponent />} />
        <Route path="/view/:id" element={<ViewBlog />} />
        <Route path="/modify/:id" element={<ModifyBlog />} />
        <Route path="/create" element={<CreateBlog />} />
      </Routes>
    </Router>


     
      {/* <Create />
      <BlogComponent /> */}
    </div>
  );
}

export default App;
