//? ১০. সিরিয়াস প্রাকটিস 
//? মডিউল 34 ভালো করে দেখে ফেলো। বিশেষ করে the meal db রি তারপরে আরো সময় থাকলে এর আরেকটা খালতো ভাই the coktaildb থেকে কিছু জিনিস এনে দেখাবে। একজাক্টলি কি দেখাতে হবে। সেটা আমি বলে দিবো না। তুমি ওদের ওয়েবসাইট এ যাও। সেখানে কি কি লেখা আছে সেগুলা পড়ো। api গুলা এর ছোট করে কি কি করে বলা আছে। সেগুলা দেখো। তারপর কিছু ডাটা লোড করো। সেই ডাটাগুলো দেখাও। এইখানে সার্চ ফাংশনালিটি ইমপ্লিমেন্ট করো। অনেকটা mealdb এর মতো। আবার কোন একটাতে ক্লিক করলে সেটার ডিটেল দেখাবে। 

const loadPhones = (searchText, dataLimit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhones(data.data, dataLimit))
}
const displayPhones = (phones, dataLimit) => {
    //* display 10 phones only
    const showAll = document.getElementById('show-all');
    if(dataLimit && phones.length > 10){
        phones = phones.slice(0, 10);
        showAll.classList.remove('d-none')
    }else{
        showAll.classList.add('d-none')
    }
    //* message for invalid search
    const invalidSearch = document.getElementById('invalid-search');
    if(phones.length === 0){
        invalidSearch.classList.remove('d-none');
    }else{
        invalidSearch.classList.add('d-none');
    }

    const phonesContainer = document.getElementById('phones-container');
    phonesContainer.textContent = '';
    phones.forEach(phone => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card p-4">
        <img src="${phone.image}" class="card-img-top w-50 mx-auto" alt="...">
        <div class="card-body">
          <h5 class="card-title">${phone.phone_name}</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <button onclick="loadPhoneDetails('${phone.slug}')" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">show details</button>
        </div>
      </div>
        `;
        phonesContainer.appendChild(div);
    });
    //* stop spinner 
    toggleSpinner(false)
}
//* searchProcess
const searchProcess = (dataLimit) => {
    //* spinner start
    toggleSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchValue = searchField.value;
    loadPhones(searchValue, dataLimit);
}
//* kyepress
document.getElementById('search-field').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchProcess(10);
    }
})
//* search
document.getElementById('search-btn').addEventListener('click', () => {
    searchProcess(10);
});
//* display all phones
document.getElementById('show-all-btn').addEventListener('click', () => {
    searchProcess();
});
//* spinner 
const spinner = document.getElementById('spinner');
const toggleSpinner = (isLoading) => {
    if(isLoading){
        spinner.classList.remove('d-none');
    }else{
        spinner.classList.add('d-none');
    }
};
//* phones Details
const loadPhoneDetails = (phone) => {
    const url = `https://openapi.programming-hero.com/api/phone/${phone}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhoneDetails(data.data))
}
const displayPhoneDetails = (phoneDetails) => {
    console.log(phoneDetails)

    const phoneImg = document.getElementById('phone-img');
    phoneImg.setAttribute('src', `${phoneDetails.image}`)

    const modalTitle = document.getElementById('exampleModalLabel');
    modalTitle.innerText = `${phoneDetails.name}`
}

loadPhones('apple');