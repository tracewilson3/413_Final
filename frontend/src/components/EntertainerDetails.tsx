// EntertainerDetails.tsx
import { Entertainer } from "../types/Entertainer";


type Props = {
    entertainer: Entertainer;
  };
  
  function EntertainerDetails({ entertainer }: Props) {
    

  return (
    <div className="container">
      <h2>Entertainer Details</h2>
      <ul className="list-group">
        <li className="list-group-item"><strong>Stage Name:</strong> {entertainer.entStageName}</li>
        <li className="list-group-item"><strong>SSN:</strong> {entertainer.entSSN}</li>
        <li className="list-group-item"><strong>Address:</strong> {entertainer.entStreetAddress}, {entertainer.entCity}, {entertainer.entState} {entertainer.entZipCode}</li>
        <li className="list-group-item"><strong>Phone:</strong> {entertainer.entPhoneNumber}</li>
        <li className="list-group-item"><strong>Email:</strong> {entertainer.entEmailAddress}</li>
        <li className="list-group-item"><strong>Web Page:</strong> {entertainer.entWebPage}</li>
        <li className="list-group-item"><strong>Date Entered:</strong> {entertainer.dateEntered}</li>
      </ul>
    </div>
  );
}

export default EntertainerDetails;