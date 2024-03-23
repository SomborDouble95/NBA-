// fake api

// fetch('https://catfact.ninja/fact')
// .then(response => response.json())
// .then(data => console.log(data)) 

// fetch("https://stats.nba.com/stats/synergyplaytypes?LeagueID=00&PerMode=PerGame&PlayType=Postup&PlayerOrTeam=P&SeasonType=Regular%20Season&SeasonYear=2022-23&TypeGrouping=offensive", {
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": null,
//   "method": "GET",
//   "mode": "cors",
//   "credentials": "omit"
// })
// .then(response => response.json())
// .then(data => console.log(data))

// const request = new XMLHttpRequest();

// request.addEventListener('readystatechange', () => {
//     if (request.readyState === 4) {
//         console.log(request, request.responseText);
//     }
// });

// request.open('GET', 'https://catfact.ninja/fact', true);
// request.send();

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))


// const getTodos = (callback) => {
// const request = new XMLHttpRequest();

// request.addEventListener('readystatechange', () => {
//     if (request.readyState === 4 && request.status === 200) {
//         console.log(request, request.readyState);
//     } else if (request.readyState === 4) {
//         console.log('could not fetch the data');
//     }
// });

// request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
// request.send();
// };

// getTodos( () => {
//     console.log('callback fired');
// });


let intro = document.querySelector('.navigation');
let header = document.querySelector('.head');
let pageOptions = document.querySelectorAll('.nav');
let firstOption = document.querySelector('.str-theory');
let secondOption = document.querySelector('.regex');
let thirdOption = document.querySelector('.scrape');
let fourthOption = document.querySelector('.senta');
let fifthOption = document.querySelector('.texta');
let closeIcon = document.querySelectorAll('.icon');
let currentOption = undefined

let headerHeight = header.offsetHeight;

let totalHeight = window.innerHeight;

const navHeight = totalHeight - headerHeight;

intro.style.height = `${navHeight}px`;

console.log(navHeight/5);

pageOptions.forEach(nav => {
    nav.style.height = `${navHeight/5}px`;
});

const odd = [0,2,4];

const even = [1,3,5];


pageOptions.forEach((test, index) => {
    if (odd.includes(index)) {
        gsap.fromTo(test, {x: -2000}, {x: 0, opacity: 1, duration: 3});
    } else {
        gsap.fromTo(test, {x: 2000}, {x: 0, opacity: 1, duration: 3});
    }
    test.addEventListener('click', () => {
        pageOptions.forEach((box, index) => {
            if (odd.includes(index)) {
                gsap.fromTo(box, {x: 0}, {x: -2000, opacity: 1, duration: 3});
            } else {
                gsap.fromTo(box, {x: 0}, {x: 2000, opacity: 1, duration: 3});
            } 
            setTimeout(() => {
            intro.style.display = 'none';
            }, 1500);
        });
    });

} );

// Set Page Heights and Intial clicks from Navigation

firstOption.style.height = `${navHeight}px`;
secondOption.style.height = `${navHeight}px`;
thirdOption.style.height = `${navHeight}px`;
fourthOption.style.height = `${navHeight}px`;
fifthOption.style.height = `${navHeight}px`;

pageOptions[0].addEventListener('click', () => {
    firstOption.style.display = "block";
    secondOption.style.display = "none";
    thirdOption.style.display = "none";
    fourthOption.style.display = "none";
    fifthOption.style.display = "none";
    currentOption = firstOption;
    gsap.fromTo(currentOption, {x: "100%"}, {x: 0, opacity: 1, duration: 1, delay:2});
});

pageOptions[1].addEventListener('click', () => {
    firstOption.style.display = "none";
    secondOption.style.display = "block";
    thirdOption.style.display = "none";
    fourthOption.style.display = "none";
    fifthOption.style.display = "none";
    currentOption = secondOption;
    gsap.fromTo(currentOption, {x: "100%"}, {x: 0, opacity: 1, duration: 1, delay:2});
});

pageOptions[2].addEventListener('click', () => {
    firstOption.style.display = "none";
    secondOption.style.display = "none";
    thirdOption.style.display = "block";
    fourthOption.style.display = "none";
    fifthOption.style.display = "none";
    currentOption = thirdOption;
    gsap.fromTo(currentOption, {x: "100%"}, {x: 0, opacity: 1, duration: 1, delay:2});
});

pageOptions[3].addEventListener('click', () => {
    firstOption.style.display = "none";
    secondOption.style.display = "none";
    thirdOption.style.display = "none";
    fourthOption.style.display = "block";
    fifthOption.style.display = "none";
    currentOption = fourthOption;
    gsap.fromTo(currentOption, {x: "100%"}, {x: 0, opacity: 1, duration: 1, delay:2});
});

pageOptions[4].addEventListener('click', () => {
    firstOption.style.display = "none";
    secondOption.style.display = "none";
    thirdOption.style.display = "none";
    fourthOption.style.display = "none";
    fifthOption.style.display = "block";
    currentOption = fifthOption;
    gsap.fromTo(currentOption, {x: "100%"}, {x: 0, opacity: 1, duration: 1, delay:2});
});



// Close Icon

 closeIcon.forEach(icon => {
    icon.addEventListener('click', () => {
    console.log(currentOption);
    currentOption.style.display = 'none';
    intro.style.display = 'block';
    pageOptions.forEach((test, index) => {
        if (odd.includes(index)) {
            gsap.fromTo(test, {x: -2000}, {x: 0, opacity: 1, duration: 3});
        } else {
            gsap.fromTo(test, {x: 2000}, {x: 0, opacity: 1, duration: 3});
        }
        test.addEventListener('click', () => {
            pageOptions.forEach((box, index) => {
                if (odd.includes(index)) {
                    gsap.fromTo(box, {x: 0}, {x: -2000, opacity: 1, duration: 3});
                } else {
                    gsap.fromTo(box, {x: 0}, {x: 2000, opacity: 1, duration: 3});
                } 
                setTimeout(() => {
                intro.style.display = 'none';
                }, 1500);
            });
        });
    
    } );
});
});

