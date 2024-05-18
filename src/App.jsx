import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { ThreeCircles } from 'react-loader-spinner';

const Events = lazy(() => import('./pages/Events/Events'));
const Participants = lazy(() => import('./pages/Participants/Participants'));
const Registration = lazy(() => import('./pages/Registration'));

function App() {
  return (
    <>
      <Suspense
        fallback={
          <div className="loader">
            <ThreeCircles
              visible={true}
              height="100"
              width="100"
              color="#03AED2"
              ariaLabel="three-circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Events />} />
          <Route path=":id/participants" element={<Participants />} />
          <Route path=":id/registration" element={<Registration />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
