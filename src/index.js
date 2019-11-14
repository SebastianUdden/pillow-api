import 'dotenv/config';
import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import routes from './routes';
import models, { connectDb } from './models';
import { createUsersWithMessages } from './mock';

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(async (req, res, next) => {
    req.context = {
        models,
        me: await models.User.findByLogin(req.query.token || 'Unauthorized'),
    };
    next();
});

app.use('/session', routes.session);
app.use('/users', routes.users);
app.use('/messages', routes.messages);
app.use('/wikis', routes.wikis);

connectDb().then(async () => {
    if (process.env.ERASE_DB_ON_SYNC) {
        await Promise.all([
            models.User.deleteMany({}),
            models.Message.deleteMany({}),
        ]);
    }

    if (process.env.SEED_DB_WITH_USERS_AND_MESSAGES) {
        createUsersWithMessages();
    }
    app.listen(process.env.PORT || 3000, () =>
        console.log(`Example app listening on port ${process.env.PORT}...`),
    );
});
