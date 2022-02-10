const bcrypt = require('bcryptjs') 
const users = []

module.exports = {
    login: (req, res) => {
      const {username, password} = req.body
      
      for(let i = 0; i < users.length; i++){
        if(users[i].username === username){
          const authenticate = bcrypt.compareSync(password, users[i].passwordHash) 
          if(authenticate){
            let userCopy = {...users[i]}
            delete userCopy.passwordHash
            res.status(200).send(userCopy)
          }
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
        const { username, email, firstName, lastName, password} = req.body
        const salt = bcrypt.genSaltSync(5)
        const passwordHash = bcrypt.hashSync(password, salt)
        let user = {
          username,
          email,
          firstName,
          lastName,
          passwordHash
        }
        users.push(user)
         let userCopy = {...user}
         delete userCopy.passwordHash
        res.status(200).send(userCopy)
    }
}