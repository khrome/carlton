const should = require('chai').should();
const carlton = require('./carlton')

describe('carlton', ()=>{
    describe('performs basic template proxy', ()=>{
        it('fails in the docs example failure case', (done)=>{
            let state = {error:{}};
            let error_messages = {
                'err404' : `Page not found: ${state.error.message}`
            }
            setTimeout(()=>{
                state.error = {message:"foo"};
                error_messages.err404.should.equal('Page not found: undefined');
                done();
            });
        });

        it('succeeds in the docs example success case', (done)=>{
            let state = {error:{}};
            let error_messages = carlton({
                'err404' : 'Page not found: ${error.message}'
            }, state);
            setTimeout(()=>{
                state.error = {message:"foo"};
                error_messages.err404.should.equal('Page not found: foo');
                done();
            });
        });
    });
});
