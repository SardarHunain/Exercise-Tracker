import React from 'react'

export default function Edit() {
  return (
    <>
    <h3 className='mt-5'>Edit User</h3>
    <form>
  <div className="form-group">
    <label htmlfor="UserName">User Name:</label>
    <input type="text" class="form-control" id="UserName" />
  </div>
  <div className="form-group">
    <label htmlfor="Description">Description:</label>
    <input type='text' class="form-control" id="Description"/>
  </div>
  <div className="form-group">
    <label htmlfor="Duration">Duration (in minutes):</label>
    <input type='number' class="form-control" id="Duration" min='0' max='60'/>
  </div>
  <br></br>
  <div className='my-10'>
    <input type='submit' value='Edit User' className='btn btn-primary '/>
  </div>
</form>    </>
  )
}
