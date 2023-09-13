const app = require('./app');
const config = require('./config');
const logger = require('./config/logger.config');
let server;

server = app.listen(config.port, () => {
    logger.info(`Listening to port ${config.port}`);
});

const exitHandler = () => {
    if (server) {
        server.close(() => {
            logger.info('Server closed');
            process.exit(1);
        });
    } else {
        process.exit(1);
    }
};

const unexpectedErrorHandler = (error) => {
    logger.error(error);
    exitHandler();
};

