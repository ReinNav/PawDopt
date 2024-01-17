import DogListing from '../components/DogListing';
import { useDogs } from '../domain/hooks';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import '../stylesheets/main.css';
import SadPuppy from '../components/SadPuppy';

function MainScreen() {
  const { dogs, state } = useDogs();
  const navigate = useNavigate()

  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  const handleAddClick = () => {
    navigate(`/dogs/add`);
  };

  if (state === 'loading') return <p className="state-msg">Loading items…</p>;
  if (state === 'error') {
    return (
      <div>
        <SadPuppy />
        <p className="state-msg-error">Error in fetching dog listings.<br></br>Please try reloading the page or try again later.</p>
      </div>
    );
  }
  return (
    <div className="main-screen">
      {state === 'success' && dogs.length > 0 && (
        <>
          <h1 className="list-heading">Adopt your new best friend!</h1>
          <div className="dog-list-container flex-row">
            {dogs.map(dog => (
              <DogListing key={dog.id} {...dog} />
            ))}
          </div>
          {isLoggedIn && (
                    <div className="add-btn-container">
                    <button className='btn add-btn' onClick={handleAddClick}>Add dog</button>
                  </div>
        )}
        </>)}
       {state === 'success' && dogs.length === 0 && (
        <div className="no-dogs-message">
          <p>There are no dogs currently. Click below to add a new one!</p>
          {isLoggedIn && (
                    <button className='btn add-btn center' onClick={handleAddClick}>Add dog</button>
        )}
        </div>
      )}
      
    </div>
  );
}

export default MainScreen;
