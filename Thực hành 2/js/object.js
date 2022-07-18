/*
Object bao gồm:
- Thuộc tính (Biến)
- Phương thức (Hàm)
*/

const customerObj = {
    name: 'Hoàng An',
    age: 30,
    location: 'Hà Nội'
};

customerObj.position = 'CEO';


//console.log(Object.keys(customerObj));

Object.keys(customerObj).forEach(function (key) {
    //console.log(customerObj[key]);
});

//Ví dụ mảng Customers

const customers = [
    {
        name: 'Nguyễn Văn A',
        email: 'nguyenvana@gmail.com',
        age: 30
    },

    {
        name: 'Nguyễn Văn B',
        email: 'nguyenvanb@gmail.com',
        age: 30
    },

    {
        name: 'Nguyễn Văn c',
        email: 'nguyenvanc@gmail.com',
        age: 30
    },

    {
        name: 'Nguyễn Văn D',
        email: 'nguyenvanđ@gmail.com',
        age: 30
    },
    {
        name: 'Nguyễn Văn e',
        email: 'nguyenvane@gmail.com',
        age: 30
    },

    {
        name: 'Nguyễn Văn f',
        email: 'nguyenvanf@gmail.com',
        age: 30
    }
];

let tbody = document.querySelector('table tbody');

let lastIndex;
function rendertop() {

    let curretpage = 1;
    let perpage = 2;
    let totopage = 0;
    let pageuser = [];
    pageuser = customers.slice(
        (curretpage - 1) * perpage,
        (curretpage - 1) * perpage + perpage
    )
    var renderpaginations = document.querySelector('.pagination')

    function paginationso() {
        totopage = customers.length / perpage;
        for (let index = 01; index <= totopage; index++) {
            renderpaginations.innerHTML
                += `<li class="page-link">${index}</li>`
        }
    }
    paginationso()
    var paginationLi = renderpaginations.querySelectorAll('li')
    for (let i = 0; i < paginationLi.length; i++) {
        paginationLi[i].addEventListener('click', function (e) {
            curretpage = e.target.innerText
            pageuser = customers.slice(
                (curretpage - 1) * perpage,
                (curretpage - 1) * perpage + perpage
            )
            let renderhtml = pageuser.map((value,index) => {
                lastIndex = index;
                return `
                <tr>
                    <td>${value.name}</td>
                    <td>${value.email}</td>
                    <td>${value.age}</td>
                    <td><a href="#" class="btn btn-warning update" data-index="${index}">Sửa</a></td>
                    <td><a href="#" class="btn btn-danger deletetable">Xoá</a></td>
                </tr>
                `
            })
            tbody.innerHTML = renderhtml.join('')
            let deletetables = document.querySelectorAll('.deletetable')
    console.log(deletetables)
    function deletetable() {
        for (let index = 0; index < deletetables.length; index++) {
            if (deletetables[index] !== null) {
                deletetables[index].addEventListener('click', (e) => {
                    e.preventDefault();
                    if (!confirm("delete?")) return;
                    let tbl = deletetables[index].parentNode.parentNode.parentNode.parentNode;
                    let row = deletetables[index].parentNode.parentNode.rowIndex;

                    tbl.deleteRow(row);
                })
            }
        }
    }
    deletetable()
        })
    }


    function rentarcus() {
        pageuser.forEach((customer, index) => {
            let tr = document.createElement('tr');

            let nameTd = document.createElement('td');
            nameTd.innerText = customer.name;
            tr.appendChild(nameTd);

            let emailTd = document.createElement('td');
            emailTd.innerText = customer.email;
            tr.appendChild(emailTd);

            let ageTd = document.createElement('td');
            ageTd.innerText = customer.age;
            tr.appendChild(ageTd);

            let updateTd = document.createElement('td');
            updateTd.innerHTML = `<a href="#" class="btn btn-warning update" data-index="${index}">Sửa</a>`;
            tr.appendChild(updateTd);

            let deleteTd = document.createElement('td');
            deleteTd.innerHTML = '<a href="#"  class="btn btn-danger deletetable">Xoá</a>';
            tr.appendChild(deleteTd);

            tbody.appendChild(tr);

            lastIndex = index;
        });
    }
    rentarcus()
    
    let deletetables = document.querySelectorAll('.deletetable')
    console.log(deletetables)
    function deletetable() {
        for (let index = 0; index < deletetables.length; index++) {
            if (deletetables[index] !== null) {
                deletetables[index].addEventListener('click', (e) => {
                    e.preventDefault();
                    if (!confirm("delete?")) return;
                    let tbl = deletetables[index].parentNode.parentNode.parentNode.parentNode;
                    let row = deletetables[index].parentNode.parentNode.rowIndex;

                    tbl.deleteRow(row);
                })
            }
        }
    }
    deletetable()
}
rendertop()

