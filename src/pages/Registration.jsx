import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Registration</h2>
      <label style={{ display: 'block', marginBottom: '10px' }}>Full Name:</label>
      <input
        type="text"
        name="fullName"
        value={formData.fullName}
        // eslint-disable-next-line no-irregular-whitespace
        onChange={(e) => setFormData({ ...formData, fullName: e.target.value   
 })}
        placeholder="Full Name"
        required
        style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
      />
      <button type="submit" style={{ backgroundColor: '#007bff', color: '#fff',
       padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer' 
 }}>Register</button>
    </form>
  );
}

export default RegistrationForm;