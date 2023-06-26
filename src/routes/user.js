import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
    res.send(Object.values(req.context.models.users))
  })
  
router.get('/:userId', (req, res) => {
res.send(req.context.models.users[req.params.userId])
})

router.post('/', (req, res) => {
res.send('POST on /users')
})

router.put('/:userId', (req, res) => {
res.send(`PUT on /users/${req.params.userId}`)
})

router.delete('/:userId', (req, res) => {
res.send(`DELETE on /users/${req.params.userId}`)
})

export default router