//Thêm khách hàng
let addCustomerForm = document.querySelector('.add-customer');
if (addCustomerForm !== null) {
    addCustomerForm.addEventListener('submit', function (e) {

        e.preventDefault(); //ngăn hành động mặc định của html

        let actionType = e.target.dataset.type;

        let msgObj = document.querySelector('.msg'); //đối tượng html hiển thị thông báo

        //Tạo đối tượng html của các thẻ input
        let nameObj = e.target.querySelector('[name="name"]');

        let emailObj = e.target.querySelector('[name="email"]');

        let ageObj = e.target.querySelector('[name="age"]');

        //Lấy giá trị của các thẻ input
        let name = '';
        let email = '';
        let age = '';

        if (nameObj !== null) {
            name = nameObj.value;
        }

        if (emailObj !== null) {
            email = emailObj.value;
        }

        if (ageObj !== null) {
            age = ageObj.value;
        }

        if (name !== '' && email !== '' && age !== '') {
            let tr = document.createElement('tr');

            let nameTd = document.createElement('td');
            nameTd.innerText = name;
            tr.appendChild(nameTd);

            let emailTd = document.createElement('td');
            emailTd.innerText = email;
            tr.appendChild(emailTd);

            let ageTd = document.createElement('td');
            ageTd.innerText = age;
            tr.appendChild(ageTd);

            lastIndex++;

            let updateTd = document.createElement('td');
            updateTd.innerHTML = `<a href="#" class="btn btn-warning update" data-index="${lastIndex}">Sửa</a>`;
            tr.appendChild(updateTd);

            let deleteTd = document.createElement('td');
            deleteTd.innerHTML = '<a href="#"  class="deletetable btn btn-danger">Xoá</a>';
            tr.appendChild(deleteTd);

            if (actionType == 'add') {
                tbody.appendChild(tr);
            } else {
                let currentIndex = e.target.dataset.index;
                //console.log(tr);
                let currentTr = tbody.querySelectorAll('tr');

                //Thay thế node cũ bằng node mới
                tbody.replaceChild(tr, currentTr[currentIndex]);
            }

            //Đóng modal
            document.querySelector('#new_customer .btn-close').click();

            //Reset dữ liệu input
            nameObj.value = '';
            emailObj.value = '';
            ageObj.value = '';

            //Reset thông báo
            msgObj.innerText = '';
            function myFunction() {
                var input, filter, tr, td, i, txtValue;
                input = document.getElementById("myInput");
                filter = input.value.toUpperCase();
                tr = tbody.getElementsByTagName("tr");
                for (i = 0; i < tr.length; i++) {
                    td = tr[i].getElementsByTagName("td")[0];
                    console.log(tr[i].querySelector("td")[1])
                    if (td) {
                        txtValue = td.textContent || td.innerText;
                        if (txtValue.toUpperCase().indexOf(filter) > -1) {
                            tr[i].style.display = "";
                        } else {
                            tr[i].style.display = "none";
                        }
                    }
                }
            }
            let deletetables = document.querySelectorAll('.deletetable')
            console.log(deletetables)
            function deletetable() {
                for (let index = 0; index < deletetables.length; index++) {
                    if (deletetables[index] !== null) {
                        deletetables[index].addEventListener('click', (e) => {
                            e.preventDefault();
                            if (!confirm("Are you sure you want to delete?")) return;
                            let tbl = deletetables[index].parentNode.parentNode.parentNode.parentNode;
                            let row = deletetables[index].parentNode.parentNode.rowIndex;

                            tbl.deleteRow(row);
                        })
                    }
                }
            }
            deletetable()
        } else {

            let msgContent = `<div class="alert alert-danger text-center">Vui lòng nhập đầy đủ thông tin</div>`;
            msgObj.innerHTML = msgContent;
        }

    });
}

let addBtn = document.querySelector('.add');
if (addBtn !== null) {
    addBtn.addEventListener('click', function () {
        addCustomerForm.dataset.type = 'add';
    });
}

let updateBtnObj = document.querySelectorAll('.update');

tbody.addEventListener('click', function (e) {
    if (e.target.classList.contains('update')) {
        let currentIndex = e.target.dataset.index;

        //Mở modal
        const customerModal = new bootstrap.Modal('#new_customer', {})

        customerModal.show();

        //Lấy dữ liệu
        const customer = customers[currentIndex];

        //Tạo đối tượng html của các thẻ input
        let nameObj = document.querySelector('.add-customer [name="name"]');

        let emailObj = document.querySelector('.add-customer [name="email"]');

        let ageObj = document.querySelector('.add-customer [name="age"]');

        nameObj.value = customer.name;

        emailObj.value = customer.email;

        ageObj.value = customer.age;

        addCustomerForm.dataset.type = 'update';
        addCustomerForm.dataset.index = currentIndex;
    }
});


function searchObj() {
    var input, filter, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    tr = tbody.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

// let deletetables = document.querySelectorAll('.deletetable')
// function deletetable() {
//     for (let index = 0; index < deletetables.length; index++) {

//         if (deletetables[index] !== null) {
//             deletetables[index].addEventListener('click', (e) => {
//                 e.preventDefault();
//                 if (!confirm("Are you sure you want to delete?")) return;
//                 let tbl = deletetables[index].parentNode.parentNode;
//                 let row = deletetables[index].parentNode.parentNode.rowIndex;

//                 tbl.deleteRow(row);
//             })
//         }
//     }

// }
// deletetable();

// function searchObj() {
//     let inputvalu = document.querySelector('.searchObj');
//     let inputval = inputvalu.value;
//     let objSearchname = customers.filter((value) => {
//         return value.name.includes(inputval)
//     })
//     if (inputval !== '') {
//         let render = objSearchname.map((value, index) => {
//             lastIndex = index;
//             return `
//                 <tr>
//                     <td>${value.name}</td>
//                     <td>${value.email}</td>
//                     <td>${value.age}</td>
//                     <td><a href="#" class="btn btn-warning update" data-index="${index}">Sửa</a></td>
//                     <td><a href="#" class="btn btn-danger">Xoá</a></td>
//                 </tr>
//             `
//         })
//         tbody.innerHTML = render.join('');
//     }else{
//         let render = objSearchname.map(() => {
//             return ''
//         })
//         tbody.innerHTML = render.join('');
//         rendertop()
//     }

// }
