import React from "react"
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [items, setItems] = React.useState([]);
  const [cardItems, setCartItems] = React.useState([]);
  const [cartOpenend, setCardOpened] = React.useState(false);
  
  React.useEffect(() => {
    fetch('https://6301419d9a1035c7f8001e6f.mockapi.io/items').then(res => {
    return res.json();
  }).then(json => {
    setItems(json);
  });
  }, [])

  const onAddToCard = (obj) => {
    setCartItems(prev => [...prev, obj]);
  }

  return (
    <div className="Wrapper clear">

      {cartOpenend && <Drawer items={cardItems} onClose={() => setCardOpened(false)} />}

      <Header onClickCard={() => setCardOpened(true)} /> 

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
        <h1>Все кроссовки</h1>
          <div className="search-bloc d-flex">
            <img src="/img/serch.svg" alt="Search"/>
            <input placeholder="Поиск..." maxlength="20"/>
          </div>
        </div>

        <div className="d-flex flex-wrap">
          
         {
          items.map((item) => (
            <Card 
            title={item.title}
            price={item.price} 
            imageUrl={item.imageUrl}
            onFavorite={() => console.log('Добавили в закладки')}
            onPlus={(obj) => onAddToCard(obj)}
          />
        ))} 
        </div>
      </div> 
    </div>
  );
}

export default App;
