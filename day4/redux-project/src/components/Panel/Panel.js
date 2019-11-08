import { Component as WeElement, createElement as h } from "react";
import axios from "axios";
import News from "./News";
import store from "../../stores";

class Panel extends WeElement {
  render() {
    return h(
      "div",
      {
        className: "weui-panel weui-panel_access"
      },
      h(
        "div",
        {
          className: "weui-panel__hd"
        },
        "\u56FE\u6587\u7EC4\u5408\u5217\u8868",
        this.state.searchText
      ),
      h(
        "div",
        {
          className: "weui-panel__bd"
        },
        h(News, {
          news: this.state.news,
          searchText: this.state.searchText
        })
      ),
      h(
        "div",
        {
          className: "weui-panel__ft"
        },
        h(
          "a",
          {
            className: "weui-cell weui-cell_access weui-cell_link"
          },
          h(
            "div",
            {
              className: "weui-cell__bd"
            },
            "\u67E5\u770B\u66F4\u591A"
          ),
          h("span", {
            className: "weui-cell__ft"
          })
        )
      )
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      news: [],
      searchText: ""
    };
  }

  componentDidMount() {
    this.loadMore();
    store.subscribe(() => {
      let state = store.getState();
      console.log(state.searchText);
      this.setState({
        searchText: state.searchText
      });
    });
  }

  async loadMore() {
    let data = await axios.get("https://cnodejs.org/api/v1/topics");
    console.log(data.data.data);
    this.setState({
      news: data.data.data
    });
  }
}

export default Panel;
