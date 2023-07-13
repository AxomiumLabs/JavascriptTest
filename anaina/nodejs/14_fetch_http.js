async function logMovies() {
    const response = await fetch("fetch_info.txt");
    // const movies = await response.json();
    console.log(response);
  }  

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(response => response.json())
//   .then(json => console.log(json))
  
// You can also pass options as a second param
// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'get',
//   headers: {
//       'Content-Type': 'application/json'
//     },
// }).then((response) => response.json())
// .then(json 



// async function getText() {
//   let x = await 
//   let y = await x.text();
//   console.log(y);
// }
// getText()