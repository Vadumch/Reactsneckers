import cardStyles from './card.module.scss';
import React from 'react';
function Card(props) {
  const [isAdded, setIsAdded] = React.useState(false);
  const onClickPlus = () => {
    setIsAdded(!isAdded);
  }
    return (
<div className={cardStyles.card}>
      <div className="favorite" onClick={props.onFavorite}>
        <img className={cardStyles.favorite} src="/img/heart-white.svg" alt="unliked"/>
      </div>
     <img width={133} height={115} src={props.imageUrl} alt="sneackers" />
       <h5>{props.title}</h5>
     <div className="d-flex justify-between align-center">
       <div className="d-flex flex-column">
         <sapn>Цeна:</sapn>
         <b>{props.price} руб.</b>
       </div>
       <button className="button" onClick={onClickPlus}>
         <img className={cardStyles.plus} width={32} height={32} src={isAdded ? "/img/btn-cheked.svg" : "/img/btn-remove.svg"}/>
       </button>
     </div>
</div>
    );
}
export default Card;