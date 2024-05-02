export const metadata = {
  title: 'HOLA ABOUT PAGE',
  description: 'Página con información de nuestra app'
}

const layout = ({ children }) => {
  return (
    <>
      <h1>Soy el layout del About Page</h1>

      {children}
    </>
  )
}

export default layout