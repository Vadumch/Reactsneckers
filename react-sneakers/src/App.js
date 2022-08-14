import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [
  { title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: '12 999 руб.', imageUrl: "/img/sneackers/1.jpg"},
  { title: 'Мужские Кроссовки Nike Air Max 270', price: '15 600 руб.', imageUrl: "/img/sneackers/2.jpg"},
  { title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: '10 600 руб.', imageUrl: "/img/sneackers/3.jpg"},
  { title: 'Кроссовки Puma X Aka Boku Future Rider', price: '8 999 руб.', imageUrl: "/img/sneackers/4.jpg"}
];

function App() {
  return (
    <div className="Wrapper clear">
<<<<<<< HEAD

      <Drawer />
=======
   {/* проверка */}
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Корзина<img className="remove-btn cu-p" src="/img/btn-remove.svg" alt="Remove"/>
        </h2>
        <div className="items">
            <div className="cart-Item d-flex align-center mb-20">
              <div className="cart-Item__img" style={{backgroundImage: 'url(/img/sneackers/2.jpg)'}}></div>
              <div className="mr-20 flex">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
             <img className="remove-btn" src="/img/btn-remove.svg" alt="Remove"/>
           </div>
>>>>>>> b3ba749728b55b74a12f5a8d0317e610d988b3bd

      <Header /> 

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
        <h1>Все кроссовки</h1>
          <div className="search-bloc d-flex">
            <img src="/img/serch.svg" alt="Search"/>
            <input placeholder="Поиск..." maxlength="20"/>
          </div>
        </div>

        <div className="d-flex">
          
         {
          arr.map((obj) => (
            <Card 
            title={obj.title}
            price={obj.price} 
            imageUrl={obj.imageUrl}
            onClick={() => console.log(obj)}
          />
        ))} 
        </div>
      </div> 
    </div>
  );
}

export default App;
