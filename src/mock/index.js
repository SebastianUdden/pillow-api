import models from '../models';

export const createUsersWithMessages = async () => {
    const user0 = new models.User({
        username: 'Unauthorized',
        email: 'invalid@email.com',
        password: 'z',
        firstname: 'Not',
        lastname: 'Authorized',
        location: 'Unknown',
        image:
            'http://www.safetylabelsolutions.com/assets/images/products/7004H-ISO.gif',
        createdAt: new Date(),
    });
    const user1 = new models.User({
        username: 'Sebbe',
        email: 'GUN@email.com',
        password: 'x',
        firstname: 'Sebastian',
        lastname: 'Uddén',
        location: 'Sweden',
        image:
            'https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg',
        createdAt: new Date(),
    });
    const user2 = new models.User({
        username: 'Henke',
        email: 'hfm@email.com',
        password: 'y',
        firstname: 'Henrik',
        lastname: 'Fridström',
        location: 'Sweden',
        image:
            'https://assets1.ignimgs.com/2019/01/11/avatar3d-1280-1547246301612_1280w.jpg',
        createdAt: new Date(),
    });

    const message1 = new models.Message({
        text: 'Setup of the MEN structure is complete!',
        user: user1.id,
        createdAt: new Date(),
    });

    const message2 = new models.Message({
        text: 'Maybe time to add the R to complete MERN?',
        user: user2.id,
        createdAt: new Date(),
    });

    const message3 = new models.Message({
        text: 'By R, I mean React =)',
        user: user2.id,
        createdAt: new Date(),
    });

    const message4 = new models.Message({
        text:
            'Nice, that means MongoDb, Express, React and Node. Full Stack baby!',
        user: user1.id,
        createdAt: new Date(),
    });

    await message1.save();
    await message2.save();
    await message3.save();
    await message4.save();

    await user0.save();
    await user1.save();
    await user2.save();
};
