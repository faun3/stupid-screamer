import { useState } from 'react'
import './App.css'
import "./Button.scss"


import FolderIcon from '@mui/icons-material/Folder';



function ButtonFancy() {
    const [jump, setJump] = useState(false);

    async function handleClick(ev){
        let audio = new Audio("/scream.mp3");
        setJump(true);
        audio.play();
        console.log("AAA");

        setTimeout(function(){
            setJump(false);
            audio.pause();
            audio.currentTime = 0;
        }, 2 * 1000);

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
