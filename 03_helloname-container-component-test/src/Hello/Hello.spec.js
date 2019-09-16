import React from "react";
import ReactDOM from 'react-dom';
import { shallow } from "enzyme";
import Hello from "./Hello";

describe("hello component", () => {
  it("should render without crash", () => {
    const div = document.createElement('div');
    ReactDOM.render(<Hello name='Tester' age={2} index={1} changeName={console.log} />, div)
  });

  it("should render shallow", () => {
    shallow(<Hello name='Tester' age={2} index={1} changeName={console.log} />);
  })
});
