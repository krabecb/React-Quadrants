function Button(props) {
    return(
        <div className="section kawaii">
            <button onClick={props.func}>
                Click me!
            </button>
        </div>
    )
}

export default Button;
