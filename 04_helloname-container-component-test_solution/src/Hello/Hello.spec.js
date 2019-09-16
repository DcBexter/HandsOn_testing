import React from "react";
import { shallow } from "enzyme";
import Hello from "./Hello";
import renderer from "react-test-renderer";

const fn = jest.fn();

describe("hello component", () => {
  it("should render without crash", () => {
    shallow(<Hello name="Markus" age={20} index={0} changeName={fn} />);
  });

  it("contains correct text", () => {
    const wrapper = shallow(
      <Hello name="Markus" age={20} index={0} changeName={fn} />
    );
    expect(wrapper.text()).toEqual("I'm Markus and i am 20 years old!");
  });

  it("change event handler should be called with correct value", () => {
    const fn = jest.fn();
    const wrapper = shallow(
      <Hello name="Markus" age={20} index={0} changeName={fn} />
    );
    const event = { target: { value: "Werner" } };
    wrapper.find("input").simulate("change", event);
    expect(fn).toBeCalledWith(event, 0);
  });

  it("hello component matches expected snapshot", () => {
    const tree = renderer
      .create(<Hello name="Markus" age={20} index={0} changeName={fn} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
