import SignupPage from 'pages/signUp';
import LoginPage from 'pages/login';
import ProfilePage from 'pages/profile';
import NotFoundPage from 'pages/notFound';
import EditProfilePage from 'pages/editProfile';
import EditPasswordPage from 'pages/editPassword';
import ChatPage from 'pages/chat';

export const getCurrentPage = () => {
  const path = document.location.pathname;
  switch (path) {
    case '/':
      return new LoginPage({});
    case '/signup':
      return new SignupPage({});
    case '/profile':
      return new ProfilePage({});
    case '/chat':
      return new ChatPage({});
    case '/edit-profile':
      return new EditProfilePage({});
    case '/edit-password':
      return new EditPasswordPage({});
    case '/error-404':
      return new NotFoundPage({});
    default:
      return new NotFoundPage({});
  }
};
