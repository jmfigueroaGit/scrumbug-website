import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { logout } from '../actions/userAction';
import {
    Nav,
    Navbar,
    Container,
    Image,
    Row,
    Col,
    Dropdown,
    NavDropdown,
} from 'react-bootstrap';
const Header = () => {
    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const logoutHandler = () => {
        dispatch(logout());
    };
    return (
        <div className='header-main'>
            {userInfo ? (
                <div>
                    {' '}
                    {userInfo.isAdmin ? (
                        <Container fluid>
                            <Row>
                                <Col sm={9}>
                                    <Navbar.Brand>
                                        <Image
                                            src='/images/logo.png'
                                            className='header-logo'
                                        />{' '}
                                        <span className='span-admin'>
                                            | ADMIN
                                        </span>
                                    </Navbar.Brand>
                                </Col>
                                <Col sm={3}>
                                    <span className=' pl-5 pt-3 name-space'>
                                        <NavDropdown
                                            title={
                                                <span className='profile-name'>
                                                    <i className='fas fa-user profile-icon' />
                                                    {userInfo.fullName}
                                                </span>
                                            }
                                            id='username'
                                        >
                                            <div>
                                                <LinkContainer to='/profile'>
                                                    <NavDropdown.Item>
                                                        Profile
                                                    </NavDropdown.Item>
                                                </LinkContainer>
                                                <NavDropdown.Item
                                                    onClick={logoutHandler}
                                                >
                                                    Logout
                                                </NavDropdown.Item>
                                            </div>
                                        </NavDropdown>
                                    </span>
                                </Col>
                            </Row>
                        </Container>
                    ) : (
                        <Container fluid>
                            <Row>
                                <Col sm={9}>
                                    <Navbar.Brand>
                                        <Image
                                            src='/images/logo.png'
                                            className='header-logo'
                                        />
                                    </Navbar.Brand>
                                </Col>
                                <Col sm={3}>
                                    <span className=' pl-5 pt-3 name-space'>
                                        <NavDropdown
                                            title={
                                                <span className='profile-name'>
                                                    <i className='fas fa-user profile-icon' />
                                                    {userInfo.fullName}
                                                </span>
                                            }
                                            id='username'
                                        >
                                            <div>
                                                <LinkContainer to='/profile'>
                                                    <NavDropdown.Item>
                                                        Profile
                                                    </NavDropdown.Item>
                                                </LinkContainer>
                                                <LinkContainer to='/profile'>
                                                    <NavDropdown.Item>
                                                        Wishlist
                                                    </NavDropdown.Item>
                                                </LinkContainer>
                                                <NavDropdown.Item
                                                    onClick={logoutHandler}
                                                >
                                                    Logout
                                                </NavDropdown.Item>
                                            </div>
                                        </NavDropdown>
                                    </span>
                                </Col>
                            </Row>
                            <Row className='secondary-header py-3'>
                                <Col sm={6}>
                                    <Dropdown className='dropdown'>
                                        <Dropdown.Toggle className='dropdown-genres'>
                                            All Genres
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href='#/action-1'>
                                                Action
                                            </Dropdown.Item>
                                            <Dropdown.Item href='#/action-2'>
                                                Animation
                                            </Dropdown.Item>
                                            <Dropdown.Item href='#/action-3'>
                                                Comedy
                                            </Dropdown.Item>
                                            <Dropdown.Item href='#/action-1'>
                                                Crime
                                            </Dropdown.Item>
                                            <Dropdown.Item href='#/action-2'>
                                                Animation
                                            </Dropdown.Item>
                                            <Dropdown.Item href='#/action-3'>
                                                Comedy
                                            </Dropdown.Item>
                                            <Dropdown.Item href='#/action-1'>
                                                Drama
                                            </Dropdown.Item>
                                            <Dropdown.Item href='#/action-2'>
                                                Animation
                                            </Dropdown.Item>
                                            <Dropdown.Item href='#/action-3'>
                                                Comedy
                                            </Dropdown.Item>
                                            <Dropdown.Item href='#/action-1'>
                                                Experimental
                                            </Dropdown.Item>
                                            <Dropdown.Item href='#/action-2'>
                                                Fantasy
                                            </Dropdown.Item>
                                            <Dropdown.Item href='#/action-3'>
                                                Historical
                                            </Dropdown.Item>
                                            <Dropdown.Item href='#/action-1'>
                                                Horror
                                            </Dropdown.Item>
                                            <Dropdown.Item href='#/action-2'>
                                                Romance
                                            </Dropdown.Item>
                                            <Dropdown.Item href='#/action-3'>
                                                Science Fiction
                                            </Dropdown.Item>
                                            <Dropdown.Item href='#/action-1'>
                                                Experimental
                                            </Dropdown.Item>
                                            <Dropdown.Item href='#/action-2'>
                                                Thriller
                                            </Dropdown.Item>
                                            <Dropdown.Item href='#/action-3'>
                                                Western
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Col>
                                <Col sm={3}>
                                    <div className='d-flex column-order'>
                                        <h5>Wishlist</h5>
                                        <i className='fas fa-shopping-cart'></i>
                                    </div>
                                </Col>
                                <Col sm={3}>
                                    <div className='nav-search mx-3'>
                                        <form>
                                            <input
                                                type='text'
                                                placeholder='Search'
                                            />
                                            <button type='submit'>
                                                <i className='fa fa-search'></i>
                                            </button>
                                        </form>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    )}
                </div>
            ) : (
                <Container fluid>
                    <Row className='w-100'>
                        <Col sm={10}>
                            <Navbar.Brand>
                                <Image
                                    src='/images/logo.png'
                                    className='header-logo'
                                />
                            </Navbar.Brand>
                        </Col>
                        <Col sm={2}>
                            <LinkContainer to='/login'>
                                <Nav.Link className='header-link'>
                                    <h5 className='sign-in'>
                                        <i className='fas fa-user ' />
                                        Sign In
                                    </h5>
                                </Nav.Link>
                            </LinkContainer>
                        </Col>
                    </Row>
                </Container>
            )}
        </div>
    );
};

export default Header;
