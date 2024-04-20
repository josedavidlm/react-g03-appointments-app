const url = 'https://jsonplaceholder.typicode.com/posts'

const fetchPosts = () => {
  console.log('Llamando al api de JSONPLACEHOLDER')

  return fetch(url)
    .then(response => response.json())
}

const renderPosts = (posts = []) => {
  const appDiv = document.getElementById('app')

  let postList = ''

  posts.forEach(post => {
    // console.log(post)

    postList += `
      <div>
        <h2>${post.title}</h2>
        <p>${post.body}</p>
      </div>
    `
  })

  // console.log(postList)
  
  appDiv.innerHTML = postList
}

fetchPosts()
  .then(posts => {
    console.log(posts)
    renderPosts(posts)
  })















// const url = 'https://jsonplaceholder.typicode.com/todos'

// fetch(url) // Devuelve una promesa (Promise)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data) // Podemos usar el objeto JS
//   })
//   .catch(error => {
//     console.log(error)
//   })