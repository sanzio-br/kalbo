import React, { useState, useCallback } from "react";

const Textarea = ({ rows, cols, value, limit, name }) => {
  const [content, setContent] = useState(value.slice(0, limit));

  const setFormattedContent = useCallback(
    (text) => {
      setContent(text.slice(0, limit));
    },
    [limit, setContent]
  );

  return (
    <div>
      <textarea
      name={name}
        className="form-control"
        onChange={(event) => setFormattedContent(event.target.value)}
        value={content}
      />
      <p>
        {content.length}/{limit}
      </p>
    </div>
  );
};

export default Textarea;
