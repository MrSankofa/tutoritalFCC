// this is used in the jest config file. Without the setupfiles property you wouldn't be able to connect Jest to Enzyme.

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });