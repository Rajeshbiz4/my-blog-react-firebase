import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import fb from '../../firebase';

const db = fb.firestore();
const Blogs = db.collection('blogs');

function CreateBlog() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleCreate = () => {
    if (!title || !content) {
      alert('Title and content cannot be empty.');
      return;
    }

    const newBlog = {
      title,
      content,
      createdAt: new Date(),
    };

    Blogs.add(newBlog)
      .then(() => {
        alert('Blog created successfully!');
        navigate('/');
      })
      .catch(err => {
        console.error('Error creating blog:', err);
      });
  };

  return (
    <div>
      <h1>Create New Blog</h1>
      <input
        type="text"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Blog Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleCreate}>Create Blog</button>
      <button onClick={() => navigate('/')}>Cancel</button>
    </div>
  );
}

export default CreateBlog;
