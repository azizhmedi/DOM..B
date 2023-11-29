

const PlayerCard = ({ name, team, nationality, jerseyNumber, age, image }) => {
  return (
    <div className="player-card">
    <img  src={image} alt="" className="player-image" />
    <div className="card-content">
      <h3 className="player-name">{name}</h3>
    
      <img style={{ width: '50px' }} src={team} alt="" />
      <p className="player-info"> #{jerseyNumber}</p>
       
      <img style={{ width: '50px' }} src={nationality} alt="" />
      
      
      <p className="player-info"> {age} years</p>
      
    </div>
  </div>
  );
};


export default PlayerCard;
//create playercard component i can use for all palyersData
//create arrow function that take object parameter that return the card with this parameter
