import { Display } from './components/layout/Display';
import { MobileKeypad } from './components/modules/MobileKeypad';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-black flex flex-col justify-end pb-6 font-sans antialiased text-zinc-100 touch-manipulation overflow-hidden">
      <div className="w-full flex flex-col px-3">
        <Display />
        <MobileKeypad />
      </div>
    </div>
  );
}

export default App;
