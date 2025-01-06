import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import fb from '../../firebase';
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import './Createblog.css';  // Custom CSS for styling

const db = fb.firestore();
const Blogs = db.collection('blogs');

function CreateBlog() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [title, setTitle] = useState('');
  const navigate = useNavigate();

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  const getHtmlOutput = () => {
    return draftToHtml(convertToRaw(editorState.getCurrentContent()));
  };

  const handleCreate = () => {
    if (!title || !getHtmlOutput()) {
      alert('Title and content cannot be empty.');
      return;
    }

    const newBlog = {
      title,
      content: getHtmlOutput(),
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
    <div className="create-blog-container">
      <h1 className="title">Create New Blog</h1>
      <input
        type="text"
        className="blog-title-input"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="editor-container">
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={onEditorStateChange}
          placeholder="Start typing..."
        />
      </div>
      <div className="button-group">
        <button className="create-button" onClick={handleCreate}>Create Blog</button>
        <button className="cancel-button" onClick={() => navigate('/')}>Cancel</button>
      </div>
    </div>
  );
}

export default CreateBlog;
