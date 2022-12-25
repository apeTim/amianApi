import * as express from 'express'
import * as cors from 'cors'
import axios from 'axios'

const app = express()
const router = express.Router()
const axiosOptions = {
    headers: { 'Content-Type': 'application/json' }
}

router.post('/preorder', async (req, res) => {
    try {
        const preorderData = req.body["preorder_data"]

        await axios.post(process.env.API + '/admin/orders.json', preorderData, axiosOptions)

        res.status(201).send()
    } catch (e) {
        console.log(e)
        res.status(400).json({ msg: 'Failed to create preorder' })
    }
})

app.use(express.json())
app.use(cors({ origin: ['theamian.com'] }))
app.use('/api', router)


app.listen(process.env.PORT || 8080)