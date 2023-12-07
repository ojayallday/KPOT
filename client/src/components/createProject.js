import React, { Fragment, useState } from "react";
import { onProject } from "../api/auth";
import Layout from "../components/layout";

const CreateProject = () => {
  const [values, setValues] = useState ({
    project_desc:'',
    po:'', 
    region:'', 
    partner:'', 
    msp:'', 
    assigned_engineer:'', 
    open_status:'', 
    oac_date:'', 
    fac_date:''

})

const [error, setError] = useState(false)
const [success, setSuccess] = useState(false)

const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })

}
const onSubmit = async (e) => {
  e.preventDefault()

  try {
    const { response } = await onProject(values)

  setError('')
 
 setSuccess(response.message)
    setValues({   
    project_desc:'',
    po:'', 
    region:'', 
    partner:'', 
    msp:'', 
    assigned_engineer:'', 
    open_status:'', 
    oac_date:'', 
    fac_date:'' })
  } catch (error) {
   // console.log(error.response.data.error)
    setSuccess('')
  }
}

  return (

<Layout>
    
    <form onSubmit={(e) => onSubmit(e)} className='container mt-3'>
<h1>Register</h1>

<div className='mb-3'>
 <label htmlFor='project_desc' className='form-label'>
   Project Description
 </label>
 <input
   onChange={(e) => onChange(e)}
   type='project_desc'
   className='form-control'
   id='project_desc'
   name='project_desc'
   value={values.project_desc}
   placeholder='Project Description@gmail.com'
   required
 />
</div>

<div className='mb-3'>
 <label htmlFor='po' className='form-label'>
   PO
 </label>
 <input
   onChange={(e) => onChange(e)}
   type='integer'
   value={values.po}
   className='form-control'
   id='po'
   name='po'
   placeholder='PO'
   required
 />
</div>


<div className='mb-3'>
 <label htmlFor='region' className='form-label'>
   Region
 </label>
 <input
   onChange={(e) => onChange(e)}
   type='region'
   className='form-control'
   id='region'
   name='region'
   value={values.region}
   placeholder='Please Enter the region'
   required
 />
</div>


<div className='mb-3'>
 <label htmlFor='partner' className='form-label'>
   Rollout Partner
 </label>
 <input
   onChange={(e) => onChange(e)}
   type='partner'
   className='form-control'
   id='partner'
   name='partner'
   value={values.partner}
   placeholder='Please Enter the Rollout Partner'
   required
 />
</div>


<div className='mb-3'>
 <label htmlFor='msp' className='form-label'>
   Maintenance Partner
 </label>
 <input
   onChange={(e) => onChange(e)}
   type='msp'
   className='form-control'
   id='msp'
   name='msp'
   value={values.msp}
   placeholder='Please Select the Maintenance Partner'
   required
 />
</div>


<div className='mb-3'>
 <label htmlFor='assigned_engineer' className='form-label'>
   Assigned Engineer
 </label>
 <input
   onChange={(e) => onChange(e)}
   type='assigned_engineer'
   className='form-control'
   id='assigned_engineer'
   name='assigned_engineer'
   value={values.assigned_engineer}
   placeholder='Assigned Engineer'
   required
 />
</div>


<div className='mb-3'>
 <label htmlFor='open_status' className='form-label'>
   Project Status
 </label>
 <input
   onChange={(e) => onChange(e)}
   type='open_status'
   className='form-control'
   id='open_status'
   name='open_status'
   value={values.open_status}
   placeholder='Project Status'
   required
 />
</div>


<div className='mb-3'>
 <label htmlFor='oac_date' className='form-label'>
   OAC Date
 </label>
 <input
   onChange={(e) => onChange(e)}
   type='date'
   className='form-control'
   id='oac_date'
   name='oac_date'
   value={values.oac_date}
   required
 />
</div>

<div className='mb-3'>
 <label htmlFor='fac_date' className='form-label'>
   FAC Date
 </label>
 <input
   onChange={(e) => onChange(e)}
   type='date'
   className='form-control'
   id='fac_date'
   name='fac_date'
   value={values.fac_date}
   
 />
</div>



<div style={{ color: 'red', margin: '10px 0' }}>{error}</div>
<div style={{ color: 'green', margin: '10px 0' }}>{success}</div>

<button type='submit' className='btn btn-primary'>
 Submit
</button>
</form>
</Layout>


/*



    <Fragment>

      <form onSubmit={(e) => onSubmit(e)} className='container mt-3'>
        <input type="text" className="form-control" name='project_desc' placeholder="Project Description" value={values.project_desc} onChange={e => setValues(e.target.value)} />
        <input type="integer" className="form-control" name='po' placeholder="PO" value={values.po} onChange={e => setValues(e.target.value)} />
        <input type="text" className="form-control" name='region' placeholder="Region" value={values.region} onChange={e => setValues(e.target.value)} />
        <input type="text" className="form-control" name='partner' placeholder="Partner" value={values.partner} onChange={e => setValues(e.target.value)} />
        <input type="text" className="form-control" name='msp' placeholder="MSP" value={values.msp} onChange={e => setValues(e.target.value)} />
        <input type="text" className="form-control" name='assigned_engineer' placeholder="Assigned Engineer" value={values.assigned_engineer} onChange={e => setValues(e.target.value)} />
        <input type="text" className="form-control" name='open_status' placeholder="Open Status" value={values.open_status} onChange={e => setValues(e.target.value)} />
        <input type="date" className="form-control" name='oac_date' placeholder="OAC Date" value={values.oac_date} onChange={e => setValues(e.target.value)} />
        <input type="date" className="form-control" name='fac_date' placeholder="FAC Date"value={values.fac_date} onChange={e => setValues(e.target.value)} />
        
        <div className="text-center mt-3">
        <button className="btn btn-success">Add</button>

        </div>
       
      </form>
    </Fragment>

    */
  );
};

export default CreateProject;