import React, { useMemo, useRef, useState } from "react";

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

  // TODO: -----  useMemo  ------
  // ! useMemo ==> Performans arttırmakla alakalı CPU tüketimiyle direkt ilgisi var. Büyük çaplı bir fonk yazdınız o kadar büyük ki bu fonksiyona hiç
  // ! dokunmuyorsunuz. Ama statelerden birini güncelliyorsanız (rerender) dolayısıyla büyük fonksiyonu da tetiklersiniz. Bu tip durumlarda useMemo
  // ! kullanılması çok uygun olur.

  const [count, setCount] = useState(0);
  const [textChange, setTextChange] = useState("");

  const largeDataFunc = useMemo(() => {
    [...new Array(100000000)].forEach((item) => {});
    return count * 3;
  }, []); // TODO: [] ==> buraya yazacağımız parametre her değiştiğinde bu fonksiyonu baştan çalıştıracak. Yoksa Sadece bir kere çalışacak ve ön belleğe alacak.

  // const funcOpen = largeDataFunc();  // useMemo kullandığım için artık bunu kullanmıyorum.

  return (
    <>
      <div id="text">react UserRefID</div>
      <div ref={textRef}>react UseRef</div>
      <button onClick={clickFunc}>click me !!</button>
      <br />
      <br />
      <input type="text" ref={inputRef} />
      <button onClick={focusFunc}>Focus !!</button>
      <div> {count}</div>
      <button onClick={() => setCount(count + 1)}>ARTTIR</button>
      <br />
      <br />
      <input type="text" onChange={(e) => setTextChange(e.target.value)} />
    </>
  );
}

export default App3;
