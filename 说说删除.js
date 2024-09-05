// 时间间隔
var delay = 1000;
var delay2 = 3000;

// 删除函数
function del() {
    let frameDoc = document.querySelector('.app_canvas_frame').contentDocument;
    let delBtn = frameDoc.querySelector('.del_btn');

    if (delBtn) {
        delBtn.click();
        // 延迟后执行确定事件
        setTimeout(yes, delay);
    } else {
        console.log('删除按钮未找到，尝试点击下一页。');
        nextPage(); // 如果未找到删除按钮，点击下一页
    }
}

// 确定删除函数
function yes() {
    let confirmBtn = document.querySelector('.qz_dialog_layer_btn');

    if (confirmBtn) {
        confirmBtn.click();
        // 延迟后再次调用删除函数
        setTimeout(del, delay);
    } else {
        console.log('确认按钮未找到，停止循环。');
    }
}

// 分页逻辑
function nextPage() {
    // 查找具有 title="下一页" 属性的标签
    let frameDoc = document.querySelector('.app_canvas_frame').contentDocument;
    let nextPageBtn = frameDoc.querySelector('a[title="下一页"]');

    if (nextPageBtn) {
        nextPageBtn.click();
        // 等待页面加载后再次调用删除函数
        setTimeout(del, delay2);
    } else {
        console.log('没有下一页点击第一页刷新');
        onePage();
    }
}

// 回到第一页刷新
function onePage() {
    let frameDoc = document.querySelector('.app_canvas_frame').contentDocument;
    let nextPageBtn = frameDoc.querySelector('a[title="首页"]');

    if (nextPageBtn) {
        nextPageBtn.click();
        // 等待页面加载后再次调用删除函数
        setTimeout(del2, delay2);
    } else {
        console.log('找不到按钮，程序结束');
    }
}

// 删除
function del2() {
    let frameDoc = document.querySelector('.app_canvas_frame').contentDocument;
    let delBtn = frameDoc.querySelector('.del_btn');

    if (delBtn) {
        delBtn.click();
        // 延迟后执行确定事件
        setTimeout(yes, delay);
    } else {
        console.log('删除按钮未找到，程序结束。');
    }
}
// 调用删除函数
del();
