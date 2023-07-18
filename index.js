import express from 'express'
import userRouter from './modules/users/routes/user.routes.js';
import notesRouter from './modules/notes/routes/note.routes.js';
const app = express()
const port = 3000

app.use(express.json());
app.use(userRouter);
app.use(notesRouter);
app.listen(port, () => console.log(`Server listening on port ${port}!`))