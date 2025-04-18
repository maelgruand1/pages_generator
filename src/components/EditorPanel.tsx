import React, { useState } from 'react';

type EditorPanelProps = {
  onTitleChange: (newTitle: string) => void;
  onContentChange: (newContent: string) => void;
};

const EditorPanel: React.FC<EditorPanelProps> = ({ onTitleChange, onContentChange }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    onTitleChange(e.target.value);  // Pass the title to the parent component
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    onContentChange(e.target.value);  // Pass the content to the parent component
  };

  return (
    <div className="editor-panel">
      <h2>Éditeur de contenu</h2>
      <div className="form-group">
        <label htmlFor="title">Titre de la page</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
          placeholder="Entrez le titre de la page"
        />
      </div>
      <div className="form-group">
        <label htmlFor="content">Contenu de la page</label>
        <textarea
          id="content"
          value={content}
          onChange={handleContentChange}
          placeholder="Entrez le contenu de la page"
        />
      </div>
    </div>
  );
};

export default EditorPanel;
