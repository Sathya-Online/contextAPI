import Child3 from "./Child3"
import { Context } from "../Context"
import { useContext } from "react"

const Child2 = (props) => {

    const {movieList} = useContext(Context);

    return (
        <div>
            <h1>Child2</h1>
            <h2>Information from parent---</h2>
            <ul>
                {movieList.map(movie => <li>{movie.title}</li>)}
            </ul>
            <Child3 />
        </div>
    )
}

export default Child2