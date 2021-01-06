import React, { useEffect, useState } from 'react';
import {
    Button,
    Col,
    Container,
    Form,
    Image,
    OverlayTrigger,
    Row,
    Tooltip,
} from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { securityQuestion3 } from '../../actions/userAction';
import Controls from '../../components/controls/Control';
import Message from '../../components/Message';
import Loader from '../../components/Loader';

export const getQuestionCollection = () => [
    {
        id: '1',
        title: `What's the one thing you would like to change about yourself?`,
    },
    {
        id: '2',
        title: `Who is the first person you call when you're in trouble?`,
    },
    { id: '3', title: 'If you could choose one superpower, what would it be?' },
    { id: '4', title: 'Who is your role model?' },
    { id: '5', title: 'Who is member of your family do you feel closest to?' },
    { id: '6', title: 'What book influenced you the most?' },
];

export const SecurityQuestion3 = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [message, setMessage] = useState(null);

    const userRegister = useSelector((state) => state.userRegister);
    const { userInfo } = userRegister;

    const userAuthentication1 = useSelector(
        (state) => state.userAuthentication_v1
    );
    const { authentication_v1 } = userAuthentication1;

    const userAuthentication2 = useSelector(
        (state) => state.userAuthentication_v2
    );
    const { authentication_v2 } = userAuthentication2;

    const userAuthentication3 = useSelector(
        (state) => state.userAuthentication_v3
    );
    const { loading, error, authentication_v3 } = userAuthentication3;

    useEffect(() => {
        if (authentication_v3) {
            history.push('/login');
        }
    }, [history, authentication_v3]);

    const submitHandler = (e) => {
        e.preventDefault();
        if (question.length === 0 || answer.length === 0) {
            setMessage('Please fill in required fields');
        } else {
            dispatch(
                securityQuestion3(
                    userInfo.fullName,
                    userInfo.email,
                    userInfo.password,
                    authentication_v1.question1,
                    authentication_v1.answer1,
                    authentication_v2.question2,
                    authentication_v2.answer2,
                    question,
                    answer
                )
            );
            setMessage('Successfully Registered');
        }
    };

    return (
        <div>
            {userInfo ? (
                <div>
                    {loading && <Loader>Loading</Loader>}
                    <Container className='login-form'>
                        <Row className='row-login'>
                            <Col sm={7} className='col-2-login'>
                                <Row className='stage-bar'>
                                    <Col>
                                        <span className='stage-round1'>1</span>
                                    </Col>
                                    <Col>
                                        <span className='stage-round'>2</span>
                                    </Col>
                                    <Col>
                                        <span className='stage-current stage-round'>
                                            3
                                        </span>
                                    </Col>
                                </Row>
                                <div>
                                    {message && (
                                        <div className='message-box'>
                                            <Message>{message}</Message>
                                        </div>
                                    )}
                                    {error && (
                                        <div className='message-box'>
                                            <Message variant='danger'>
                                                {error}
                                            </Message>
                                        </div>
                                    )}
                                    <Form className='form-holder-question'>
                                        <Form.Group controlId='formBasicEmail'>
                                            <Form.Label className='form-label'>
                                                Security Question
                                            </Form.Label>
                                            <Controls.Select
                                                name='question'
                                                label='Choose Questions'
                                                options={getQuestionCollection()}
                                                value={question}
                                                onChange={(e) =>
                                                    setQuestion(e.target.value)
                                                }
                                            />
                                        </Form.Group>

                                        <Form.Group controlId='formBasicEmail'>
                                            <Form.Label className='form-label'>
                                                Answer
                                            </Form.Label>
                                            <OverlayTrigger
                                                key='bottom'
                                                placement='bottom'
                                                overlay={
                                                    <Tooltip
                                                        id={`tooltip-$'bottom'`}
                                                    >
                                                        This field is required.
                                                    </Tooltip>
                                                }
                                            >
                                                <Form.Control
                                                    type='text'
                                                    placeholder='Enter Answer'
                                                    className='form-control'
                                                    value={answer}
                                                    onChange={(e) =>
                                                        setAnswer(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </OverlayTrigger>
                                        </Form.Group>

                                        <Button
                                            variant='primary'
                                            type='submit'
                                            className='form-submit form-next'
                                            onClick={submitHandler}
                                        >
                                            Next
                                        </Button>
                                    </Form>
                                </div>
                            </Col>{' '}
                            <Col sm={5} className='col-1-login'>
                                <div className='d-flex flex-column login-col-1'>
                                    <Image
                                        src='/images/logo.png'
                                        className='login-logo'
                                    />
                                    <span className='col-info'>
                                        Enter your personal details and start
                                        journey with us
                                    </span>
                                    <Link to='/login' className='button-style'>
                                        <span className='col-button'>
                                            Login
                                        </span>
                                    </Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            ) : (
                <Redirect to='/login'></Redirect>
            )}
        </div>
    );
};

export default SecurityQuestion3;
