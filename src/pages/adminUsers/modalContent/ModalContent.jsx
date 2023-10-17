import React from 'react';

const ModalContent = ({user}) => {
    return (
        <div>
            <h2>{user.lastname}</h2>
            <h2>{user.firstname}</h2>
            <h2>{user.email}</h2>

        </div>
    );
};

export default ModalContent;