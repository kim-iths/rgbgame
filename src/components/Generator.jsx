import { useEffect, useState } from "react"
import "./sideMenuItems.css"


const Generator = ({name, baseIncrease, basePrice, costScalingPercent, onClick, tempImage, tempAnim}) => {

    const [image, setImage] = useState(tempImage)

    return(
        <div className="side-menu-item" onClick={onClick} 
        onMouseEnter={() => setImage(tempAnim)} 
        onMouseLeave={() => setImage(tempImage)} >
            <div>
                <h5>{name}</h5>
                <p>{baseIncrease}/s</p>
                <p>{basePrice}</p>
            </div>
            <img className="generator-image" src={image} />
        </div>
    )
}


export default Generator