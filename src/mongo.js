const mongoose = require('mongoose')
const url = "mongodb+srv://anu:anu@cluster0.vcdtm.mongodb.net/note-app?retryWrites=true&w=majority";
  //mongodb+srv://fullstack:${mern}@cluster0-ostce.mongodb.net/test?retryWrites=true

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)
Note.find({}).then(result => {
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})
/*const note = new Note({
  content: 'HTML is Easy',
  date: new Date(),
  important: true,
})
note.save().then(result => {
  console.log('note saved!')
  mongoose.connection.close()
})*/

export default 'App'