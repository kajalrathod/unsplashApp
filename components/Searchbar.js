import React, {useState} from "react";

const Searchbar = ({onSubmit}) =>{
    const [term, setTerm] = useState('');

   const onFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
        console.log("first call");
    }
    return (
        <div className="ui segment">
        <form onSubmit={onFormSubmit} className="ui form">
            <div className="field">
                <label>Image Search</label>
                <input
                    type="text"
                    value={term}
                    onChange={(e)=> setTerm(e.target.value)}
                    />
            </div>
        </form>
    </div>
    );
}

export default Searchbar;