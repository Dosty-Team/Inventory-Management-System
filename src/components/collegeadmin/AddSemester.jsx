import React, { useState } from 'react';
import './AddSemester.css';
import axios from 'axios';
// import fs from 'fs';
const AddSemester = () => {
    //semester faculty:
    const [faculty, setFaculty] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (faculty && startDate && endDate) {
            try {
                const response = await axios.post('http://localhost:5000/v1/addsemester', {
                    faculty,
                    startDate,
                    endDate
                });
                if (response.status === 201) {
                    alert(`Semester ${faculty} added successfully!`);
                    setFaculty('');
                    setStartDate('');
                    setEndDate('');
                } else {
                    alert('Failed to add semester. Please try again.');
                }
            } catch (error) {
                console.error('Error adding semester:', error);
                alert('An error occurred. Please try again.');
            }
        } else {
            alert('Please fill in all fields.');
        }
    };
    // const appendToJsonFile = (data) => {
    //     // Read existing data from JSON file
    //     fs.readFile('semesters.json', 'utf8', (err, jsonString) => {
    //         if (err) {
    //             console.log('Error reading file:', err);
    //             return;
    //         }
    //         let semesters = [];
    //         if (jsonString) {
    //             semesters = JSON.parse(jsonString);
    //         }
    //         // Append new data to existing data
    //         semesters.push(data);
    //         // Write updated data back to JSON file
    //         fs.writeFile('', JSON.stringify(semesters, null, 2), 'utf8', (err) => {
    //             if (err) {
    //                 console.log('Error writing file:', err);
    //             } else {
    //                 console.log('Data appended to file successfully!');
    //             }
    //         });
    //     });
    // };
    return (
        <div className="add-semester-container">
            <h2>Add New Semester</h2>
            <form onSubmit={handleSubmit}>
            <label>
                    Faculty:
                    <select 
                        value={faculty} 
                        onChange={(e) => setFaculty(e.target.value)}
                    >
                        <option value="">Select Faculty</option>
                        <option value="BIM">BIM</option>
                        <option value="Bsc CSIT">Bsc CSIT</option>
                        <option value="BCA">BCA</option>
                        <option value="BIT">BIT</option>
                        <option value="BBA">BBA</option>
                        <option value="BBS">BBS</option>
                    </select>
                </label>
                <label>
                    Start Date:
                    <input 
                        type="date" 
                        value={startDate} 
                        onChange={(e) => setStartDate(e.target.value)} 
                    />
                </label>
                <label>
                    End Date:
                    <input 
                        type="date" 
                        value={endDate} 
                        onChange={(e) => setEndDate(e.target.value)} 
                    />
                </label>
                <button type="submit">Add Semester</button>
            </form>
        </div>
    );
};

export default AddSemester;
