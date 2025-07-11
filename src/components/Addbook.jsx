import React from 'react'
import Booknavbar from './Booknavbar'

const Addbook = () => {
  return (
    <div>
      <Booknavbar/>
    <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Book Title</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                               

                                <label htmlFor="" className="form-label">Author</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Description</label>
                         <textarea name="" id="" className="form-control"></textarea>


                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Price</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                     <label htmlFor="" className="form-label">Category</label>
                     <select name="" id="" className="form control">
                        <option value="Fiction">Fiction</option>
                        <option value="Romantic">Romantic</option>
                        <option value="Horor">Horor</option>
                     </select>

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Category</label>
                        <input type="file" name="" id="" className="form-control" />

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Publisher Name</label>
                        <input type="text" className="form-control" />
                         
                    
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <button className="btn btn-success">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>
  )
}

export default Addbook