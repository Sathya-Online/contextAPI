


const Movie = (props) => {
    return (
        <div className="movie col">
            {/* <div className="movie__poster">
                <img src="" alt="Image"/>
            </div> */}
            <div className="movie__title">{props.title}</div>
            <div className="movie__description">{props.description}</div>
        </div>
    )
}

export default Movie