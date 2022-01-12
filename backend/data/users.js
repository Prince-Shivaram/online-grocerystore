import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Thrishna',
    email: 'thrishna@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Niharika',
    email: 'niharika@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users

