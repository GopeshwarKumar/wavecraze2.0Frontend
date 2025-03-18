import React, { useState } from 'react';
import Loader from './components/Loader';
import Home from './components/Home';

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoaded = () => {
    setLoading(false);
  };

  return (
    <>
    {loading ? <Loader onLoaded={handleLoaded} /> : <Home />}
    </>
  );
}
export default App;

// import React from 'react'
// import WavecrazeSponser from './components/Me/WavecrazeSponser'
// import FinalyearRN from './components/Me/FinalyearRN'
// import ThirdyearRn from './components/Me/ThirdyearRn'
// import SeconYearRN from './components/Me/SeconYearRN'
// import FirstyearRN from './components/Me/FirstyearRN'

// function App() {
//   return (
//     <>
//     <WavecrazeSponser/>
//          <h1 className='organisingcomitee mt-[50px] font-bold text-center sm:text-[50px] vmd:text-[30px] mb:text-[40px]'>Organising Comitee</h1>
//           <FinalyearRN/>
//           <ThirdyearRn/>
//           <SeconYearRN/>
//           <FirstyearRN/>
//     </>
//   )
// }

// export default App



// svg {
// 	font-family: "Russo One", sans-serif;
// 	width: 100%; height: 100%;
// }
// svg text {
// 	animation: stroke 5s infinite alternate;
// 	stroke-width: 2;
// 	stroke: #365FA0;
// 	font-size: 100px;
// }
// @keyframes stroke {
// 	0%   {
// 		fill: rgba(72,138,204,0); stroke: rgba(54,95,160,1);
// 		stroke-dashoffset: 25%; stroke-dasharray: 0 50%; stroke-width: 2;
// 	}
// 	70%  {fill: rgba(72,138,204,0); stroke: rgba(54,95,160,1); }
// 	80%  {fill: rgba(72,138,204,0); stroke: rgba(54,95,160,1); stroke-width: 3; }
// 	100% {
// 		fill: rgba(72,138,204,1); stroke: rgba(54,95,160,0);
// 		stroke-dashoffset: -25%; stroke-dasharray: 50% 0; stroke-width: 0;
// 	}
// }

// .wrapper {background-color: #FFFFFF};
