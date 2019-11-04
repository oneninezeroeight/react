console.log('你的网页被注入了')
let singleSelect = document.querySelectorAll('[data-score="5.00"]')
for (let i = 0; i < singleSelect.length; i++) {
    singleSelect[i].click()
}
let multiSelect = document.querySelectorAll('[type="checkbox"]')
for (let j = 0; j < multiSelect.length; j++) {
    multiSelect[j].click()
}

function random(lower, upper) {
    return Math.floor(Math.random() * (upper - lower)) + lower
}
document.querySelector('textarea').value = [
    '666',
    '无',
    '没什么缺点，就是有点帅',
    '好',
    '赞',
    '厉害了',
    '风度翩翩',
    '光明磊落、无所畏惧',
    '顶天立地',
    '春蚕到死丝方尽，蜡炬成灰泪始干',
    '猴塞雷',
    'good',
    'ver good',
    '易求无价宝，难得有情郎',
    ' ',
    'ashdjflkasdhljkf',
    '无情',
    'ABC',
    'GG',
    'javascript'
][random(0, 19)]

document.querySelector('#submit_btn').click()