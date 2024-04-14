function register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // 在真实环境中，你需要发送注册请求到后端，并在后端处理注册逻辑
    // 这里简化处理，直接将用户信息保存到JSON文件中
    const fs = require('fs');
    const user = { username, password };
    fs.appendFileSync('userprofile.json', JSON.stringify(user) + '\n');

    alert('注册成功！');
}

function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    
    // 在真实环境中，你需要发送登录请求到后端，并在后端验证用户信息
    // 这里简化处理，直接读取JSON文件中的用户信息进行验证
    const fs = require('fs');
    const users = fs.readFileSync('userprofile.json', 'utf8').split('\n');
    const user = users.find(u => {
        if (!u) return false; // 忽略空行
        const userData = JSON.parse(u);
        return userData.username === username && userData.password === password;
    });

    if (user) {
        alert('登录成功！');
        // 跳转到编辑页面
        window.location.href = 'edit.html';
    } else {
        alert('用户名或密码错误！');
    }
}
