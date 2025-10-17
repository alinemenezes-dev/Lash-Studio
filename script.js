let isAdminMode = false;let clients = [{name:'cliente1', pass:'1234'}];
let bookings = [];

function showClientAccess() {
document.getElementById('clientForm').classList.remove('hidden');
document.getElementById('adminForm').classList.add('hidden');
document.getElementById('calendarSection').classList.add('hidden');
}

function showAdminAccess() {
document.getElementById('adminForm').classList.remove('hidden');
document.getElementById('clientForm').classList.add('hidden');
document.getElementById('calendarSection').classList.add('hidden');
}

function loginClient() {
const name = document.getElementById('clientName').value;
const pass = document.getElementById('clientPass').value;
const client = clients.find(c => c.name === name && c.pass === pass);
if(client){
document.getElementById('clientMsg').innerText = 'Login bem-sucedido!';
document.getElementById('bookingForm').classList.remove('hidden');
document.getElementById('accessSection').classList.add('hidden');
} else {
document.getElementById('clientMsg').innerText = 'Usuário ou senha incorretos';
}
}

function loginAdmin() {
const name = document.getElementById('adminName').value;
const pass = document.getElementById('adminPass').value;
if(name==='Aline Menezes' && pass==='aline2024'){
document.getElementById('adminMsg').innerText = 'Login Admin bem-sucedido!';
isAdminMode = true;
document.getElementById('adminForm').classList.add('hidden');
document.getElementById('adminPanel').classList.remove('hidden');
renderClientList();
} else {
document.getElementById('adminMsg').innerText = 'Admin inválido';
}
}

function goBack(){
document.getElementById('clientForm').classList.add('hidden');
document.getElementById('adminForm').classList.add('hidden');
document.getElementById('bookingForm').classList.add('hidden');
document.getElementById('calendarSection').classList.add('hidden');
document.getElementById('adminPanel').classList.add('hidden');
document.getElementById('accessSection').classList.remove('hidden');
}

// Admin functions
function addClientFromForm(){
const name = document.get
