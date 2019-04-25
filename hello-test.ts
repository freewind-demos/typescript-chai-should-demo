import hello from './hello'
import chai from 'chai';

chai.should();

describe('hello', () => {
  it('should give hello words to given name', () => {
    const words = hello('typescript')
    words.should.contain('Hello, type')
  })
})

