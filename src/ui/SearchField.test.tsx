import "@testing-library/jest-dom";
import * as renderer from "react-test-renderer";
import SearchField from "./SearchField";

describe("SearchField", () => {
  it("renders correctly with default values", () => {
    const tree = renderer.create(<SearchField />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
