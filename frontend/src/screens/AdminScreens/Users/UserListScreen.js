import React, { useEffect } from 'react';
import { Button, Col, Container, ListGroup, Row, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { listUsers, getUserDetails } from '../../../actions/userAction';
import Loader from '../../../components/Loader';
const UserListScreen = ({ history }) => {
    const dispatch = useDispatch();

    const userList = useSelector((state) => state.userList);
    const { loading, error, users } = userList;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {
        if (userInfo && userInfo.isAdmin) {
            dispatch(listUsers());
        } else {
            history.push('/login');
        }
    }, [dispatch, history, userInfo]);

    const editHandler = (id) => {
        dispatch(getUserDetails(id));
        history.push(`/user/${id}`);
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
                                    </ListGroup.Item>
                                </Link>
                            </ListGroup>
                        </Col>
                        <Col sm={10} className='admin-main-col'>
                            <div className='user-table mt-2 ml-4'>
                                <Table
                                    variant='dark'
                                    striped
                                    bordered
                                    hover
                                    className='table-sm '
                                >
                                    <thead>
                                        <tr className='col-center'>
                                            <th className='col-user-table'>
                                                Active
                                            </th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th className='col-user-table'>
                                                Admin
                                            </th>
                                            <th className='col-user-edit'>
                                                Edit Details
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users?.map((user) => (
                                            <tr
                                                key={user._id}
                                                className='col-center'
                                            >
                                                <td>
                                                    {user.isActive ? (
                                                        <i
                                                            className='fas fa-check'
                                                            style={{
                                                                color: 'green',
                                                            }}
                                                        ></i>
                                                    ) : (
                                                        <i
                                                            className='fas fa-times'
                                                            style={{
                                                                color: 'red',
                                                            }}
                                                        ></i>
                                                    )}
                                                </td>
                                                <td>{user.fullName}</td>
                                                <td>{user.email}</td>
                                                <td>
                                                    {user.isAdmin ? (
                                                        <i
                                                            className='fas fa-check'
                                                            style={{
                                                                color: 'green',
                                                            }}
                                                        ></i>
                                                    ) : (
                                                        <i
                                                            className='fas fa-times'
                                                            style={{
                                                                color: 'red',
                                                            }}
                                                        ></i>
                                                    )}
                                                </td>
                                                <td>
                                                    <div
                                                        className='user-edit'
                                                        onClick={() =>
                                                            editHandler(
                                                                user._id
                                                            )
                                                        }
                                                    >
                                                        <i className='fas fa-user-edit'></i>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
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
