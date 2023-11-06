import React from 'react';

const ViewAllAssignmentsCard = ({assignment}) => {
    return (
        <div>
            <p>{assignment?.difficulty}</p>
        </div>
    );
};

export default ViewAllAssignmentsCard;