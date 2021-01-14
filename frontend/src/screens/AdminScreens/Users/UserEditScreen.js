import React, { useEffect, useState } from 'react';
import {
    Button,
    Col,
    Container,
    Form,
    ListGroup,
    Row,
    Table,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { updateUser, getUserDetails } from '../../../actions/userAction';
import Loader from '../../../components/Loader';
import {
    USER_DETAILS_RESET,
    USER_UPDATE_RESET,
} from '../../../constants/userConstant';
const UserListScreen = ({ history, match }) => {
    const userId = match.params.id;

    const [fullName, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isActive, setIsActive] = useState(false);

    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const userDetails = useSelector((state) => state.userDetails);
    const { loading, error, user } = userDetails;

    const userUpdate = useSelector((state) => state.userUpdate);
    const {
        loading: loadingUpdate,
        error: errorUpdate,
        success: successUpdate,
    } = userUpdate;

    useEffect(() => {
        if (successUpdate) {
            dispatch({ type: USER_UPDATE_RESET });
            history.push('/userlist');
        } else {
            setName(user.fullName);
            setEmail(user.email);
            setIsActive(user.isActive);
        }
    }, [dispatch, history, userId, user, successUpdate]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(updateUser({ _id: userId, fullName, email, isActive }));
    };

    const backHandler = (e) => {
        e.preventDefault();
        dispatch({ type: USER_DETAILS_RESET });
        history.push('/userlist');
    };

    return (
        <div>
            {loading && <Loader>Loading</Loader>}
            {userInfo ? (
                <Container fluid className='admin-main'>
                    <Row className='h-100'>
                        <Col sm={2} className='admin-sidebar'>
                            <ListGroup
                                as='ul'
                                className='pl-1 pt-5 sidebar-content'
                            >
                                <Link to='/admin'>
                                    <ListGroup.Item as='li'>
                                        <span>
                                            <i className='fas fa-clipboard' />{' '}
                                            Dashboard
                                        </span>
                                    </ListGroup.Item>
                                </Link>
                                <ListGroup.Item as='li' active>
                                    <span>
                                        <i className='fas fa-users' />
                                        Users
                                    </span>
                                </ListGroup.Item>
                                <Link to='/movielist'>
                                    <ListGroup.Item as='li'>
                                        <span>
                                            <i className='fas fa-film' /> Movies
                                        </span>
                                    </ListGroup.Item>
                                </Link>{' '}
                                <Link to='/order-list'>
                                <ListGroup.Item as='li'>
                                    <span>
                                        <i className='fas fa-shopping-cart' />
                                        Orders
                                    </span>
                                </ListGroup.Item></Link>
                            </ListGroup>
                        </Col>
                        <Col sm={10} className='admin-main-col'>
                            <Button
                                type='submit'
                                variant='primary'
                                onClick={backHandler}
                                className='m-1 mt-2'
                            >
                                Back
                            </Button>
                            <Form className='form-edit'>
                                <Form.Group controlId='name'>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type='name'
                                        placeholder='Enter name'
                                        value={fullName}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                    ></Form.Control>
                                </Form.Group>

                                <Form.Group controlId='email'>
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control
                                        type='email'
                                        placeholder='Enter email'
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    ></Form.Control>
                                </Form.Group>

                                <Form.Group controlId='isactive'>
                                    <Form.Check
                                        type='checkbox'
                                        label='Is Active'
                                        checked={isActive}
                                        onChange={(e) =>
                                            setIsActive(e.target.checked)
                                        }
                                    ></Form.Check>
                                </Form.Group>

                                <Button
                                    type='submit'
                                    variant='primary'
                                    onClick={submitHandler}
                                >
                                    Update
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            ) : (
                <Redirect to='/login'></Redirect>
            )}
        </div>
    );
};

export default UserListScreen;
