import { useState } from 'react';
import { Entertainer } from '../types/Entertainer';
import { addEntertainer } from '../api/EntertainersAPI';
interface NewEntertainerFormProps {
  onSuccess: () => void;
  onCancel: () => void;
}
const NewEntertainerForm = ({ onSuccess, onCancel }: NewEntertainerFormProps) => {
  const [formData, setFormData] = useState<Entertainer>({
    
    entStageName: '',
    entSSN: '',
    entStreetAddress: '',
    entCity: '',
    entState: '',
    entZipCode: '',
    entPhoneNumber: '',
    entWebPage: '',
    entEmailAddress: '',
    dateEntered: new Date().toISOString().split('T')[0],
    
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addEntertainer(formData);
    onSuccess();
  };
  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow bg-light">
  <h2 className="mb-4 text-center">Add New Entertainer</h2>
  
  <div className="row g-3">
    <div className="col-md-6">
      <label className="form-label">Stage Name</label>
      <input type="text" name="entStageName" value={formData.entStageName} onChange={handleChange} className="form-control" />
    </div>

    <div className="col-md-6">
      <label className="form-label">SSN</label>
      <input type="text" name="entSSN" value={formData.entSSN} onChange={handleChange} className="form-control" />
    </div>

    <div className="col-md-6">
      <label className="form-label">Street Address</label>
      <input type="text" name="entStreetAddress" value={formData.entStreetAddress} onChange={handleChange} className="form-control" />
    </div>

    <div className="col-md-3">
      <label className="form-label">City</label>
      <input type="text" name="entCity" value={formData.entCity} onChange={handleChange} className="form-control" />
    </div>

    <div className="col-md-3">
      <label className="form-label">State</label>
      <input type="text" name="entState" value={formData.entState} onChange={handleChange} className="form-control" />
    </div>

    <div className="col-md-3">
      <label className="form-label">Zip Code</label>
      <input type="text" name="entZipCode" value={formData.entZipCode} onChange={handleChange} className="form-control" />
    </div>

    <div className="col-md-3">
      <label className="form-label">Phone Number</label>
      <input type="text" name="entPhoneNumber" value={formData.entPhoneNumber} onChange={handleChange} className="form-control" />
    </div>

    <div className="col-md-6">
      <label className="form-label">Web Page</label>
      <input type="text" name="entWebPage" value={formData.entWebPage} onChange={handleChange} className="form-control" />
    </div>

    <div className="col-md-6">
      <label className="form-label">Email</label>
      <input type="text" name="entEmailAddress" value={formData.entEmailAddress} onChange={handleChange} className="form-control" />
    </div>
  </div>

  <div className="mt-4 d-flex justify-content-between">
    <button type="submit" className="btn btn-success">Add Entertainer</button>
    <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancel</button>
  </div>
</form>

  );
};
export default NewEntertainerForm; 