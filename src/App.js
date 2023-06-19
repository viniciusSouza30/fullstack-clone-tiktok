import React, {useEffect, useState} from "react";
// esse useEffect permite que eu fale algo para ele fazer algo toda vez que iniciar meu projeto ou quando ocorrer alguma coisa
import './App.css';
import Video from "./pages/Video";
import db from './config/firebase';
import {collection, getDocs} from 'firebase/firestore/lite';

function App() {

  let maxHeight;
  if(window.innerHeight <= 800){
    maxHeight = window.innerHeight;
  }

  const [video, setVideos] = useState([]);

  async function getVideos(){
    const videoColletion = collection(db, "videos");
    const veideoSnapshot = await getDocs(videoColletion);
    const videosList = veideoSnapshot.docs.map(doc => doc.data());
    setVideos(videosList);
  }

  useEffect(()=>{
    getVideos();
  },[])
  // esses couchetes está aí para o useEffect não ficar em um loop, executar somente uma vez. por padrão toda vez que ocorre uma mudança ele é excutado novamente e isso faz ele parar

  return (
    <div className="App" style={{maxHeight: maxHeight + "px"}}>
      <div className='app-videos'>
        {video.map((item)=>{
          return(<Video 
            likes={item.likes}
            messages={item.messages}
            shares={item.shares}
            name={item.name}
            description={item.description}
            music={item.music}
            url={item.url}
          />)
        })}

      
      </div>
    </div>
  );
}

export default App;
