import { Backpack } from 'react-kawaii';

function BackpackQuad(props) {
        return(
        <div className="section kawaii">
            < Backpack mood={props.mood} />
        </div>
    )
}

export default BackpackQuad;
