import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
    const wikis = await req.context.models.Wiki.find();
    return res.send(wikis);
});

router.get('/:wikiId', async (req, res) => {
    const wiki = await req.context.models.Wiki.findById(req.params.wikiId);
    return res.send(wiki);
});

router.post('/', async (req, res) => {
    const wiki = await req.context.models.Wiki.create({
        title: req.body.title,
        secondaryText: req.body.secondaryText,
        description: req.body.description,
        tags: req.body.tags,
        createdAt: new Date(),
    });
    return res.send(wiki);
});

router.put('/:wikiId', async (req, res) => {
    const updatedWiki = await req.context.models.Wiki.findByIdAndUpdate(
        req.params.wikiId,
        {
            $set: {
                title: req.body.title,
                secondaryText: req.body.secondaryText,
                description: req.body.description,
                tags: req.body.tags,
                updatedAt: new Date(),
            },
        },
        { new: true },
    );
    return res.send(updatedWiki);
});

export default router;
