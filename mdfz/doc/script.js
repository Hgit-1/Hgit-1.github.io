// 模拟用户数据存储
let users = [];

function register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // 在真实环境中，你需要发送注册请求到后端，并在后端处理注册逻辑
    // 这里简化处理，直接将用户信息存储在内存中
    users.push({ username, password });
    alert('注册成功！');
}

function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    // 在真实环境中，你需要发送登录请求到后端，并在后端验证用户信息
    // 这里简化处理，直接检查用户信息是否存在于内存中
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        alert('登录成功！');
        showEditableTable();
    } else {
        alert('用户名或密码错误！');
    }
}

function showEditableTable() {
    // 隐藏登录表单，显示可编辑表格
    document.getElementById('tableContainer').style.display = 'block';
    document.getElementById('container').style.display = 'none';

    // 这里可以通过 JavaScript 动态生成表格内容，或者使用其他数据获取方式
    const table = document.getElementById('editableTable');
    // 示例：生成一个简单的 3x3 表格
    for (let i = 0; i < 3; i++) {
        const row = table.insertRow();
        for (let j = 0; j < 3; j++) {
            const cell = row.insertCell();
            cell.contentEditable = true; // 设置单元格可编辑
            cell.innerText = `Row ${i + 1}, Col ${j + 1}`;
        }
    }
}
