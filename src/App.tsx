import { MainLayout } from './components/Layout';
import { Calculator } from './features/calculator/components/Calculator';
import { CalculatorResult } from './features/calculator/components/CalculatorResult';
import ReactGA from 'react-ga4';

const App = () => {
  ReactGA.initialize('G-9J3ZNM8FWP');

  return (
    <MainLayout>
      <Calculator />
      <CalculatorResult title="Remaining" />
    </MainLayout>
  );
};

export default App;
