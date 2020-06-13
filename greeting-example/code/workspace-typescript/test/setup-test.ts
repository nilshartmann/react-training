// JEST MOCK
// https://github.com/jefflau/jest-fetch-mock#setup-and-installation
// https://www.npmjs.com/package/jest-fetch-mock#typescript-guide
import { GlobalWithFetchMock } from "jest-fetch-mock";
const customGlobal: GlobalWithFetchMock = global as GlobalWithFetchMock;
customGlobal.fetch = require("jest-fetch-mock");
customGlobal.fetchMock = customGlobal.fetch;

// setup enzyme: http://airbnb.io/enzyme/docs/installation/index.html#working-with-react-16
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
