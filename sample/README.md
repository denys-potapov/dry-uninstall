# Using simple-node-logger without momentjs

You've created a minimal project that uses [simple-node-logger](https://www.npmjs.com/package/simple-node-logger), simple multi-level logger for console and files:

```javascript
// index.js
const SimpleLogger = require('simple-node-logger');
const appender = new SimpleLogger.appenders.ConsoleAppender();

const manager = new SimpleLogger();
manager.addAppender(appender);

const log = manager.createLogger();
log.info('this is a simplelog statement');
````

#### Check the size of bundle (~383 kb)

    esbuild index.js --bundle --platform=node --outfile=index.dist.js
    
      index.dist.js  383.7kb

### Removing momentjs

Change timestamp format code to remove the momentjs dependency:

```javascript
// 
appender.formatter = function(entry) {
    const fields = this.formatEntry( entry, appender);

    return fields.join( appender.separator );
};
appender.formatTimestamp = (ts) => {
    return ts.toString();
};

```

And override it in `package.json`

```json
{
  "dependencies": {
    "simple-node-logger": "^21.8.12"
  },
  "overrides": {
    "moment": "npm:dry-uninstall"
  }
}
```

#### Check the size of bundle (~241 kb)

    esbuild index.js --bundle --platform=node --outfile=index.dist.js
    
      index.dist.js  241.7kb

Saved around 140 kb, not bad.
