
import { EntertainerSummary } from "../api/EntertainersAPI";
import { useNavigate } from "react-router-dom";

function EntertainerList({ summaries }: { summaries: EntertainerSummary[] }) {

  const navigate = useNavigate();




  return (
    <div className="container">
      <h2>Entertainers</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Stage Name</th>
            <th>Booking Count</th>
            <th>Last Booked</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {summaries.map((ent) => (
            <tr key={ent.entertainerID}>
              <td>{ent.entStageName}</td>
              <td>{ent.bookingCount}</td>
              <td>{ent.lastBookedDate || "Never"}</td>
              <td>
                <button
                  className="btn btn-info"
                  onClick={() => navigate(`/entertainers/${ent.entertainerID}`)}
                >
                  Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EntertainerList;