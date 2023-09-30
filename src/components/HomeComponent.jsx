import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const HomeComponent = ()=> {
let navigate = useNavigate();

    return (
        <div className="homepage">
            <div className="home w-100 min-vh-100">
                <Container className="text-center">
                    <Row >
                        <Col>
                            <h1 className="fw-bold">Tugas Andre</h1>
                            
                        </Col>
                    </Row>
                    <Row className="py-3">
                        <Col>
                            <button 
                            onClick={() => navigate('/array')}
                            className="btn btn-success btn-lg">
                                1. Array Test
                            </button>
                        </Col>
                    </Row>
                    <Row className="py-3">
                        <Col>
                            <button onClick={() => navigate('/star')} 
                            className="btn btn-primary btn-lg" >
                                2. Stair Test
                            </button>
                        </Col>
                    </Row>
                    <Row className="py-3">
                        <Col>
                            <button onClick={() => navigate('/api')} 
                            className="btn btn-danger btn-lg">
                                3. Api Test
                            </button>
                        </Col>
                    </Row>

                </Container>
            </div>
        </div>
    )
}

export default HomeComponent