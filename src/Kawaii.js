import { Mug } from 'react-kawaii'

const Kawaii = (props) => {
    return (
        <div className="section">
                <Mug  mood={props.mood} />
        </div>
        )
    }

export default Kawaii;