# dry-uninstall

Empty npm package to «uninstall» unused transitive dependencies.

Put it in `overrides` section to replace any package. If you want to remove `foo`
package:

```json
{
  "overrides": {
    "foo": "npm:dry-uninstall"
  }
}
```

If you want to remove `bar` package at any depth beyond `foo`:

```json
{
  "overrides": {
    "foo": {
      "bar": "npm:dry-uninstall"
    }
  }
}
```

See [documentation for overrides](https://docs.npmjs.com/cli/v9/configuring-npm/package-json?v=true#overrides) for full list of usage patterns. Or check the sample project [using simple-node-logger without momentjs](sample/README.md).


### Reasoning

1. **node_modules size**. In cases where tree-shaking does not work.  
2. **Simplified Build**. There was a long time when installing `mongodb` required `kerberos` package. And `kerberos` required to build native addon modules, and it can be painfull.
3. **Sequrity**. Replace the vulenrable packages, to be sure that the code is never used. 
4. **License Issues**

### Inside

This package is a single file, that exports dict that can be safelly imported:

```javascript
module.exports = {};
```
