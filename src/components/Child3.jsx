import { Context } from "../Context"
import { useContext } from "react"

const Child3 = (props) => {

    const {message, setMessage} = useContext(Context);

    return (
        <div>
            <h1>Child3</h1>
            <h2>Information from parent---{message}</h2>
        </div>
    )
}

export default Child3