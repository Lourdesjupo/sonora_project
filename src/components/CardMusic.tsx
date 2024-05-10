import woods from '../assets/Images/woods.png'
import bushcraft from '../assets/Images/bushcraft.png'
import rainCar from '../assets/Images/carRain.png'
import libraryDay from '../assets/Images/libraryDay.png'
import night from '../assets/Images/night.png'
import woodsAudio from '../assets/Music/softRain.mp3'
import bushcraftAudio from '../assets/Music/rainTent.mp3'
import rainCarAudio from '../assets/Music/rainCar.mp3'
import libraryDayAudio from '../assets/Music/libraryInKorea.mp3'
import nightAudio from '../assets/Music/night.mp3'
import './CardMusic.css'



function cardMusic () {
const cards : {id:number, img:string , name: string, sound: string } [] =  [
  {
    id:1,
    img: woods,
    name: 'It rains softly',
    sound: woodsAudio
  } ,

  {
    id: 2,
    img: bushcraft ,
    name: 'It\'s raining and you\'re doing bushcraft',
    sound: bushcraftAudio
  },
  {
    id: 3,
    img: rainCar,
    name: 'It\'s raining and you are in the car' ,
    sound: rainCarAudio
  },
  {
    id: 4,
    img: libraryDay ,
    name: 'You are in a korean library',
    sound: libraryDayAudio
  },
  {
    id: 5,
    img: night,
    name: 'You are in the middle of the night forest' ,
    sound: nightAudio
  },

]

  return (<>
  <ul className="cards">
    {cards.map((el)=>{
      return <li className="card" key={el.id}>
        <img className="card_img"src= {el.img} alt={el.name}/>
        <div className='card_desc'>
          <p className="card_name">{el.name}</p>
          <audio className="card_audio" src={el.sound} controls loop></audio>
        </div>
      </li>
    })}
   </ul>
   </>)
}

export default cardMusic