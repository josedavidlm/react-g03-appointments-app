const Login = () => {
  return (
    <div className='container'>
      <form className='card w-25 mx-auto'>
        <h5 className="card-header">Login</h5>
        <div className='card-body'>
          <div className='row mb-3'>
            <label className='col-form-label'>Email</label>
            <div className=''>
              <input className='form-control' type='email' />
            </div>
          </div>
          <div className='row mb-3'>
            <label className='col-form-label'>Password</label>
            <div className=''>
              <input className='form-control' type='password' />
            </div>
          </div>
          <div className='row mb-3'>
            <button type="button" className="btn btn-primary">
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login