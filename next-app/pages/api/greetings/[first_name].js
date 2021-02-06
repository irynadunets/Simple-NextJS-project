//import { users } from '../../../data'
var useRouter = require('next/router');

export default (req, res) => {
  const { query: { first_name } } = req
  const filtered = users.filter((p) => p.first_name === first_name)
  if (filtered.length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({ greetings: `Hello  ${first_name}!` })
  } else {
    res.status(404).json({ message: `User with first_name: ${first_name} not found.` })
  }
}
