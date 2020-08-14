import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from './components/Login';
import SignUp from './components/SignUp';
import MainPage from './components/MainPage';
import Mypage from './components/Mypage';
import PostPage from './components/Postpage';
import WritePage from './components/Write';
import ErrorPage from './components/ErrorPage';
import EditUserInfo from './components/EditUserInfo';

const Route = createStackNavigator(
  {
    Login: {
      screen: Login,
    },
    SignUp: {
      screen: SignUp,
    },
    MainPage: {
      screen: MainPage,
    },
    Mypage: {
      screen: Mypage,
    },
    PostPage: {
      screen: PostPage,
    },
    WritePage: {
      screen: WritePage,
    },
    EditUserInfo: {
      screen: EditUserInfo,
    },
    ErrorPage: {
      screen: ErrorPage,
    },
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
      title: null,
    },
  }
);

const App = createAppContainer(Route);

export default App;
