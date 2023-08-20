# Using simple-node-logger without momentjs

You've created a minimal project that uses [simple-node-logger][https://www.npmjs.com/package/simple-node-logger].
It's s a simple multi-level logger for console, file, and rolling file appenders:

const SimpleLogger = require('simple-node-logger');

```javascript
// index.js
const appender = new SimpleLogger.appenders.ConsoleAppender();

const manager = new SimpleLogger();
manager.addAppender(appender);

const log = manager.createLogger();
log.info('this is a simplelog statement');
````

 du -hs node_modules/
11M	node_modules/

// override timestamp formatting
appender.formatter = function(entry) {
    const fields = this.formatEntry( entry, appender);

    return fields.join( appender.separator );
};
appender.formatTimestamp = (ts) => {
    return ts.toString();
};


### Before

### Removing momentjs


```JSON
```