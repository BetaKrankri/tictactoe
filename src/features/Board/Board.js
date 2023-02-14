import './Board.css';

function Board(props) {

    function Tile() {
        return (
            <div className='Tile'>
                x
            </div>
        );
    }




    return ( 
        <div  className='GameBoard'>
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
        </div>
     );
    }

export default Board;