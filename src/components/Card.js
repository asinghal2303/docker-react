import React from "react";

const Card = ({ id, name, email }) => {
    return (
        <div className="bg-light-green dib tc br3 pa3 ma2 bw2 grow shadow-5">
            <img src={`https://robohash.org/${id}`} alt="display_picture" />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default Card;