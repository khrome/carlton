const template = require('es6-template-strings');

module.exports = (ob, context)=>{
    let result = {}
    Object.keys(ob).forEach((key)=>{
        Object.defineProperty(result, key, {
            get: ()=>{
                if(typeof ob[key] === 'string') return template(ob[key], context);
                return ob[key];
            },
            set: ()=>{
                throw new Error('Attempted to set immutable carlton object');
            },
            enumerable: true,
            configurable: true
        });
    });
    return result;
}
