import { useState } from 'react'
import './App.css'
import "./Button.scss"


import FolderIcon from '@mui/icons-material/Folder';



function ButtonFancy() {
    const [jump, setJump] = useState(false);

    async function handleClick(ev){
        setJump(true);
        console.log("AAA");

        setTimeout(function(){
            console.log("AAA after 3 seconds");
            setJump(false);
        }, 2000);

    }
    
    return (
        <>
        {jump && <div id="jumpscare"></div>}
        <div id="scoped">
            <div className="btn-wrapper" onClick={handleClick}>
                <div className="button-cmp red-dropshadow"></div>
                <div className="button-cmp white-circle"></div>
                <div className="button-cmp folder-wrapper">
                    <FolderIcon className="folder"/>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default ButtonFancy
