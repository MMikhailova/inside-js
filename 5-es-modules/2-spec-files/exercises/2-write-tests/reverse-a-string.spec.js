// #todo

import { reverseAString } from './reverse-a-string.js';

describe('it should reverseAString strings', () => {
  describe('when no argument is passed', () => {
    it('default parameter is an empty string', () => {
      expect(reverseAString()).toEqual('');
    });
  });
  describe('when argument is a string', () => {
    it('the empty string should return an empty string', () => {
      expect(reverseAString('')).toEqual('');
    });
    it('"toads" should return "sdaot"', () => {
      expect(reverseAString('toads')).toEqual('sdaot');
    });
    it('when argument is a palindrom should be the same forwards and backwards', ()=>{
      expect(reverseAString('kayak')).toEqual('kayak');
    })
    it('"1" should return "1"',()=>{
      expect(reverseAString('1')).toEqual('1')});
    it('"undefined" should return "denifednu"', ()=>{
       expect(reverseAString('undefined')).toEqual('denifednu')});
    it('should be different forwards and backwards',()=>{
       const actual=reverseAString('hello')==='hello'
       expect(actual).toEqual(false)})
   
    it('it should return a string',()=>{
      const actual=reverseAString('hello')
      expect(typeof actual).toEqual('string')
    })
})
    // write at least 5 more tests
  
  describe('when argument is not a string', () => {
    it('true should return "text is not a string"', () => {
      expect(reverseAString(true)).toEqual("text is not a string");
    });
    it('NaN should return',()=>{
      expect(reverseAString(NaN)).toEqual('text is not a string')
    }); 
    it('null should return "text is not a srting"',()=>{
      expect(reverseAString(null)).toEqual('text is not a string')
    });
    it('number should return "text is not a string"',()=>{
      expect(reverseAString(321)).toEqual('text is not a string')})
  })