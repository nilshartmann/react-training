// setup fetch-mock (https://github.com/jefflau/jest-fetch-mock#installation-and-setup)
global.fetch = require("jest-fetch-mock");

// setup enzyme: http://airbnb.io/enzyme/docs/installation/index.html#working-with-react-16
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
