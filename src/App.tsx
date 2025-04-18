import React, { useState } from 'react';
import EditorPanel from './components/EditorPanel';
import { downloadHTML } from './components/utils/htmlExport';
import './App.css';
import logo from './logo.png';


function App() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (newTitle: string) => {
    setTitle(newTitle);
  };

  const handleContentChange = (newContent: string) => {
    setContent(newContent);
  };

  const handleDownload = () => {
    downloadHTML(title, content);
  };

  return (
    <div className="App">
      
      <header className="App-header">
        <h1>Pages Generator</h1>
        <img src={logo} alt="Logo" className='logo'/>
      </header>
      <div className="content-container">
        
        <EditorPanel
          onTitleChange={handleTitleChange}
          onContentChange={handleContentChange}
        />
        <div className="preview">
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
        <button onClick={handleDownload}>Télécharger la page</button>
      </div>
    </div>
  );
}

export default App;
