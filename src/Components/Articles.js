import React, {useState} from 'react';

let Article = (props) => {
    const [chgTitle, setChgTitle] = useState(props.titre)
    return(
        <div className="App">
            {chgTitle.map((e) => <h1>{e.titre}</h1>)}
        </div>
    )
};

export default Article;
