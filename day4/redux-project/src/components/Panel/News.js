import React from 'react'
export default ({ news, searchText }) => {
  console.log(news, searchText)
  let arr = [];
  if (searchText) {
    arr = news.filter((item, index) => {
      if (item.title.indexOf(searchText) >= 0) {
        return item
      }
    })
  } else {
    arr = news
  }
  return arr.map((item, index) => {
    return (
      <a key={index} className="weui-media-box weui-media-box_appmsg">
        <div className="weui-media-box__hd">
          <img className="weui-media-box__thumb"
            src={item.author.avatar_url}
            alt="" />
        </div>
        <div className="weui-media-box__bd">
          <h4 className="weui-media-box__title">{item.title}</h4>
          <p className="weui-media-box__desc">{item.author.loginname}</p>
        </div>
      </a>
    )
  })
}
