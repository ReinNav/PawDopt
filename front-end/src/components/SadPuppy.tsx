import React from 'react';
import '../stylesheets/other.css'; 

const SadPuppy: React.FC = () => {
    return (
        <div className='sad-puppy-container'>
            <img className='sad-puppy' src='/sadpuppy.png' />
        </div>
        
    );
};

export default SadPuppy;