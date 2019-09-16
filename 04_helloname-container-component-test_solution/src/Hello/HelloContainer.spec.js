import React from "react";
import { shallow } from "enzyme";
import HelloContainer from "./HelloContainer";
import Hello from "./Hello";

describe("HelloContainer component", () => {
  it("should render without crash", () => {
    shallow(<HelloContainer  />);
  });
  it("should contain three hello components", () => {
    const wrapper = shallow(<HelloContainer  />);
    expect(wrapper.find(Hello)).toHaveLength(3);
  });
});
