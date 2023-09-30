
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function StarComponent(){
    let navigate = useNavigate();
    let panjangArray = 0;
    let string = "";

    function handleSubmit(e){
        e.preventDefault();
        panjangArray = e.target.datas.value;
        CreateStair();
        e.target.datas.value = "";
        
    }

    function CreateStair(){
        for(let i = 1; i <= panjangArray; i++) { 
            for(let j = 0; j < panjangArray-i; j++) { 
                string += " ";
            }
            for(let k = 0; k < i; k++){
                string += "#";
            }
            string += "\n";
            
        }
        console.log(panjangArray);
        console.log(string);

        return <h1>{string}</h1>
        
        
    }
    
    return (

        <div className="starpage">
            <div className="star w-100 min-vh-100">
                <Container>
                    <Row>
                        <Col>
                            <h1 className="fw-bold text-center">Tugas Stair/Star</h1>
                        </Col>
                    </Row>
                    <div className="canvas bg-dark">
                        <Form className="p-4" onSubmit={handleSubmit}>
                            <Form.Group>
                                <Row>
                                    <Col>
                                        <Form.Label className="text-light">Panjang Stair</Form.Label>
                                    </Col>
                                </Row>
                                <Row className="py-3">
                                    <Col className="col-md-3">
                                        <Form.Control 
                                            placeholder="masukkan panjang stair...."
                                            type="number"
                                            name="datas"
                                        ></Form.Control>
                                    </Col>
                                    <Col className="col-md-2">
                                        <Button type="submit">Submit</Button>
                                    </Col>
                                </Row>
                                <p className="text-light">*jawaban di console (☞ﾟヮﾟ)☞</p>
                            </Form.Group>
                        </Form>
                        <Row className="ps-4">
                            <Col>
                                <Button onClick={() => navigate('/tugaspr')} className="btn btn-danger btn-lg">Kembali</Button>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default StarComponent