import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AddSemester from './components/collegeadmin/AddSemester';
import SemesterView from './components/collegeadmin/SemesterView';
import ModifyClassesDays from './components/collegeadmin/ModifyClassesDays';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/addsemester" element={<AddSemester />} />
          <Route path="/listsemester" element={<SemesterView/>} />
          <Route path="/modifyclassesdays" element={<ModifyClassesDays/>} />
          <Route path="/" element={<p>Hello</p>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
