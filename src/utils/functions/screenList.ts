import { BlockClass } from 'types';
import { Screens } from 'types';
import Signin from 'pages/login';
import Signup from 'pages/signUp';
import Messenger from 'pages/chat';
import Profile from 'pages/profile';
import EditProfile from 'pages/editProfile';
import EditPassword from 'pages/editPassword';
import PathNotFound from 'pages/notFound';

const map: Record<Screens, BlockClass<unknown>> = {
  [Screens.Signin]: Signin,
  [Screens.Signup]: Signup,
  [Screens.Messenger]: Messenger,
  [Screens.Profile]: Profile,
  [Screens.EditProfile]: EditProfile,
  [Screens.EditPassword]: EditPassword,
  [Screens.PathNotFound]: PathNotFound,
};

const getScreenComponent = (screen: Screens): BlockClass<unknown> => {
  return map[screen];
};

export { Screens, getScreenComponent };
