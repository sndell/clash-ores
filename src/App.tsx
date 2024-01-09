import Image from './Image';
import king from './assets/data/equipment/barbarian_king.json';

const App = () => {
  console.log(king);

  const test = import('./assets/img/equipment/Barbarian_Puppet.webp');

  console.log(test);

  return (
    <div className="font-supercellMagic">
      <div>Hejsan vafan</div>
      <Image url={`./assets/img/equipment/${king[0].img}`} />
    </div>
  );
};

export default App;
