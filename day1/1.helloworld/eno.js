import { WeElement, h } from "omi";
export default class _class extends WeElement {
  render(props) {
    return h(
      "div",
      {
        name: "abc"
      },
      name,
      h("p", null, "abc")
    );
  }
}
_class.css = ``;
