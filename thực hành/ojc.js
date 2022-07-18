const obj = [
    {
        name: 'nguyen van a',
        ege: '30',
        email: 'thanh@gmail.com'
    },
    {
        name: 'nguyen van a1',
        ege: '30',
        email: 'thanh@gmail.com'
    },
    {
        name: 'nguyen van a2',
        ege: '30',
        email: 'thanh@gmail.com'
    },
    {
        name: 'nguyen van a3',
        ege: '30s',
        email: 'thanh@gmail.coms'
    },
]

const table = document.querySelector('.table tbody');
var tablesss = obj.map(function (tabe) {
    return `<tr><td>${tabe.name}</td>
    <td>${tabe.ege}</td>
    <td>${tabe.email}</td></tr>
    `
})
table.innerHTML = tablesss.join('')

const input = document.querySelector('.form-control');
const btn = document.querySelector('.btn-primary');

input.addEventListener('keyup', function (e) {
    let text = e.target.value;
    console.log(e.target.value)
    btn.addEventListener('click', function () {
        let td = document.querySelector(".add");
        td.innerText = text;
    })
});


var conse = [
    'sumale',
    'sumale1',
    'sumale2',
    'sumale3',
    'sumale4',
    'sumale5',
    'sumale6',
    'sumale7',
    'sumale8',
]
function number(...number){
    var htmlsss = number.map(function (numbers,index) {
        return `<h1>hiển thị chữ ${numbers} ${index}</h1>`
    })
    console.log(htmlsss.join(''))
}
number(...conse);

