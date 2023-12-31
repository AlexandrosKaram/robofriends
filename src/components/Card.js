import React from "react";

const Card = (props) => {
    const {name, email, id} = props;   // could also be done directly through the parameters
    return (
        <div className="bg-light-green tc dib br3 pa3 ma3 grow bw2 shadow-5" >
            <img src={`https://robohash.org/${id}?200x200`} alt="robot" />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card