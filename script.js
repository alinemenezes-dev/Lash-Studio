// Clientes
let clients = [];
let bookings = [];

function registerClient(){
const name = document.getElementById('clientFullName').value;
const dob = document.getElementById('clientDOB').value;
const whatsapp = document.getElementById('clientWhatsApp').value;
if(name && dob && whatsapp){
clients.push({name,dob,whatsapp});
alert('Cadastro realizado!');
} else alert('Preencha todos os campos');
}

function loginClient(){
const name = document.getElementById('clientLoginName').value;
const client = clients.find(c=>c.name===name);
document.getElementById('clientMsg').innerText = client ? 'Login OK!' : 'Cliente não encontrado';
}

// Admin
function loginAdmin(){
const name = document.getElementById('adminName').value;
const pass = document.getElementById('adminPass').value;
if(name==='Aline Menezes' && pass==='aline2024'){
alert('Login Admin OK!');
document.getElementById('adminPanel').classList.remove('hidden');
renderClientList();
} else alert('Credenciais incorretas');
}

function renderClientList(){
const list = document.getElementById('clientList');
list.innerHTML='';
clients.forEach(c=>{list.innerHTML+=`<li>${c.name} - ${c.whatsapp}</li>`});
}

function uploadLogo(){
const file = document.getElementById('logoUpload').files[0];
if(file){
const reader = new FileReader();
reader.onload = e=>document.querySelector('#mainLogo').src=e.target.result;
reader.readAsDataURL(file);
}
}

function uploadBackground(){
const file = document.getElementById('bgUpload').files[0];
if(file){
const reader = new FileReader();
reader.onload = e=>document.querySelector('.landing-container').style.backgroundImage=`url(${e.target.result})`;
reader.readAsDataURL(file);
}
}
