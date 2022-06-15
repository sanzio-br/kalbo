import accordion from './accordance'
import { Accordion } from 'react-bootstrap'
const Accordance = ()=> {
    return (
        <div className="mb-4">
        <h1 className="h-4 headers">Read More</h1>
            {
                accordion.map(({ id, title, body }) => {
                    return (
                        <Accordion flush key={id}>
                            <Accordion.Item eventKey={id}>
                                <Accordion.Header>
                                    <h4>
                                        {title}
                                    </h4>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        {body}
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    )
                })
            }
        </div>
    )
}
export default Accordance;