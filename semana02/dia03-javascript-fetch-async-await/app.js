const url = 'https://jsonplaceholder.typicode.com/posts'

const fetchPosts = async () => {
  // return fetch(url)
  //   .then(response => response.json())

  try {
    const response = await fetch(url)

    // ok === STATUS CODE 200 / 400
    if (!response.ok) {
      throw new Error('ERROR HTTP:', response.status)
    }

    const json = await response.json()
    
    return json // Aquí podemos procesar o modificar el json entrante
  } catch (error) {
    console.log(error)
  }
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

// fetchPosts()
//   .then(posts => {
//     console.log(posts)
//     renderPosts(posts)
//   })

async function init() {
  const posts = await fetchPosts()

  renderPosts(posts)
}

init()













// const url = 'https://jsonplaceholder.typicode.com/todos'

// fetch(url) // Devuelve una promesa (Promise)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data) // Podemos usar el objeto JS
//   })
//   .catch(error => {
//     console.log(error)
//   })