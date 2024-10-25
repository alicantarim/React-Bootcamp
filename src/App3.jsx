import React, { useRef } from "react";

function App3() {
  const text = window.document.getElementById("text");

  console.log(text, "text");

  const textRef = useRef();
  console.log(textRef, "textRef");
  console.log(textRef.current, "textRefCurrent");

  const countRef = useRef(0);

  const clickFunc = () => {
    countRef.current++;
    console.log(countRef.current, "countRef");
  };

  const inputRef = useRef();

  const focusFunc = () => {
    inputRef.current.focus(); // ! focus ==> Focus butonuna bastığımızda verdiğimiz input'a odaklanır. (Otomatik içini seçer, yazmaya hazır hale gelir.)
  };

  console.log(inputRef.current, "inputRef");

  return (
    <>
      <div id="text">react UserRefID</div>
      <div ref={textRef}>react UseRef</div>
      <button onClick={clickFunc}>click me !!</button>
      <br />
      <br />
      <input type="text" ref={inputRef} />
      <button onClick={focusFunc}>Focus !!</button>
    </>
  );
}

export default App3;
