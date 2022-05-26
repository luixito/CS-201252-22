function WishItem(props){
return (
    <li key={props.text} className= {`wish-list_item ${props.done ? 'wish-list_item--done' : ''}`}>
            <input id={ props.id } type="checkbox" 
            checked = {props.done}
            onChange= {e => props.onDoneChange(e.target.checked)} />
            <label htmlFor={ props.id }>{props.text}</label>
          </li>
);

}

export default WishItem; 