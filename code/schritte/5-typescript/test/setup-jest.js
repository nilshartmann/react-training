// https://github.com/jefflau/jest-fetch-mock#setup-and-installation
global.fetch = require("jest-fetch-mock");

// setup enzyme: http://airbnb.io/enzyme/docs/installation/index.html#working-with-react-16
import { configure } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
