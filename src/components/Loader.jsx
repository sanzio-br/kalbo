import { Spinner } from "react-bootstrap"
export default function Loader(){
    return(
        <div className="loader">
            <Spinner animation="border" size="md"/>
        </div>
    )
}