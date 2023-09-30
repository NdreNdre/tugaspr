import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ArrayComponent(){
let navigate = useNavigate();
// const [panjang, setPanjang] = useState(0);
// const [arr2, setArr] = useState([]);
const [hasil, setHasil] = useState(0);
let panjangArray = 0;
let arr = [];
let temp = 0;

function handleSubmit(e){
    e.preventDefault();
    panjangArray = e.target.datas.value
    hitungArray();
    e.target.datas.value = "";
}

function hitungArray(){
    for (let i = 0; i < panjangArray; i++) {
        const num = Number(prompt('masukkan angka ke ' +(i+1) +' : '))
        arr.push(num);
        temp += arr[i];
    }
    setHasil(temp);
    console.log('Panjang Array : ' + panjangArray)
    console.log(arr); 
}
    return (
        <div className="arraypage">
            <div className="array w-100 min-vh-100">
                <Container> 
                    <Row>
                        <Col>
                            <h1 className="fw-bold text-center">Tugas Array</h1>
                        </Col>
                    </Row>
                    <div className="canvas bg-dark">
                        <Form className="p-4" onSubmit={handleSubmit}>
                            <Form.Group>
                                <Row>
                                    <Col>
                                        <Form.Label className="text-light">Panjang Array</Form.Label>
                                    </Col>
                                </Row>
                                <Row className="py-3">
                                    <Col className="col-md-3">
                                        <Form.Control 
                                            placeholder="masukkan panjang array...."
                                            type="number"
                                            name="datas"
                                        ></Form.Control>
                                    </Col>
                                    <Col className="col-md-2">
                                        <Button type="submit">Submit</Button>
                                    </Col>
                                </Row>
                                <h2 className="text-light">Hasil dari Penjumlahan Array = {hasil}</h2>
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

export default ArrayComponent

