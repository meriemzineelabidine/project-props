
import './App.css';
import Player from './component/Player';

function App() {
  const players=[{img:"https://www.nessma.tv/uploads/news/b1b0fbed711b65aebb6ee1ece031585c19.jpg",name:"Ali malloul",equipe:"Ahlimasr",nationality:"tunisian",age:33,jersynumber:10},{img:"https://www.dzairsport.net/wp-content/uploads/2023/09/346664300_3443111315959344_3225692798085184718_n-e1685527652812-780x470.jpg",name:"Aidouni",equipe:"allemagne",nationality:"tunisian",age:26,jersynumber:11},{img:"https://assets-fr.imgfoot.com/media/cache/1200x900/cristiano-ronaldo-al-nassr.jpg",name:"Christiano Ronaldo",equipe:"nasrsaoudi",nationality:"portugal",age:38,jersynumber:7},]
  return (
    <div className="App">
      {players.map((el)=><Player info={el} />)}
    
    </div>
  );
}

export default App;
