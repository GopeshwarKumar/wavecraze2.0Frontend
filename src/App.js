import React, { useState } from 'react';
import Loader from './components/Loader';
import Home from './components/Home';

function App() {
  const [loading, setLoading] = useState(true);

  // Callback to handle loader completion
  const handleLoaded = () => {
    setLoading(false);
  };

  return (
    <div>
      {loading ? <Loader onLoaded={handleLoaded} /> : <Home />}
    </div>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 2d6dcdcc65c32e472f1831c3783c12e19173bfb3
