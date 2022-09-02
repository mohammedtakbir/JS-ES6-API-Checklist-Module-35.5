//? ১. একটা অবজেক্ট ডিক্লেয়ার করো। সেই অবজেক্ট এর মিনিমাম পাঁচটা প্রপার্টি থাকবে। তারপর একটা প্রপার্টি এর মান হবে অন্য আরেকটা অবজেক্ট , আরেকটা প্রপার্টি এর মান হবে একটা array । একটা প্রপার্টি এর মান হবে একটা ফাংশন(মেথড) । এই মেথড কে কল করলে সে মেথড এর ভিতর থেকে অবজেক্ট এর যেকোন একটা প্রপার্টি রিটার্ন করবে। আর বাকি দুইটা তোমার ইচ্ছা মতো। 

/* const student = {
    firstName: 'mohammed',
    lastName: 'takbir',
    isMarried: false,
    activities: function () {
        const currentActivities = `${this.lastName} is a programmer`
        return currentActivities;
    },
    hobies: ['programming', 'crciket', 'foorball'],
    car: {
        brand: 'Tesla',
        model: 'Model S Plaid',
        year: 2022
    }
}
const result = student.activities(); */
// console.log(result);

//? ২. একটা টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং ভেরিয়েবল ডিক্লেয়ার করো। সেটার মধ্যে উপরের অবজেক্ট এর একটা তিনটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। এর মধ্যে একটা প্রপার্টি সেট করবে--যেটা নেস্টেড অবজেক্ট আছে সেটার প্রপার্টি থেকে। আরেকটা প্রপার্টি হবে যে প্রপার্টি এর মান একটা array সেটার সেকেন্ড পজিশন এর উপাদান দিয়ে। আর বাকি একটা তোমার ইচ্ছা মতো বসাতে পারো। 

// const templateString = `${student.firstName} ${student.lastName}, ${student.car.model}, ${student.hobies[1]}`;
// console.log(templateString)

//? ৩.১. শূন্য প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে যেটা ৮৯ রিটার্ন করবে। 
/* const zero = () => {
    return 89;
} */
// const result1 = zero();
// console.log(result1);

//? ৩.২. এক প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করবে। এই ফাংশনের কাজ হবে যে প্যারামিটার নিবে সেটাকে 17 দিয়ে ভাগ করে ভাগফল রিটার্ন করবে। 
/* 
const divider = input => {
    const division = input / 17;
    return division;
}
const result2 = divider(1700); */
// console.log(result2)

//? ৩.৩ দুই, প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। এই ফাংশনের কাজ হবে যে দুইটা প্যারামিটার ইনপুট নিবে। সেই দুইটা প্যারামিটারকে যোগ করে যোগফলকে দুই দিয়ে ভাগ করে ভাগফল রিটার্ণ করে দাও। 

/* const math = (a, b) => {
    const sum = a + b;
    const division = sum / 2;
    return division
}
const result3 = math(2, 2); */
// console.log(result3)

//? ৩.৪ একাধিক লাইন ওয়ালা অ্যারো ফাংশন লিখো। সেটাতে দুইটা প্যারামিটার নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ৭ যোগ করবে তারপর যোগফল দুইটাকে আবার যোগ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো। 

/* const math1 = (x, y) => {
    const sum1 = x + 7;
    const sum2 = y + 7;
    const finalSum = sum1 + sum2;
    return finalSum;
}
const result4 = math1(3, 3); */
// console.log(result4)

//? ৪. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৭ দিয়ে ভাগ করে ভাগফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে
/* 
const numbers = [70, 140, 280, 360, 56, 67, 78, 89, 90]
const map = numbers.map(number => number / 7); */
// console.log(map)

//? ৫. জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো। 

//? ৬. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে।

/* const student = {
    firstName: 'mohammed',
    lastName: 'takbir',
    isMarried: false,
    activities: function () {
        const currentActivities = `${this.lastName} is a programmer`
        return currentActivities;
    },
    hobies: ['programming', 'crciket', 'foorball'],
    car: {
        brand: 'Tesla',
        model: 'Model S Plaid',
        year: 2022
    }
}
const {lastName: name} = student;
// console.log(name)
const {hobies} = student
const [, balance] = hobies
console.log(balance) */

//? ৭. একদম প্রাথমিক স্টেপ হিসেবে jsonplaceholder এর ওয়েবসাইট থেকে ডাটা fetch করে সেটাকে কনসোল এ দেখাতে হবে। ধরো তুমি তাদের ওয়েবসাইট এ photos এর API এর লিংক কোনটা সেটা জাভাস্ক্রিপ্ট দিয়ে কোড করে সেই ডাটা কনসোল এ দেখতে পারতেছো কিনা। তারপর কয়েকটা কার্ড বানাবে (হতে পারে বুটস্ট্রাপ এর কার্ড) সেগুলা আবার তুমি html দিয়ে ওয়েবসাইট এ ছবি এবং ছবির নিচে ছবির টাইটেল দেখাবে। 

loadPhotos = () => {
    const url = 'https://jsonplaceholder.typicode.com/photos'
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhotos(data))
}

displayPhotos = (photos) => {
    const photoContainer = document.getElementById('photo-container');
    photos.forEach(photo => {
        // console.log(photo)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card">
        <img onclick="imgDetail(${photo.id})" src="${photo.thumbnailUrl}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">AlbumID: ${photo.albumId}</h5>
            <h6 class="card-title">ID: ${photo.id}</h6>
            <p class="card-text">Title: ${photo.title}</p>
        </div>
    </div>
        `;
        photoContainer.appendChild(div);
    })
}

//? ৮. প্রত্যেকটা ফটোতে ক্লিক করলে উপরে আরেকটা div থাকবে। ক্লিক করার পর ডাইনামিকভাবে ওই ফটো এর ডাটা লোড করবে। সেটা করার জন্য আগের ডাটা লোড করার API এর লিংক এর পরে photos এর পরে ডাইনামিকভাবে ${id} বসিয়ে দিবে। এরপর ডিটেইল অংশে photo এর url দিয়ে মেইন ইমেজ এবং thumbnail ইমেজ দুইটাই দেখাবে। সাথে সাথে title প্রপার্টিও দেখাবে। 

imgDetail = async(id) => {
    const url = `https://jsonplaceholder.typicode.com/photos/${id}`
    const res = await fetch(url)
    const data = await res.json()
    displayImgDetail(data)
}
displayImgDetail = data => {
    console.log(data)
    const imgContainer = document.getElementById('img-container');
    imgContainer.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${data.url}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${data.title}</h5>
    </div>
    `;
    imgContainer.appendChild(div)
}

loadPhotos();

//? ৯. তুমি যে ডাটা লোড করেছো। বা ডাটা ওয়েবসাইট এ দেখাচ্ছ। সেই কোড এর মধ্যে arrow ফাংশন ইউজ করতে পারতেছো কিনা। যখন লুপ চালাচ্ছ সেখানে forEach ইউজ করতে পারতেছো কিনা। 