const mongoose = require('mongoose')
const MONGO_URI = 'mongodb+srv://sei:seisei@sei-mern-auth.a0ell.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
.then(instance=> 
    console.log(`Connected to db: ${instance.connections[0].name}`)
)
.catch(error=>console.log(`Connection failed!`, error))

module.exports = mongoose