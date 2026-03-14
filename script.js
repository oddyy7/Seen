const btn = document.getElementById('btn');

// 给按钮添加点击事件
btn.addEventListener('click', function() {
    // 点击后随机改变页面背景色
    const colors = ['#e6f7ff', '#fff1e6', '#f6ffed', '#fff0f6'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});