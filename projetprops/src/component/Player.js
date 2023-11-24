 import '../App.css'
 
 function Player({info}){
    return(
        <div className='box'>
        <img src={info.img} className='img-player'></img>
        <div ><h3>{info.name}</h3></div>
        <div className='style-txt'>Equipe : {info.equipe}</div>
       <div className='style-txt'>  Nationality : {info.nationality}</div>
        <div className='style-txt'>  Age : {info.age}</div>
       <div className='style-txt'>  Jersy number : {info.jersynumber}</div>

        </div>
    );
}
export default Player ;