import React from 'react';
import SadPuppy from '../components/SadPuppy';

const ErrorScreen: React.FC = () => {
  return (
    <div className='flex-column error-screen'>
       <SadPuppy /> 
      <h1>Something went wrong...</h1>
      <p>Page not found or you must be logged in to view this page.</p>
    </div>
  );
};

export default ErrorScreen;
