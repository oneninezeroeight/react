import React from "react";

class Search extends React.Component {
  // 编译前后 created beforeCreated
  constructor(props) {
    super(props)
    this.state = {
      searchText: '',
      isFocus: false
    }
    console.log('---------constructor-----------')
  }
  // 挂载前后 mounted beforeMounted
  // 已经被删掉
  componentWillMount() {
    console.log('---------componentWillMount-----------')
  }
  componentDidMount() {
    console.log('---------componentDidMount-----------')
  }
  // 更新前后 updated beforeUpdated
  componentWillUpdate() {
    console.log('---------componentWillUpdate-----------')
  }
  // render
  componentDidUpdate() {
    console.log('---------componentDidUpdate-----------')
  }
  // 销毁前 beforeDestory
  componentWillUnmount() {
    console.log('---------componentWillUnmount-----------')
  }

  toggle() {
    this.setState({
      isFocus: !this.state.isFocus
    })
  }
  getInputValue(e) {
    this.setState({
      searchText: e.target.value
    })
  }
  clear() {
    this.setState({
      searchText: ''
    })
  }
  // Vue是无法断开V层和M层的关系
  shouldComponentUpdate() {
    if (this.state.searchText.length >= 8) {
      // 停止更新
      return false
    } else {
      // 允许更新
      return true
    }
  }
  render() {
    console.log('---------render-----------')
    return (
      <div className={
        this.state.isFocus ? 'weui-search-bar weui-search-bar_focusing' : 'weui-search-bar'
      } id="searchBar">
        <form className="weui-search-bar__form">
          <div className="weui-search-bar__box">
            <i className="weui-icon-search"></i>
            <input value={this.state.searchText} onChange={this.getInputValue.bind(this)} type="search" className="weui-search-bar__input" id="searchInput" placeholder="搜索" required="" />
            <a onClick={this.clear.bind(this)} className="weui-icon-clear" id="searchClear"></a>
          </div>
          <label onClick={this.toggle.bind(this)} className="weui-search-bar__label" id="searchText">
            <i className="weui-icon-search"></i>
            <span>搜索</span>
          </label>
        </form>
        <a onClick={this.toggle.bind(this)} className="weui-search-bar__cancel-btn" id="searchCancel">取消</a>
      </div>
    )
  }
}

export default Search;
