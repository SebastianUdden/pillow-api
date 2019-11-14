import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
    const users = await req.context.models.User.find();
    return res.send(users);
});

router.get('/:userId', async (req, res) => {
    const user = await req.context.models.User.findById(req.params.userId);
    return res.send(user);
});

router.post('/', async (req, res) => {
    const user = await req.context.models.User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        location: req.body.location,
        image: req.body.image,
        createdAt: new Date(),
    });
    return res.send(user);
});

router.put('/:userId', async (req, res) => {
    const updatedUser = await req.context.models.User.findByIdAndUpdate(
        req.params.userId,
        {
            $set: {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                location: req.body.location,
                image: req.body.image,
                updatedAt: new Date(),
            },
        },
        { new: true },
    );
    return res.send(updatedUser);
});

export default router;
