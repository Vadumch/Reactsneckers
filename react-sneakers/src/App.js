import React from "react"
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
  const [cartOpenend, setCardOpened] = React.useState(false);
  return (
    <div className="Wrapper clear">

      {cartOpenend ? <Drawer onClose={() => setCardOpened(false)} /> : null}

      <Header onClickCard={() => setCardOpened(true)} /> 

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
            onFavorite={() => console.log('Добавили в закладки')}
            onPlus={() => console.log('Нажали плюс')}
          />
        ))} 
        </div>
      </div> 
    </div>
  );
}

export default App;
