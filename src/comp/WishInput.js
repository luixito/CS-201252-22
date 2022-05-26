import { useState } from "react";

function WishInput (props) {
    const [newWishText, setNewWhishText] = useState('');
    //props.onNewWish 

    return ( 
        <fieldset className="wish-input">
        <legend className="wish-input_label">New Wish</legend>
        <input className="wish-input_field" 
            placeholder="Enter your wish here"
            value={newWishText} 
            onChange= {e => setNewWhishText(e.target.value)}
            onKeyUp={e => {
                if (e.key === 'Enter' && newWishText.length){
                    props.onNewWish({done: false, text: newWishText});
                    setNewWhishText('');
                }
            }}></input>
    </fieldset>);
}

export default WishInput;

