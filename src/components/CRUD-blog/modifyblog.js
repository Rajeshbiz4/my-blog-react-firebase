import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import fb from '../../firebase';

const db = fb.firestore();

function ModifyBlog() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    db.collection('blogs').doc(id).get()
      .then((doc) => {
        if (doc.exists) {
          const data = doc.data();
          setTitle(data.title);
          setContent(data.content);
        }
      });
  }, [id]);

  const handleUpdate = () => {
    db.collection('blogs').doc(id).update({
      title,
      content,
    }).then(() => {
      alert('Blog updated!');
      navigate('/');
    });
  };

  return (
    <div>
      <h1>Modify Blog</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleUpdate}>Save Changes</button>
    </div>
  );
}

export default ModifyBlog;
