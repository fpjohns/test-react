import React from "react";
import { useState } from "react";
function Form(props) {
  const [value, setValue] = useState("");
  const [send, setSend] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    setValue("");
    setSend(true);
  };

  const handleText = (e) => {
    setValue(e.target.value);
    setSend(false);
    setError(false);
  };
  const handleBlur = () => {
    if (!value) {
      setError(true);
      setSend(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={handleText}
          onBlur={handleBlur}
        />
        <button type="submit" disabled={!value}>
          send
        </button>
      </form>
      {send ? <div>Сообщение отправлено!</div> : null}
      {error && <div>Строка не должна быть пустым!</div>}
    </>
  );
}

export default Form;
