import WishItem from "./WishItem";

function WishList (props){
    return (
        <ul className="wish-list">
        { props.wishes.map(({ text, done}, i) => (
          /*<li key={text} className= {`wish-list_item ${done ? 'wish-list_item--done' : ''}`}>
            <input id={ `wish${i}` } type="checkbox" checked = {done} />
            <label htmlFor={ `wish${i}` }>{text}</label>
          </li>*/
          <WishItem done={done} text={text} id={`wish${i}`} key= {text} onDoneChange = {(value) => {
                const updateWishes = [ ... props.wishes];
                updateWishes[i].done = value;
            props.onWishesChange (updateWishes);
          }}></WishItem>
        ) )}
      </ul>
    );

}

export default WishList;