import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fb from '../../firebase';
import './BlogComponent.css'; // Custom CSS for styling

const db = fb.firestore();
const Blogs = db.collection('blogs');

function BlogComponent() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    Blogs.get()
      .then((snapshot) => {
        const blogList = snapshot.docs.map(doc => ({
          ...doc.data(),
          id: doc.id,
        }));
        setBlogs(blogList);
      })
      .catch(err => console.error('Error fetching blogs:', err));
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      Blogs.doc(id).delete().then(() => {
        setBlogs(blogs.filter(blog => blog.id !== id));
        alert('Blog deleted successfully!');
      });
    }
  };

  return (
    <div className="blog-list-container">
      <h1 className="title">Blog List</h1>
      <div className="blog-grid">
        {blogs.length > 0 ? (
          blogs.map(blog => (
            <div key={blog.id} className="blog-card">
              <img src={blog.image || 'blog.jpeg'} alt={blog.title} className="blog-image" />
              <h2 className="blog-title">{blog.title}</h2>
              {/* <p className="blog-content">{blog.content}</p> */}
              <div className="button-group">
                <Link to={`/view/${blog.id}`}><button className="view-button">View</button></Link>
                <Link to={`/modify/${blog.id}`}><button className="modify-button">Modify</button></Link>
                <button className="delete-button" onClick={() => handleDelete(blog.id)}>Delete</button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-blogs">No blogs available.</p>
        )}
      </div>
    </div>
  );
}

export default BlogComponent;