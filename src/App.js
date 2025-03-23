import React from 'react';
import PageRoutes from './AllRoutes/PageRoutes';

function App() {
  // const [loading, setLoading] = useState(true);

  // const handleLoaded = () => {
  //   setLoading(false);
  // };

  return (
    <>
    {/* {loading ? <Loader onLoaded={handleLoaded} /> : <Home />} */}
    <PageRoutes/>
    </>
  );
}
export default App;