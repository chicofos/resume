
const Hapi = require('hapi');

const server = Hapi.server({
    host: 'localhost',
    port: 3000
});

const init = async () => {

    await server.register(require('inert'));

    server.route([{
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return h.file('./index.html');
        }
    },
    {
        method: 'GET',
        path: '/photo.png',
        handler: {
            file: 'photo.png'
        }
    }]);

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

init();