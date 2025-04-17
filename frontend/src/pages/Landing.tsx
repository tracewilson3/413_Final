import { useNavigate } from 'react-router';
import '../App.css';

import WelcomeBand from '../components/WelcomeBand';
import Navbar from '../components/Navbar';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="container-fluid px-0">
        <WelcomeBand />

        <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '60vh' }}>
          <p className="lead fs-4 text-secondary mb-4">Are you ready?</p>

          <button
            className="btn btn-info btn-lg shadow"
            onClick={() => navigate('/EntertainersList')}
          >
            Entertainers Roster
          </button>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
