// src/components/AddStudentModal.js
import React, { useState } from 'react';
import { Modal, Box, TextField, Button } from '@mui/material';

const AddStudentModal = ({ open, onClose, onAddStudent }) => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [marks, setMarks] = useState('');

  const handleSubmit = () => {
    if (name && subject && marks) {
      onAddStudent({ name, subject, marks });
      onClose();
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)', 
          width: 400, 
          bgcolor: 'background.paper', 
          boxShadow: 24, 
          p: 4 
        }}
      >
        <h2>Add New Student</h2>
        <br />
        <TextField
          fullWidth
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <TextField
          fullWidth
          label="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <br /><br />
        <TextField
          fullWidth
          type='number'
          label="Marks"
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
        />
        <br />
        <br />
        <div style={{
            display: 'flex',
            justifyContent: 'center',
        }}>

        <Button variant="outlined" color="success" onClick={handleSubmit}>Add Student</Button>
        </div>
      </Box>
    </Modal>
  );
};

export default AddStudentModal;
