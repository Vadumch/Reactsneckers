import cardStyles from './card.module.scss';
function Card(props) {

  // const onClickButton = () => {
  //   alert (123)
  // }

    return (
<div className={cardStyles.card}>
      <div className="favorite">
        <img src="/img/heart-white.svg" alt="unliked"/>
      </div>
     <img width={133} height={115} src={props.imageUrl} alt="sneackers" />
       <h5>{props.title}</h5>
     <div className="d-flex justify-between align-center">
       <div className="d-flex flex-column">
         <sapn>Цeна:</sapn>
         <b>{props.price} руб.</b>
       </div>
       <button className="button" onClick={props.onClick}>
         <img width={32} height={32} src= "/img/plus.svg"/>
       </button>
     </div>
</div>
    );
}
export default Card;