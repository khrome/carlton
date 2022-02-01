Carlton.js
==========
For certain use cases it'd be nice to have *lazy* evaluation of template literals, that's what this does.

let's take this example:

```js
    let state = {error:{}};
    let error_messages = {
        'err404' : `Page not found: ${state.error.message}`
    }
    setTimeout(()=>{
        state.error = {message:"foo"};
        console.log(error_messages.err404);
    });
```
which results in:

```bash
    Page not found: undefined
```

Now, let's alter it to use carlton:

```js
    const carlton = require('carlton');
    let state = {error:{}};
    let error_messages = carlton({
        'err404' : 'Page not found: ${error.message}'
    }, state);
    setTimeout(()=>{
        state.error = {message:"foo"};
        console.log(error_messages.err404);
    });
```
which results in:

```bash
    Page not found: foo
```
