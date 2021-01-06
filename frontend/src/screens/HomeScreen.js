import React from 'react';
import { Button, Carousel, Col, Container, Row, Card } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
const HomeScreen = () => {
    const userLogin = useSelector((state) => state.userLogin);
    const { loading, error, userInfo } = userLogin;
    return (
        <div>
            {userInfo ? (
                <Container fluid>
                    <Carousel>
                        <Carousel.Item interval={2000}>
                            <div>
                                <img
                                    className='image-slider'
                                    src='https://img.cinemablend.com/filter:scale/quill/0/4/e/a/3/2/04ea32c2f31065db125758c973a5ff44adb45ff3.jpg?fw=1200'
                                    alt='First slide'
                                />
                                <img
                                    className=' image-slider-overlay'
                                    src='/images/black.jpg'
                                    alt='First slide'
                                />
                            </div>
                            <Carousel.Caption className='slider-caption'>
                                <h5>Duration: 2hours 58mins</h5>
                                <Row>
                                    <Col xs={3} className='review'>
                                        <h5>
                                            <i class='fas fa-star' />
                                            9.5
                                        </h5>
                                    </Col>
                                    <Col xs={3} className='rating'>
                                        <h5>
                                            <i
                                                class='fa fa-film'
                                                aria-hidden='true'
                                            />{' '}
                                            PG
                                        </h5>
                                    </Col>
                                    <Col xs={6} className='rating'>
                                        <h5>Action, Adventure, Sci-Fi</h5>
                                    </Col>
                                </Row>
                                <div className='movie-title'>
                                    <h1>Avengers: Endgame</h1>
                                    <p>
                                        Avengers: Infinity War is a 2018
                                        American superhero film based on the
                                        Marvel Comics superhero team the
                                        Avengers, produced by Marvel Studios and
                                        distributed by Walt Disney Studios
                                        Motion Pictures.
                                    </p>
                                </div>
                                <Row>
                                    <Col>
                                        <Button className='buy-ticket'>
                                            <i
                                                class='fas fa-ticket-alt '
                                                style={{ padding: '5px' }}
                                            />
                                            Book a Ticket
                                        </Button>
                                    </Col>
                                    <Col>
                                        <Button className='wishlist'>
                                            <i class='fas fa-grin-stars' />
                                            Add to Wishlist
                                        </Button>
                                    </Col>
                                    <Col></Col>
                                </Row>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <div>
                                <img
                                    className='image-slider'
                                    src='https://media.socastsrm.com/wordpress/wp-content/blogs.dir/2166/files/2020/02/maxresdefault-2020-02-20T130910.982.jpg'
                                    alt='First slide'
                                />
                                <img
                                    className=' image-slider-overlay'
                                    src='/images/black.jpg'
                                    alt='First slide'
                                />
                            </div>
                            <Carousel.Caption className='slider-caption'>
                                <h5>Duration: 2hours 58mins</h5>
                                <Row>
                                    <Col xs={3} className='review'>
                                        <h5>
                                            <i class='fas fa-star' />
                                            9.5
                                        </h5>
                                    </Col>
                                    <Col xs={3} className='rating'>
                                        <h5>
                                            <i
                                                class='fa fa-film'
                                                aria-hidden='true'
                                            />{' '}
                                            PG
                                        </h5>
                                    </Col>
                                    <Col xs={6} className='rating'>
                                        <h5>Action, Adventure, Sci-Fi</h5>
                                    </Col>
                                </Row>
                                <div className='movie-title'>
                                    <h1> Mulan</h1>
                                    <p>
                                        To save her ailing father from serving
                                        in the Imperial Army, a fearless young
                                        woman disguises herself as a man to
                                        battle northern invaders in China.
                                    </p>
                                </div>
                                <Row>
                                    <Col>
                                        <Button className='buy-ticket'>
                                            <i
                                                class='fas fa-ticket-alt '
                                                style={{ padding: '5px' }}
                                            />
                                            Book a Ticket
                                        </Button>
                                    </Col>
                                    <Col>
                                        <Button className='wishlist'>
                                            <i class='fas fa-grin-stars' />
                                            Add to Wishlist
                                        </Button>
                                    </Col>
                                    <Col></Col>
                                </Row>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>

                    {/*Body */}
                    <Container fluid>
                        <Col>
                            <Row
                                style={{
                                    borderBottom: '2px solid #505050',
                                    padding: '0',
                                    margin: '0',
                                }}
                            >
                                <span
                                    style={{
                                        color: '#C4C4C4',
                                        fontSize: '25px',
                                        paddingTop: '5rem',
                                    }}
                                >
                                    <i class='fas fa-film mr-2'></i>
                                    Now Showing
                                </span>
                            </Row>
                            <Row className='py-5'>
                                <Col xs={2} className='mr-1'>
                                    <Card
                                        style={{
                                            width: '18rem',
                                            backgroundColor: '#333333',
                                            border: 'none',
                                        }}
                                    >
                                        <Card.Img
                                            variant='top'
                                            src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/d1pklzbuyaab0la-1552597012.jpg'
                                            style={{
                                                width: '180px',
                                                height: 'auto',
                                            }}
                                        />
                                        <Card.Body
                                            style={{
                                                padding: '0',
                                                margin: '0',
                                            }}
                                        >
                                            <Card.Title
                                                style={{
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    fontSize: '18px',
                                                    paddingTop: '1rem',
                                                }}
                                            >
                                                Avengers: Endgame
                                            </Card.Title>
                                            <Card.Text
                                                style={{
                                                    color: 'white',
                                                    fontWeight: '100',
                                                }}
                                            >
                                                Action, Adventure, Sci-Fi
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xs={2} className='mr-1'>
                                    <Card
                                        style={{
                                            width: '18rem',
                                            backgroundColor: '#333333',
                                            border: 'none',
                                        }}
                                    >
                                        <Card.Img
                                            variant='top'
                                            src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/d1pklzbuyaab0la-1552597012.jpg'
                                            style={{
                                                width: '180px',
                                                height: 'auto',
                                            }}
                                        />
                                        <Card.Body
                                            style={{
                                                padding: '0',
                                                margin: '0',
                                            }}
                                        >
                                            <Card.Title
                                                style={{
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    fontSize: '18px',
                                                    paddingTop: '1rem',
                                                }}
                                            >
                                                Avengers: Endgame
                                            </Card.Title>
                                            <Card.Text
                                                style={{
                                                    color: 'white',
                                                    fontWeight: '100',
                                                }}
                                            >
                                                Action, Adventure, Sci-Fi
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xs={2} className='mr-1'>
                                    <Card
                                        style={{
                                            width: '18rem',
                                            backgroundColor: '#333333',
                                            border: 'none',
                                        }}
                                    >
                                        <Card.Img
                                            variant='top'
                                            src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/d1pklzbuyaab0la-1552597012.jpg'
                                            style={{
                                                width: '180px',
                                                height: 'auto',
                                            }}
                                        />
                                        <Card.Body
                                            style={{
                                                padding: '0',
                                                margin: '0',
                                            }}
                                        >
                                            <Card.Title
                                                style={{
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    fontSize: '18px',
                                                    paddingTop: '1rem',
                                                }}
                                            >
                                                Avengers: Endgame
                                            </Card.Title>
                                            <Card.Text
                                                style={{
                                                    color: 'white',
                                                    fontWeight: '100',
                                                }}
                                            >
                                                Action, Adventure, Sci-Fi
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xs={2} className='mr-1'>
                                    <Card
                                        style={{
                                            width: '18rem',
                                            backgroundColor: '#333333',
                                            border: 'none',
                                        }}
                                    >
                                        <Card.Img
                                            variant='top'
                                            src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/d1pklzbuyaab0la-1552597012.jpg'
                                            style={{
                                                width: '180px',
                                                height: 'auto',
                                            }}
                                        />
                                        <Card.Body
                                            style={{
                                                padding: '0',
                                                margin: '0',
                                            }}
                                        >
                                            <Card.Title
                                                style={{
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    fontSize: '18px',
                                                    paddingTop: '1rem',
                                                }}
                                            >
                                                Avengers: Endgame
                                            </Card.Title>
                                            <Card.Text
                                                style={{
                                                    color: 'white',
                                                    fontWeight: '100',
                                                }}
                                            >
                                                Action, Adventure, Sci-Fi
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xs={2} className='mr-1'>
                                    <Card
                                        style={{
                                            width: '18rem',
                                            backgroundColor: '#333333',
                                            border: 'none',
                                        }}
                                    >
                                        <Card.Img
                                            variant='top'
                                            src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/d1pklzbuyaab0la-1552597012.jpg'
                                            style={{
                                                width: '180px',
                                                height: 'auto',
                                            }}
                                        />
                                        <Card.Body
                                            style={{
                                                padding: '0',
                                                margin: '0',
                                            }}
                                        >
                                            <Card.Title
                                                style={{
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    fontSize: '18px',
                                                    paddingTop: '1rem',
                                                }}
                                            >
                                                Avengers: Endgame
                                            </Card.Title>
                                            <Card.Text
                                                style={{
                                                    color: 'white',
                                                    fontWeight: '100',
                                                }}
                                            >
                                                Action, Adventure, Sci-Fi
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <Row
                                style={{
                                    borderBottom: '2px solid #505050',
                                    padding: '0',
                                    margin: '0',
                                }}
                            >
                                <span
                                    style={{
                                        color: '#C4C4C4',
                                        fontSize: '25px',
                                    }}
                                >
                                    <i class='fas fa-film mr-2'></i>
                                    Coming Soon
                                </span>
                            </Row>
                            <Row className='py-5'>
                                <Col xs={2} className='mr-1'>
                                    <Card
                                        style={{
                                            width: '18rem',
                                            backgroundColor: '#333333',
                                            border: 'none',
                                        }}
                                    >
                                        <Card.Img
                                            variant='top'
                                            src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/d1pklzbuyaab0la-1552597012.jpg'
                                            style={{
                                                width: '180px',
                                                height: 'auto',
                                            }}
                                        />
                                        <Card.Body
                                            style={{
                                                padding: '0',
                                                margin: '0',
                                            }}
                                        >
                                            <Card.Title
                                                style={{
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    fontSize: '18px',
                                                    paddingTop: '1rem',
                                                }}
                                            >
                                                Avengers: Endgame
                                            </Card.Title>
                                            <Card.Text
                                                style={{
                                                    color: 'white',
                                                    fontWeight: '100',
                                                }}
                                            >
                                                Action, Adventure, Sci-Fi
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xs={2} className='mr-1'>
                                    <Card
                                        style={{
                                            width: '18rem',
                                            backgroundColor: '#333333',
                                            border: 'none',
                                        }}
                                    >
                                        <Card.Img
                                            variant='top'
                                            src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/d1pklzbuyaab0la-1552597012.jpg'
                                            style={{
                                                width: '180px',
                                                height: 'auto',
                                            }}
                                        />
                                        <Card.Body
                                            style={{
                                                padding: '0',
                                                margin: '0',
                                            }}
                                        >
                                            <Card.Title
                                                style={{
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    fontSize: '18px',
                                                    paddingTop: '1rem',
                                                }}
                                            >
                                                Avengers: Endgame
                                            </Card.Title>
                                            <Card.Text
                                                style={{
                                                    color: 'white',
                                                    fontWeight: '100',
                                                }}
                                            >
                                                Action, Adventure, Sci-Fi
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xs={2} className='mr-1'>
                                    <Card
                                        style={{
                                            width: '18rem',
                                            backgroundColor: '#333333',
                                            border: 'none',
                                        }}
                                    >
                                        <Card.Img
                                            variant='top'
                                            src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/d1pklzbuyaab0la-1552597012.jpg'
                                            style={{
                                                width: '180px',
                                                height: 'auto',
                                            }}
                                        />
                                        <Card.Body
                                            style={{
                                                padding: '0',
                                                margin: '0',
                                            }}
                                        >
                                            <Card.Title
                                                style={{
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    fontSize: '18px',
                                                    paddingTop: '1rem',
                                                }}
                                            >
                                                Avengers: Endgame
                                            </Card.Title>
                                            <Card.Text
                                                style={{
                                                    color: 'white',
                                                    fontWeight: '100',
                                                }}
                                            >
                                                Action, Adventure, Sci-Fi
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xs={2} className='mr-1'>
                                    <Card
                                        style={{
                                            width: '18rem',
                                            backgroundColor: '#333333',
                                            border: 'none',
                                        }}
                                    >
                                        <Card.Img
                                            variant='top'
                                            src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/d1pklzbuyaab0la-1552597012.jpg'
                                            style={{
                                                width: '180px',
                                                height: 'auto',
                                            }}
                                        />
                                        <Card.Body
                                            style={{
                                                padding: '0',
                                                margin: '0',
                                            }}
                                        >
                                            <Card.Title
                                                style={{
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    fontSize: '18px',
                                                    paddingTop: '1rem',
                                                }}
                                            >
                                                Avengers: Endgame
                                            </Card.Title>
                                            <Card.Text
                                                style={{
                                                    color: 'white',
                                                    fontWeight: '100',
                                                }}
                                            >
                                                Action, Adventure, Sci-Fi
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xs={2} className='mr-1'>
                                    <Card
                                        style={{
                                            width: '18rem',
                                            backgroundColor: '#333333',
                                            border: 'none',
                                        }}
                                    >
                                        <Card.Img
                                            variant='top'
                                            src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/d1pklzbuyaab0la-1552597012.jpg'
                                            style={{
                                                width: '180px',
                                                height: 'auto',
                                            }}
                                        />
                                        <Card.Body
                                            style={{
                                                padding: '0',
                                                margin: '0',
                                            }}
                                        >
                                            <Card.Title
                                                style={{
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    fontSize: '18px',
                                                    paddingTop: '1rem',
                                                }}
                                            >
                                                Avengers: Endgame
                                            </Card.Title>
                                            <Card.Text
                                                style={{
                                                    color: 'white',
                                                    fontWeight: '100',
                                                }}
                                            >
                                                Action, Adventure, Sci-Fi
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Container>
                </Container>
            ) : (
                <Redirect to='/login'></Redirect>
            )}
        </div>
    );
};

export default HomeScreen;
