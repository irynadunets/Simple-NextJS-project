export default async (req, res) => {
  try{

    const { method, body } = req

    if (
      typeof body.firstName !== 'string' || typeof body.lastName !== 'string'
    ) {
    res.status(400).json({ message: `Input data is invalid.` })
  }

    body.firstName = body.firstName.charAt(0).toUpperCase() + body.firstName.substr(1).toLowerCase();
    body.lastName = body.lastName.charAt(0).toUpperCase() + body.lastName.substr(1).toLowerCase();

    if (method === 'POST')
    {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify( body ))
    }else {
       res.status(200).json({ message: "This is not a post" });
    }

  } catch (e) {
    res.status(500).json({ message: "Error while post data" });
    next(e);   
  }

}
