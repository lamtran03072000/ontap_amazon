// DOM

import { dataPhone } from './dataPhone.js';

console.log('dataPhone', dataPhone);

// document.getElementById('phoneList').innerHTML = '<p>Hello cyber soft</p>';

let content = '';
for (let i = 0; i < dataPhone.length; i++) {
  let dPhone = dataPhone[i];
  let contentCard = `
<div class="col-3 my-3">
<div class="card" style="width: 18rem">
  <img src=${dPhone.img} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">${dPhone.name}</h5>
    <p class="card-text">${dPhone.desc}</p>
    <a href="#" class="btn btn-primary">xem chi tiết</a>
  </div>
</div>
</div>

`;
  content += contentCard;
}

document.getElementById('phoneList').innerHTML = content;
