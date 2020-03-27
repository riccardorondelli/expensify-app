import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
<<<<<<< HEAD
import DotEnv from 'dotenv';

DotEnv.config({
  path: '.env.test'
});
=======
>>>>>>> b654511824d8d542aed674707059cbd03c3dcb09

Enzyme.configure({
  adapter: new Adapter()
});