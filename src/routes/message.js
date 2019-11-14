import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
    const messages = await req.context.models.Message.find();
    return res.send(messages);
});

router.get('/:messageId', async (req, res) => {
    const message = await req.context.models.Message.findById(
        req.params.messageId,
    );
    return res.send(message);
});

router.post('/', async (req, res) => {
    const message = await req.context.models.Message.create({
        text: req.body.text,
        createdAt: new Date(),
        user: req.context.me.id,
    });
    return res.send(message);
});

router.put('/:messageId', async (req, res) => {
    const updatedMessage = await req.context.models.Message.findByIdAndUpdate(
        req.params.messageId,
        {
            $set: {
                text: req.body.text,
                updatedAt: new Date(),
            },
        },
        { new: true },
    );
    return res.send(updatedMessage);
});

router.delete('/:messageId', async (req, res) => {
    const message = await req.context.models.Message.findById(
        req.params.messageId,
    );
    let result = null;
    if (message) {
        result = await message.remove();
    }
    return res.send(result);
});

export default router;
