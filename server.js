const StaticServer = require('static-server');
const port = 8080;

const server = new StaticServer({
    rootPath: './dist',
    port,
    open: true
});

server.start(() => console.log(`Server running on port ${port}`));