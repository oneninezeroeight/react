import React from "react";

class Search extends React.Component {
  constructor(props){
    super(props)
    this.state={
      searchText: '',
      isFocus: false
    } 
  }
  toggle(){
    this.setState({
      isFocus: !this.state.isFocus
    })
  }
  getInputValue(e){
    this.setState({
      searchText: e.target.value
    })
  }
  clear(){
    this.setState({
      searchText: ''
    })
  }
  render() {
    return (
      <div className={
        this.state.isFocus?'weui-search-bar weui-search-bar_focusing':'weui-search-bar'
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
