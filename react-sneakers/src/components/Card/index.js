import cardStyles from './card.module.scss';
import React from 'react';
function Card({onFavorite, imageUrl, title, price, onPlus}) {
  const [isAdded, setIsAdded] = React.useState(false);
  const onClickPlus = () => {
    onPlus({imageUrl, title, price,});
    setIsAdded(!isAdded);
  }
  
    return (
<div className={cardStyles.card}>
      <div className="favorite" onClick={onFavorite}>
        <img className={cardStyles.favorite} src="/img/heart-white.svg" alt="unliked"/>
      </div>
     <img width={133} height={115} src={imageUrl} alt="sneackers" />
       <h5>{title}</h5>
     <div className="d-flex justify-between align-center">
       <div className="d-flex flex-column">
         <sapn>Цeна:</sapn>
         <b>{price} руб.</b>
       </div>
       <button className="button">
         <img 
         className={cardStyles.plus} 
         width={32} height={32} 
         src={isAdded ? "/img/btn-cheked.svg" : "/img/btn-remove.svg"}
         onClick={onClickPlus}/>
         
       </button>
     </div>
</div>
    );
}
export default Card;