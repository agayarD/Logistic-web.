import "./style.css"

function BlackDivItem(props){
    return(
        <div className="blackDivItem">
            <div className="blackDivItem_icon">
           <div>{props.icon}</div>
            </div>
            <div className="blackDivItem_text">
                <p>{props.header}</p>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default BlackDivItem;