import React from "react"
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [items, setItems] = React.useState([]);
  const [cardItems, setCartItems] = React.useState([]);
  const [searchVale, setSearchVale] = React.useState([]);
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

  const onChangeSearchInput = (event) => {
    setSearchVale(event.target.value);
 }

  return (
    <div className="Wrapper clear">

      {cartOpenend && <Drawer items={cardItems} onClose={() => setCardOpened(false)} />}

      <Header onClickCard={() => setCardOpened(true)} /> 

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
        <h1>{searchVale ? `Посик по запросу: ${searchVale}` : 'все кроссовки'}</h1>
          <div className="search-bloc d-flex">
            <img src="/img/serch.svg" alt="Search"/>
            {searchVale && 
            <img 
            onClick={() => setSearchVale('')} 
            className="clear cu-p" 
            src="/img/btn-remove.svg" 
            alt="clear"/>}
            <input onChange={onChangeSearchInput} value={searchVale} placeholder="Поиск..." maxlength={20}/>
          </div>
        </div>

        <div className="d-flex flex-wrap">
          
         {
          items.filter((item) => item.title.toLowerCase().includes(searchVale.toLowerCase()))
          .map((item, index) => (
            <Card 
            key={index}
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
