import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'


function ApiComponent(){
let navigate = useNavigate();

    const [users,setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [debounceValue] = useDebounce(search, 3000);
    console.log(debounceValue);


    const getUser = async () => {
        const response =  await (fetch("https://api.github.com/users"));
        const FinalData =  await response.json();
        setUsers(FinalData);
    }

    useEffect(() => {
        getUser();
    }, [])


    return (
        <div className="apipage">
            <Container className="api w-100 min-vh-100">
                <Row>
                    <Col>
                        <h1 className="fw-bold text-center">Tugas API</h1>
                    </Col>
                </Row>
                <div className="canvas bg-dark">
                    <Form className="p-4 text-center">
                        <Form.Group>
                            <Row>
                                <Col>
                                    <Form.Label className="text-light">Cari User</Form.Label>
                                </Col>
                            </Row>
                            <Row>
                                <Col>                      
                                    <Form.Control onChange={(e) => setSearch(e.target.value.toLowerCase())} placeholder='Search Username...' className="mb-4">
                                    </Form.Control>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                <table className="tbl-main text-light">
                                    <thead>
                                        <tr>
                                        <th>Profile Pict</th>
                                        <th>Username</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        users.filter((data) => {
                                        return search === '' ? data : data.login.includes(search);  
                                        }).map((data) => {
                                        return (
                                            <tr key={data.id}>
                                            <td><img src={data.avatar_url} alt="gambar user" className='gambarMuka'/></td>
                                            <td>{data.login}</td>
                                            </tr>
                                        )
                                        })
                                    }
                                    </tbody>
                                </table>
                                </Col>
                            </Row>
                        </Form.Group>
                    </Form>
                </div>
            </Container>    
        </div>
    )

}

export default ApiComponent