import Cookies from 'universal-cookie';

const cookies = new Cookies();

const currentUserId = () => cookies.get('currentUserID');

const userToken = () => cookies.get('userToken');

const loggedIn = () => !!currentUserId();

export { currentUserId, loggedIn, userToken };
