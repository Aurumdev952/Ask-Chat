import React from'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import Chat from './Chat';
import { useState } from 'react';


// const chats = [
//     {
//       type: 'prompt',
//       text: 'Hello'
//     },
//     {
//       type: 'result',
//       text: 'Hello, How are you, qwertyuiopasdfghjklxcvbnm,wertyugfzwertyujxcvbnm,hsdfgsdfghjkxcvbnmwertyuisdfghjkxcvbnasd'
//     }
 
// ]

function App() {
  // const [chats, setChat] = useState(chats);
  const [prompt, setPrompt] = useState('');
  const [chats, setChat] = useState([]);
  const getPrompt = async (prompt) => {
  
    try {
      // const r = await fetch(`/api`)
      const r = await fetch(`/api/${prompt}`)
      if (r.status === 200) {
        const data = await r.json();
        const results = data.choices[0].text
        // console.log(data);
        console.log(results);
        // const nowChat = chats
        // const newChat = nowChat.push({
        //   type: 'result',
        //   text: results
        // })
        setChat(current => [...current, {
          type: 'result',
          text: results
        }])
      } else {
        alert('Error, check your netwoork connection')
      }
    } catch (error) {
      console.log({error: error})
    }
  
}


  
  return (
    <div className="app">
      <div className='main'>
      
      {chats?.length > 0
      ? (
      <div className='results'>
        {chats.map(chat => <Chat key={chat} chat={chat} />)}
      </div>
      ) : (
        <></>
      )}
      <div className='input'>
        <input type="text"
        placeholder='Enter prompt....'
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        />
        <button onClick={() => {
          // const nowChat = chats
          // const newChat = nowChat.push({
          //   type: 'prompt',
          //   text: prompt
          // })
   
          setChat(current => [...current,        {
            type: 'prompt',
            text: prompt
          }])
          getPrompt(prompt)
          setPrompt('')
        }
          
        }><FontAwesomeIcon icon={faPaperPlane}/></button>
      </div>

      </div>
    </div>
  );
}

export default App;
