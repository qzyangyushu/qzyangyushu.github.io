window.onload = function() {
    var hasRefreshed = sessionStorage.getItem('hasRefreshed');
    if (!hasRefreshed) {
        setTimeout(function() {
            sessionStorage.setItem('hasRefreshed', 'true');
            location.reload();
        }, 500); // 1000 milliseconds = 1 second
    } else {
        sessionStorage.removeItem('hasRefreshed');
    }
};