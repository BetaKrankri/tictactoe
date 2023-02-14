import './Tile.css';

function Tile({ ownBy, onClick }) {

    return (
        <div className={`Tile ${ownBy}`} onClick={onClick}>
            
        </div>
    );
}

export default Tile;