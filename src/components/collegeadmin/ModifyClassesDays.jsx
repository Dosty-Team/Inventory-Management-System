import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './ModifyClassesDays.css';

const localizer = momentLocalizer(moment);

const ModifyClassesDays = () => {
    const [events, setEvents] = useState([]);

    const handleSelectSlot = ({ start, end }) => {
        const title = window.prompt('New Holiday name');
        if (title) {
            setEvents(prevEvents => [...prevEvents, { start, end, title }]);
        }
    };

    const handleSelectEvent = (event) => {
        const confirmDelete = window.confirm(`Do you want to delete the holiday "${event.title}"?`);
        if (confirmDelete) {
            setEvents(prevEvents => prevEvents.filter(e => e !== event));
        }
    };

    return (
        <div className="calendar-container">
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                selectable
                onSelectSlot={handleSelectSlot}
                onSelectEvent={handleSelectEvent}
                style={{ height: 500 }}
            />
        </div>
    );
};

export default ModifyClassesDays;
