if (!window.requestAnimationFrame) {
    requestAnimationFrame = function(fn) {
        setTimeout(fn, 17);
    };
}
var backToTop = function (rate) {
    var doc = document.body.scrollTop? document.body : document.documentElement;
    var scrollTop = doc.scrollTop;

    var top = function () {
        scrollTop = scrollTop + (0 - scrollTop) / rate;

        // 临界判断，终止动画
        if (scrollTop < 1) {
            doc.scrollTop = 0;
            return;
        }
        doc.scrollTop = scrollTop;
        // 动画gogogo!
        requestAnimationFrame(top);
    };
    top();
};
window.backToTop = backToTop