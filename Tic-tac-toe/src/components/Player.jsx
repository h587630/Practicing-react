import PropTypes from 'prop-types'; 
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
export default function Player({ initialname, symbol, isActive }) {
    const [name, setName] = useState(initialname);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick(){
        setIsEditing(editing => !editing); // toggle editing mode
    }

    let playerName = <span className="player-name">{name}</span>;
    let btnCaption = 'Edit';

    function handleEditingName(event){
        setName(event.target.value);
    }

    if (isEditing) {
        playerName = <input type="text" required value={name} onChange={handleEditingName} />;
        btnCaption = 'Save';
    }

    return (
        <>
            <li className={isActive ? 'active' : undefined}>
                <span className="player">
                    {playerName}
                    <span className="player-symbol">{symbol}</span>
                </span>
                <button className="button" onClick={handleEditClick}>{btnCaption}</button>
            </li>
        </>
    );
}

// Define PropTypes outside the component
Player.propTypes = {
  initialname: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
};
