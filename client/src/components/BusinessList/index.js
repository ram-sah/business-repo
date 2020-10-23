import React from "react";
import "../../pages/Business"


export function BusinessList({ children }) {
    return <p>{children}</p>
}

export function BusinessListItem(props) {
    return(
        <div>
            <a href={"/business/" + props.id}>{props.business}</a>
            <p>{props.description}</p>
            <p>Total Discount: {props.discount}</p>
        </div>
    )
}