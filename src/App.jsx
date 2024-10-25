import { useState } from "react";
import { useEffect } from "react";
import Button from "./components/Button";
import Text from "./components/Text";

function App() {
  // ! useState, onClick ve onChange Yapıları..
  //let name = "react"

  const [name, setName] = useState("react"); // ? Hook.... useState("Burası: null verilebilir. Obje olarak verilebilir.")
  // const [degisken, degiskeni setlemek istediğin fonksiyon]

  const clickFunc = () => {
    // onClick fonksiyonuyla clickFunc çalışır.
    console.log("Click işlemi yapıldı.");
    setName("React Değişti."); // Değişkeni setleyen fonksiyonu temsil eder.
  };

  const [count, setCount] = useState(0);

  const decrement = () => {
    if (count <= 0) return; // count 0 veya küçük değer ise return ediyoruz. Yani öylesine dön gibi sayı 0'ın altına inmeyecek
    setCount(count - 1);
  };

  const increment = () => {
    // Bunu kullanmadan direkt arrow fonks ile jsx içerisinde yapabiliriz. Örn Line: 42
    setCount(count + 1);
  };

  const [name1, setName1] = useState(null); //

  console.log(name1, "name1String");

  const targetFunc = (e) => {
    console.log(e, "eventString");
    setName1(e.target.value);
  };

  const [data, setData] = useState(null);

  const clickFunc1 = () => {
    setData(name1);
  };

  const [data1, setData1] = useState([]);

  const clickFunc2 = () => {
    setData1((prev) => [...prev, name1]); // ... => Önce Tüm verileri al ve (...prev) dön. Ve sonra array'in içine koymak istediğimi (name1) sonuna ekle.
  };

  console.log(data1, "dataArrayString");

  // ! useEffect => Sayfa yüklendiği anda gerçekleşmesi istenilen olayları içine yazarak düzenleme yapılabiliyor. Dışarıdan aldığı parametrelerle
  // ! bağlı olarak kendini sürekli güncelleyen bir yapıdır.
  // ? Hiç bir button a, click özelliğine yada input'un handleChange özelliğine bağlı değil.
  // TODO: Örn: Back-End den bir ürün API si üzerinden istekte bulunursan, Sayfa yüklendiği anda tüm verileri çek ekranda göster diyebiliriz.

  const [name2, setName2] = useState("UseEffect");

  useEffect(() => {
    setTimeout(() => {
      setName2("React UseEffect ile güncellendi.");
    }, 4000);
  }, []);

  //props ... Veri aktarma. For example ===> number = "1"
  return (
    <>
      <Text number="1" name={"React"} />
      <Text number="2" name={"Reactt"} />
      <Text number="3" name={"Reacttt"} />
      <Button name={"Azalt"} onClick={() => setCount(count - 1)} />
      <Button name={"Artır"} onClick={() => setCount(count + 1)} />
      <br></br>
      <br></br>
      <div>{count}</div>
      <br></br>
      <button onClick={decrement}>Azalt</button>
      <button onClick={() => setCount(count + 1)}>Arttır</button>
      <br></br>
      <br></br>
      {name}
      <div onClick={clickFunc}>{name}</div>
      <input type="text" onChange={(e) => setName1(e.target.value)} />
      <br />
      <input type="text" onChange={targetFunc} />
      <br />
      <button onClick={clickFunc1}>Tıkla</button>
      <br />
      <button onClick={clickFunc2}>Array Ekle</button>
      <br />
      {data}
      <Text name={data} />
      <div>
        {data1.map((dt, i) => (
          <div key={i}> {dt} </div>
        ))}
      </div>
      <br />
      <br />
      {name2}
    </>
  );
}

export default App;
