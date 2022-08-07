

function App() {
  return (
    <div className="Wrapper clear">

    <div className="overlay">
      <div className="drawer">
        <h2 className="mb-30">Корзина</h2>
        <div className="items">
            <div className="cart-Item d-flex align-center mb-20">
              <div className="cart-Item__img" style={{backgroundImage: 'url(/img/sneackers/2.jpg)'}}></div>
              <div className="mr-20 flex">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
             <img className="remove-btn" src="/img/btn-remove.svg" alt="Remove"/>
           </div>

            <div className="cart-Item d-flex align-center mb-20">
              <div className="cart-Item__img" style={{backgroundImage: 'url(/img/sneackers/3.jpg)'}}></div>
             <div className="mr-20 flex">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
               <b>12 999 руб.</b>
             </div>
             <img className="remove-btn" src="/img/btn-remove.svg" alt="Remove"/>
          </div>

        </div>
        <div className="cart__total-blog">
          <ul>
              <li>
                <span>Итого:</span>
                <div></div>
                <b>21 298 руб.</b>
              </li>
              <li>
              <span>Налог 5:</span>
                <div></div>
                <b>1074 руб.</b>
              </li>
            </ul>
            <button><span>Оформить заказ</span> <span><svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 7H14.7143" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.71436 1L14.7144 7L8.71436 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg></span>
            </button>
        </div>
      </div>
    </div>

      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
        <img src="/img/logo.png" alt="logo"/>
        <div>
          <h3 className="text-uppercase">react sneakers</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img src="/img/Cart.svg" alt="Cart"/><span>1205 руб.</span></li>
          <li>
            <img src="/img/User.svg" alt="User"/>
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
        <h1>Все кроссовки</h1>
          <div className="search-bloc d-flex">
            <img src="/img/serch.svg" alt="Search"/>
            <input placeholder="Поиск..." maxlength="20"/>
          </div>
        </div>

        <div className="d-flex">
        <div className="card">
            <div className="favorite">
              <img src="/img/heart-white.svg" alt="unliked"/>
            </div>
            <img width={133} height={115} src="/img/sneackers/1.jpg" alt="sneackers" />
              <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <sapn>Цeна:</sapn>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={32} height={32} src= "/img/plus.svg"/>
              </button>
            </div>
        </div>
        <div className="card">
            <img width={133} height={115} src="/img/sneackers/2.jpg" />
              <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <sapn>Цeна:</sapn>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={32} height={32} src= "/img/plus.svg"/>
              </button>
            </div>
        </div>
        <div className="card">
            <img width={133} height={115} src="/img/sneackers/3.jpg" />
              <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <sapn>Цeна:</sapn>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={32} height={32} src= "/img/plus.svg"/>
              </button>
            </div>
        </div>
        <div className="card">
            <img width={133} height={115} src="/img/sneackers/4.jpg" />
              <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <sapn>Цeна:</sapn>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={32} height={32} src= "/img/plus.svg"/>
              </button>
            </div>
        </div>
        </div>

      </div> 
    </div>
  );
}

export default App;
