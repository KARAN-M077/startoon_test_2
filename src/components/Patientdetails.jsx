import React from 'react';
import './PatientDetails.css'; // Import the CSS file

const PatientDetails = () => {
  return (
    <div className="patient-details">
      <h6>View patient</h6>
      <div className="patient-header">
        <div className="avatar">S</div>
        <div>
          <h6>S.MeenA, F/23</h6>
          <p>Patient ID: 87 20200727153457</p>
        </div>
      </div>
      <div className="goal-box">
        <p>Goal reached</p>
        <p>40%</p>
      </div>
      <hr className="divider" />
      <div className="grid-container">
        <div className="grid-item">
          <strong>Phone no.:</strong>
          <span>8022334455</span>
        </div>
        <div className="grid-item">
          <strong>Mail ID:</strong>
          <span>meenaarabinsachin2@gmail.com</span>
        </div>
        <div className="grid-item">
          <strong>Affected side:</strong>
          <span>Bilateral</span>
        </div>
        <div className="grid-item">
          <strong>Condition:</strong>
          <span>Ortho</span>
        </div>
        <div className="grid-item">
          <strong>Speciality:</strong>
          <span>Osteoarthritis</span>
        </div>
      </div>
      <hr className="divider" />
      <div className="medical-history">
        <strong>Medical history:</strong> Hypertension, DM, Hypothyroidism
      </div>
    </div>
  );
};

export default PatientDetails;
