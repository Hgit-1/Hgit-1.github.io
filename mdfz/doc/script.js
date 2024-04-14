function register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => {
        if (response.ok) {
            alert('注册成功！');
            // 跳转到登录页面
            window.location.href = 'login.html';
        } else {
            throw new Error('注册失败');
        }
    })
    .catch(error => {
        console.error('注册失败:', error);
        alert('注册失败，请重试！');
    });
}

function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => {
        if (response.ok) {
            alert('登录成功！');
            // 跳转到编辑页面
            window.location.href = 'edit.html';
        } else {
            throw new Error('登录失败');
        }
    })
    .catch(error => {
        console.error('登录失败:', error);
        alert('登录失败，请重试！');
    });
}
