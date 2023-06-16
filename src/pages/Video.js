import React, {useRef, useState} from 'react'
import VideoFooter from './components/footer/videoFooter';
import "./video.css";

// useRef possível acessar elementos DOM ou do React e também manter uma variável mutável em componentes funcionais (similar a uma variável de instância em uma classe).
// useState permite a criação de estado no componente através de função e faz o gerenciamento do estado local do componente retorna um array como resultado. Por isso, é possível fazermos uma desestruturação para receber partes desse retorno. O array de retorno possui dois índices.

function Video() {

    const videoRef = useRef(null);
    const [play, setPlay] = useState(false);

    function handdleStart(){
        if(play){
            videoRef.current.pause();
            setPlay(false);
        }else{
            videoRef.current.play();
            setPlay(true);
        }
    }

    // coisas que estão abaixo é visual e coisas que estão acima ñ, são funcionalidades
    return (
    <div className="video">
        
        <video 
            className='video-player'
            // no ref estou referencianod o videoRef a esse elemento
            ref={videoRef}
            onClick={handdleStart}
            loop
            src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"
        >
        </video>
        {/* Side bar  */}
        <VideoFooter />
    </div>
  )
}

export default Video