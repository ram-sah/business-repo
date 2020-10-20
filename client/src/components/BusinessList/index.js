import React from "react";
import "../../pages/Business"


export function BusinessList({ children }) {
    return <ul>{children}</ul>
}

export function BusinessListItem(props) {
    return(
        <div>
            <a href={"/business/" + props.id}>{props.business}</a>
            <p onClick={()=>props.handleClick(props.business)}>{props.description} </p>
            <p>Total Discount: {props.discount}</p>
        </div>
    )
}