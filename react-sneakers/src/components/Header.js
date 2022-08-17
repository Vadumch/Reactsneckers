function Header (props) {
    return(
        <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
        <img src="/img/logo.png" alt="logo"/>
        <div>
          <h3 className="text-uppercase">react sneakers</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30 cu-p" onClick={props.onClickCard}>
            <img src="/img/Cart.svg" alt="Cart"/><span>1205 руб.</span></li>
          <li>
            <img src="/img/User.svg" alt="User"/>
          </li>
        </ul>
      </header>
    );
}
export default Header;