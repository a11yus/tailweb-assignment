// src/components/Home.js
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addStudent } from "../redux/actions/studentActions";
import StudentList from "./StudentList";
import AddStudentModal from "./AddStudentModal";
import { Button } from "@mui/material";

const Home = () => {
  const students = useSelector((state) => state.students.list);
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);

  const handleAddStudent = (student) => {
    dispatch(addStudent(student));
  };

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Student List 
      </h1>
      <Button
        variant="contained"
        onClick={() => setModalOpen(true)}
        style={{ marginLeft: "1.8rem" }}
      >
        Add Student
      </Button>
      <StudentList students={students} />
      <AddStudentModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onAddStudent={handleAddStudent}
      />
    </div>
  );
};

export default Home;
