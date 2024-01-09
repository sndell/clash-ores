import king from './assets/data/equipment/barbarian_king.json';

const App = () => {
  return (
    <div className="font-supercellMagic">
      {king.map((item) => (
        <>
          <div>{item.name}</div>
          <img src={item.img} />
        </>
      ))}
    </div>
  );
};

export default App;
