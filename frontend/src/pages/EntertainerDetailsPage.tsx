import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Entertainer } from '../types/Entertainer';
import { fetchEntertainerById } from '../api/EntertainersAPI';
import EntertainerDetails from '../components/EntertainerDetails';
import UpdateEntertainerForm from '../components/UpdateEntertainerForm';

import { deleteEntertainer } from '../api/EntertainersAPI';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

function EntertainerDetailsPage() {
  const { id } = useParams();
  const [entertainer, setEntertainer] = useState<Entertainer | null>(null);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const navigate=useNavigate()

  useEffect(() => {
    const loadEntertainer = async () => {
      if (id) {
        const data = await fetchEntertainerById(parseInt(id));
        setEntertainer(data);
      }
    };
    loadEntertainer();
  }, [id]);

  const handleDelete = async (entertainerID: number) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this entertainer?');
    if (!confirmDelete) return;
  
    try {
      await deleteEntertainer(entertainerID);
      navigate('/EntertainersList'); 
    } catch (error) {
      alert('Failed to delete entertainer');
    }
  };

  return (
    <>
    <Navbar />
    <div className="container-fluid px-4">
      
      {entertainer && (
        <>
          {!showUpdateForm && (
            <>
              <EntertainerDetails entertainer={entertainer} />
              <button className="btn btn-warning mt-3" onClick={() => setShowUpdateForm(true)}>
                Update Entertainer
              </button>
              <button onClick={()=>handleDelete(entertainer.entertainerID!)}>Delete</button>
            </>
          )}

          {showUpdateForm && (
            <UpdateEntertainerForm
            entertainer={entertainer}
            onSuccess={async () => {
              if (entertainer && entertainer.entertainerID !== undefined) {
                const updated = await fetchEntertainerById(entertainer.entertainerID);
                setEntertainer(updated);
              }
              setShowUpdateForm(false);
            }}
            onCancel={() => setShowUpdateForm(false)}
          />
          
          
                                
          
          )}
        </>
        
        
      )}
    </div>
    </>
  );
}

export default EntertainerDetailsPage;
