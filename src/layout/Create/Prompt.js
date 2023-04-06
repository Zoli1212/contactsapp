import { useEffect, useState } from 'react';

function Prompt({ currentForm, formIsHalfFilled, message }) {
  const [userIsTryingToLeave, setUserIsTryingToLeave] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (formIsHalfFilled && !userIsTryingToLeave) {
        event.preventDefault();
        event.returnValue = message;
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [formIsHalfFilled, userIsTryingToLeave, message]);

  const handleLeavePage = () => {
    setUserIsTryingToLeave(false);
    window.history.back();
  };

  return (
    <>
      {userIsTryingToLeave && (
        <div className="prompt-container">
          <div className="prompt-message">{message}</div>
          <div className="prompt-buttons">
            <button onClick={() => setUserIsTryingToLeave(false)}>Stay</button>
            <button onClick={handleLeavePage}>Leave</button>
          </div>
        </div>
      )}
    </>
  );
}


export default Prompt;