import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fb from '../../firebase';

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
    <div>
      <h1>Blog List</h1>
      {blogs.length > 0 ? (
        blogs.map(blog => (
          <div key={blog.id} style={{ border: '1px solid #ddd', padding: '10px', margin: '10px' }}>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
            <Link to={`/view/${blog.id}`}><button>View</button></Link>
            <Link to={`/modify/${blog.id}`}><button>Modify</button></Link>
            <button onClick={() => handleDelete(blog.id)}>Delete</button>
          </div>
        ))
      ) : (
        <p>No blogs available.</p>
      )}
    </div>
  );
}

export default BlogComponent;
