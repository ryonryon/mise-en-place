import * as React from "react";
import * as renderer from "react-test-renderer";

import { MaterialButton } from "../../../src/components/Button/MaterialButton";

describe("MaterialButton test", () => {
  it("tests MaterialButton renders correctly ", () => {
    const materialButton = renderer.create(<MaterialButton />).toJSON();
    expect(materialButton).toMatchSnapshot();
  });
});
