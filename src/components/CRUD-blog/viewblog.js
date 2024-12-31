import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fb from '../../firebase';

const db = fb.firestore();

function ViewBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    db.collection('blogs').doc(id).get()
      .then((doc) => {
        if (doc.exists) {
          setBlog(doc.data());
        } else {
          console.log('No such document!');
        }
      });
  }, [id]);

  if (!blog) return <p>Loading...</p>;

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
}

export default ViewBlog;
