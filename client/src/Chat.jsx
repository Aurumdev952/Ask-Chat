import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRobot, faUser } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef } from "react";


const Chat = ({chat}) => {
    const text = useRef(null)
    const txt = chat.text
    useEffect(() => {
        let i = 0;
        const speed = 50;
        function typeWriter() {

            if (i < txt.length) {
                text.current.innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }
        return () => typeWriter();

    }, [txt])
    return (
        <div className="chat">
            <div className="div">
                <div className="icon">
                    {chat.type === 'prompt'
                    ? (
                        <FontAwesomeIcon icon={faUser}/>

                    ) : (
                        <FontAwesomeIcon icon={faRobot} />
    
                    )}
                </div>
                <pre ref={text} className="text"></pre>
                {/* <p className="text">{chat.text}</p> */}
            </div>
            {/* <div className="div">
                <div className="icon">
                    <FontAwesomeIcon icon={faRobot} />
    
                    </div>
                    
                <p className="text">{chat.text}</p>
            </div> */}
        </div>
    )
}

export default Chat