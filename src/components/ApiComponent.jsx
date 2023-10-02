import { Container, Row, Col, Form, Button ,FormControl} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'
import axios from 'axios';


function ApiComponent(){
let navigate = useNavigate();

const [users,setUsers] = useState([]);
const [userDetail, setUserDetail] = useState([]);
const [search, setSearch] = useState("");
const [debounceValue] = useDebounce(search, 3000);
const [value, setValue] = useState("");


    const getUser = async () => {
        const response =  await (fetch("https://api.github.com/users"));
        const FinalData =  await response.json();
        setUsers(FinalData);
    }

    const getUserDetail = async () => {
        const res = await axios.get(`https://api.github.com/users/${value}`)
        return res.data;
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setValue(e.target.datauser.value);
    }

    useEffect(() => {
        getUser();
    }, [])

    useEffect(() => {
        getUserDetail().then((res) =>{
            setUserDetail(res);
        });
    }, [value])



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
                            </Form.Group>
                    </Form>
                    <Row>
                                <Col className="user-list col-xl-4 col-md-7 col-sm-10">
                                <table className="tbl-main text-light">
                                    <thead>
                                        <tr>
                                        <th>Gambar</th>
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
                                            <td>{data.login}
                                            <Form onSubmit={handleSubmit}>
                                                <Form.Group>
                                                <FormControl type="hidden" name="datauser" defaultValue={data.login}></FormControl>
                                                <button>Klik Untuk Detail</button>
                                                </Form.Group>
                                                </Form></td>
                                            </tr>
                                        )
                                        })
                                    }
                                    
                                    </tbody>
                                </table>
                                </Col>
                                <Col className="user-detail">
                                <div className="user-detail-canvas">
                                    <Row>
                                        <Col>
                                        <h2>User Detail</h2>
                                        </Col>

                                    </Row>
                                    <Row>
                                        <Col className="gambarmukadetail">
                                        <img src={userDetail.avatar_url} alt="" />
                                        </Col>
                                        <Col>
                                        <p>Username</p>
                                        <p>Nama Lengkap</p>
                                        <p>Lokasi</p>
                                        <p>Repository</p>
                                        <p>Following</p>
                                        <p>Follower</p>
                                        <p>Blog</p>
                                        </Col>
                                        <Col>
                                        <p>: {userDetail.login}</p>
                                        <p>: {userDetail.name}</p>
                                        <p>: {userDetail.location}</p>
                                        <p>: {userDetail.public_repos}</p>
                                        <p>: {userDetail.following}</p>
                                        <p>: {userDetail.followers}</p>
                                        <p>: {userDetail.blog}</p>
                                        </Col>
                                    </Row>

                                    </div>
                                </Col>
                            </Row>
                        
                </div>
            </Container>    
        </div>
    )

}

export default ApiComponent