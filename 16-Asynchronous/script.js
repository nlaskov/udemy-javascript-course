'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>
    `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// const getCountryData = function (country) {
//   fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
//     .then(response => response.json())
//     .then(data => renderCountry(data[0]))
//     .catch(err => alert(err));
// };

// btn.addEventListener('click', function () {
//   getCountryData('portugal');
// });

///////////////////////////////////////

//Challenge 1
// const whereAmI = (lat, lng) => {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(result => {
//       return result.json();
//     })
//     .then(result => {
//       console.log(result);

//       if (result.city.includes('Throttled!'))
//         throw new Error('Error when calling the API');
//       console.log(`You are in ${result.city}, ${result.country}`);
//       return fetch(
//         `https://countries-api-836d.onrender.com/countries/name/${result.country}`
//       );
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data[0]))
//     .catch(err => {
//       console.log(`Error:${err.message}`);
//     });
// };

// const myCountry = async () => {
//   const geoRes = await getPosition();

//   const { latitude, longitude } = geoRes.coords;
//   whereAmI(latitude, longitude);
// };

// myCountry();

//Challenge 2
const imgContainer = document.querySelector('.images');
const createImage = imgPath => {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', () => {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', () => {
      reject(new Error('Image not found'));
    });
  });
};

// let currImg;

// createImage('img/img-1.jpg')
//   .then(res => {
//     console.log('Done');
//     curImg = res;
//     return wait(2);
//   })
//   .then(() => {
//     curImg.style.display = 'none';

//     return createImage('img/img-2.jpg');
//   })
//   .then(res => {
//     console.log('Done');
//     currImg = res;
//     return wait(2);
//   })
//   .then(() => {
//     currImg.style.display = 'none';
//   })
//   .catch(err => console.log(err));

//Challenge 3

// const loadNPause = async () => {
//   try {
//     let res = await createImage('img/img-1.jpg');
//     console.log('Done');
//     await wait(2);

//     res.style.display = 'none';

//     res = await createImage('img/img-2.jpg');
//     console.log('Done');
//     await wait(2);

//     res.style.display = 'none';
//   } catch (err) {
//     console.log(err);
//   }
// };

// loadNPause();

const loadAll = async imgArr => {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    console.log(imgs);

    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);

    imgsEl.forEach(el => el.classList.add('parallel'));
  } catch (err) {
    console.log(err);
  }
};
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
