import * as React from "react";
import * as renderer from "react-test-renderer";

import { UnderlineTextInput } from "../../../src/components/Input/UnderlineTextInput";

describe("UnderlineTextInput test", () => {
  it("tests UnderlineTextInput renders correctly ", () => {
    const underlineTextInput = renderer.create(<UnderlineTextInput />).toJSON();
    expect(underlineTextInput).toMatchSnapshot();
  });
});
