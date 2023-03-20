import React from 'react'

export default function CreateUser() {
  return (
    <>
    <h3 className='mt-5'>Create new user here</h3>
    <form>
  <div className="form-group">
    <label htmlfor="UserName">User Name:</label>
    <input type="text" class="form-control" id="UserName" />
  </div>

  <br></br>
  <div className='my-10'>
    <input type='submit' value='Create User' className='btn btn-primary '/>
  </div>
</form>    </>

  )
}
