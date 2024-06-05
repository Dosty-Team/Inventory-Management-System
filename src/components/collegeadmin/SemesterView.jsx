import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SemesterView.css';

const SemesterView = () => {
    const [semesters, setSemesters] = useState([]);

    useEffect(() => {
        const fetchSemesters = async () => {
            try {
                const response = await axios.get('http://localhost:5000/v1/getsemesters');
                setSemesters(response.data);
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching semesters:', error);
            }
        };
        fetchSemesters();
    }, []);

    return (
        <div className="semester-list-container">
            <h2>Semesters</h2>
            <ul>
                {semesters.map((semester) => (
                    <li key={semester._id}>
                        <span className="label">Faculty:</span>
                        <span className="faculty">{semester.faculty}</span>
                        <span className="label">Start Date:</span>
                        <span className="dates">{semester.startDate}</span>
                        <span className="label">End Date:</span>
                        <span className="dates">{semester.endDate}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SemesterView;
