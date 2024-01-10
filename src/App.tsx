import { MainLayout } from './components/Layout';
import { Calculator } from './features/calculator/components/Calculator';
import { CalculatorResult } from './features/calculator/components/CalculatorResult';

const App = () => {
  return (
    <MainLayout>
      <Calculator />
      <CalculatorResult />
    </MainLayout>
  );
};

export default App;
