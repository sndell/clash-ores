import king from './assets/data/equipment/barbarian_king.json';

const App = () => {
  console.log(king);

  return (
    <div className="font-supercellMagic">
      <div>Hejsan vafan</div>
      <img src={king[0].img} alt="" />
    </div>
  );
};

export default App;
