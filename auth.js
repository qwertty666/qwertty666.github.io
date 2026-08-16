// 最先运行，页面还没有渲染，没有机会看见内容
(function() {
    const AUTH_KEY = 'site_authenticated';
    if (sessionStorage.getItem(AUTH_KEY) !== 'true') {
        window.location.href = '/login.html';
    }
})();
