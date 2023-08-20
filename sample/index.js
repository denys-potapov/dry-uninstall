const SimpleLogger = require('simple-node-logger');

const appender = new SimpleLogger.appenders.ConsoleAppender();

// override timestamp formatting
appender.formatter = function(entry) {
    const fields = this.formatEntry( entry, appender);

    return fields.join( appender.separator );
};
appender.formatTimestamp = (ts) => {
    return ts.toString();
};

const manager = new SimpleLogger();
manager.addAppender(appender);

const log = manager.createLogger();
log.info('this is a simplelog statement');
