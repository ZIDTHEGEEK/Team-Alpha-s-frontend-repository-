import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye,faEyeSlash  } from "@fortawesome/free-solid-svg-icons";



export default function TogglePassword(){
    const [visible, setVisibility] = useState(false);

    const Icon =( <FontAwesomeIcon icon= {visible ? "eye-slash" : "eye"} 
    onClick={() => setVisibility(visible => !visible) } 
    />
    );

    const InputType = visible ? "text" : "password"; 


    return[InputType, Icon]
}



