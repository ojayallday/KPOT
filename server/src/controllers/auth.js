const db = require('../db')
const { hash } = require('bcryptjs')
const { sign } = require('jsonwebtoken')
const { SECRET } = require('../constants')

exports.getUsers = async (req, res) => {
  try {
    const { rows } = await db.query('SELECT user_id, email FROM users')

    return res.status(200).json({
      success: true,
      users: rows,
    })
  } catch (error) {
    console.log(error.message)
  }
}

exports.register = async (req, res) => {
  const { email, password } = req.body
  try {
    const hashedPassword = await hash(password, 10)

    await db.query('INSERT INTO users(email,password) values ($1 , $2)', [
      email,
      hashedPassword,
    ])

    return res.status(201).json({
      success: true,
      message: 'The registration was successful',
    })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      error: error.message,
    })
  }
}

exports.login = async (req, res) => {
  let user = req.user

  let payload = {
    id: user.user_id,
    email: user.email,
  }

  try {
    const token = await sign(payload, SECRET)

    return res.status(200).cookie('token', token, { httpOnly: true }).json({
      success: true,
      message: 'Logged in successfully',
    })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      error: error.message,
    })
  }
}

exports.protected = async (req, res) => {
  try {
    return res.status(200).json({
      info: 'protected info',
    })
  } catch (error) {
    console.log(error.message)
  }
}

exports.logout = async (req, res) => {
  try {
    return res.status(200).clearCookie('token', { httpOnly: true }).json({
      success: true,
      message: 'Logged out successfully',
    })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      error: error.message,
    })
  }
}

// Create a New Project 
exports.createNew = async (req, res) => {
  
  try {
    const { project_desc, po, region, partner, msp, assigned_engineer, open_status, oac_date, fac_date } = req.body;
     await db.query('INSERT INTO projects(project_desc, po, region, partner, msp, assigned_engineer, open_status, oac_date, fac_date) values ($1, $2, $3 ,$4 ,$5 ,$6 ,$7 ,$8 ,$9)', [
      project_desc, po, region, partner, msp, assigned_engineer, open_status, oac_date, fac_date,
    ])

    return res.status(201).json({
      success: true,
      message: 'The project was added successfully',
    })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      error: error.message,
    })
  }
}


//get all Projects

exports.getProjects = async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM projects')

    return res.status(200).json({
      success: true,
      projects: rows,
    })
  } catch (error) {
    console.log(error.message)
  }
}
//Get a project

exports.getaProject = async (req, res) => {
  const { id }= req.params; 
  try {
    
    const { rows } = await db.query('SELECT * FROM projects WHERE id = $1', [id])
    return res.status(200).json({
      success: true,
      project: rows[0],
    })
  } catch (error) {
    console.log(error.message)
  }
}

//update a project


exports.updateProject = async (req, res) => {
  const { id }= req.params;
  try {
    const { project_desc, po, region, partner, msp, assigned_engineer, open_status, oac_date, fac_date } = req.body;
    await db.query('UPDATE projects SET project_desc, po, region, partner, msp, assigned_engineer, open_status, oac_date, fac_date = $1, $2, $3 ,$4 ,$5 ,$6 ,$7 ,$8 ,$9 WHERE id = $10', [
     project_desc, po, region, partner, msp, assigned_engineer, open_status, oac_date, fac_date, id
   ])

   return res.status(201).json({
    success: true,
    message: 'The project was updated successfully',
    })
  } catch (error) {
    console.log(error.message)
  }
}


//delete a project

exports.deleteProject = async (req, res) => {
  try {
    const { id } = await db.query('DELETE FROM projects WHERE id = $1', [id]);

    return res.status(200).json({
      success: true,
      message:'Project has been deleted',
    })
  } catch (error) {
    console.log(error.message)
  }
}