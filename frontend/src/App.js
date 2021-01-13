import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreens/RegisterScreen';
import SecurityQuestion1 from './screens/RegisterScreens/SecurityQuestion1';
import SecurityQuestion2 from './screens/RegisterScreens/SecurityQuestion2';
import SecurityQuestion3 from './screens/RegisterScreens/SecurityQuestion3';
import AuthEmail from './screens/ForgotPasswordScreens/AuthEmail';
import Authentication1 from './screens/ForgotPasswordScreens/Authentication_1';
import Authentication2 from './screens/ForgotPasswordScreens/Authentication_2';
import Authentication3 from './screens/ForgotPasswordScreens/Authentication_3';
import ChangePassword from './screens/ForgotPasswordScreens/ChangePassword';
import HomeScreen from './screens/HomeScreen';
import Admin from './screens/AdminScreens/Admin';
import UserListScreen from './screens/AdminScreens/Users/UserListScreen';
import UserEditScreen from './screens/AdminScreens/Users/UserEditScreen';
import MovieListScreen from './screens/AdminScreens/Movie/MovieListScreen';
import MovieAddScreen from './screens/AdminScreens/Movie/AddMovie/MovieAddScreen';
import CinemaDetailScreen from './screens/AdminScreens/Movie/AddMovie/CinemaDetailScreen';
import MovieEditScreen from './screens/AdminScreens/Movie/AddMovie/MovieEditScreen';
import MovieAddPoster from './screens/AdminScreens/Movie/AddMovie/MovieAddPoster';
import Default from './screens/Default';
import MovieScreen from './screens/MovieScreen';
import CheckoutScreen from './screens/CheckoutScreen';
const App = () => {
    return (
        <div className='App'>
            <Router>
                <Header />
                <main>
                    <Container fluid>
                        <Route path='/' component={Default} />
                        <Route path='/login' component={LoginScreen} />
                        <Route path='/register' component={RegisterScreen} />
                        <Route
                            path='/register-v1'
                            component={SecurityQuestion1}
                        />
                        <Route
                            path='/register-v2'
                            component={SecurityQuestion2}
                        />
                        <Route
                            path='/register-v3'
                            component={SecurityQuestion3}
                        />
                        <Route path='/recover' component={AuthEmail} />
                        <Route path='/recover-v1' component={Authentication1} />
                        <Route path='/recover-v2' component={Authentication2} />
                        <Route path='/recover-v3' component={Authentication3} />
                        <Route
                            path='/change-password'
                            component={ChangePassword}
                        />
                        <Route path='/home' component={HomeScreen} />
                        <Route path='/admin' component={Admin} />
                        <Route path='/userlist' component={UserListScreen} />
                        <Route path='/user/:id' component={UserEditScreen} />
                        <Route path='/movielist' component={MovieListScreen} />
                        <Route path='/movie-add' component={MovieAddScreen} />
                        <Route
                            path='/cinema-add'
                            component={CinemaDetailScreen}
                        />
                        <Route
                            path='/poster-add/:id'
                            component={MovieAddPoster}
                        />

                        <Route path='/movie/:id' component={MovieEditScreen} />
                        <Route
                            path='/movie-screen/:id'
                            component={MovieScreen}
                        />
                        <Route
                            path='/checkout/:id'
                            component={CheckoutScreen}
                        />
                    </Container>
                </main>

                <Footer />
            </Router>
        </div>
    );
};

export default App;
