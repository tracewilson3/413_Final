import { useEffect, useState } from 'react'

import '../App.css'
import EntertainerList from '../components/EntertainerList'
import NewEntertainerForm from '../components/newEntertainerForm';
import { EntertainerSummary } from '../api/EntertainersAPI';

import { fetchEntertainerSummaries } from '../api/EntertainersAPI';
import Navbar from '../components/Navbar';



function EntertainersPage() {
  const [showForm, setShowForm]= useState(false);
  const [summaries, setSummaries] = useState<EntertainerSummary[]>([]);

useEffect(() => {
  fetchEntertainerSummaries().then(setSummaries);
}, []);
  


    return(
        <>
        <Navbar />
    <div className="container-fluid px-4">
        
        

      
      <div className="col-md-9"></div>
      <EntertainerList summaries={summaries} />


      {!showForm && (
            <button className="btn btn-success mb-3"
            onClick={()=>setShowForm(true)}
            >
                Add Entertainer
            </button>
        )}
        {showForm && (
            <NewEntertainerForm 
            onSuccess={async () => {
              const updated = await fetchEntertainerSummaries();
              setSummaries(updated);
              setShowForm(false);
            }}
            onCancel={() => setShowForm(false)}
          />
        )}

    </div>
      
      
      

    </>
    )
}
export default EntertainersPage;