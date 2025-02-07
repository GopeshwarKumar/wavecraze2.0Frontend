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

export default App;



// import React from 'react'
// import FirstyearRN from './components/Me/FirstyearRN'
// import SeconYearRN from './components/Me/SeconYearRN'
// import ThirdyearRn from './components/Me/ThirdyearRn'
// import FinalyearRN from './components/Me/FinalyearRN'

// function App() {
//   return (
//     <>
    // <FirstyearRN/>
    // <SeconYearRN/>
    // <ThirdyearRn/>
    // <FinalyearRN/>
//     </>
//   )
// }

// export default App