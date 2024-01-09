import Image from './Image';
import king from './assets/data/equipment/barbarian_king.json';

const App = () => {
  console.log(king);

  return (
    <div className="font-supercellMagic">
      <div>Hejsan vafan</div>
      <Image url={`../public/img/equipment/${king[0].img}`} />
    </div>
  );
};

export default App;
