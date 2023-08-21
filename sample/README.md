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

#### Сheck the size of your dependencies

	$ du -hs node_modules/
	11M	node_modules/

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

#### Сheck new size of your dependencies

	$ du -hs node_modules/
	5,1M	node_modules/
