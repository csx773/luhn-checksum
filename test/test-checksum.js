console.log ('Start of test-checksum file!');

var assert = require('chai').assert;
var checkNum = require("../lib/luhn-checksum");


//only last element will return true!!!
var listNum = [
79927398710,
79927398711,
79927398713
];

//checkSum(12);

describe("Luhn checkNum function", function() {
  it('Should return false', function(){
    var testNum = listNum[0];
    var result = checkNum(testNum);
    assert.isFalse(result);
  });

  it('Should return false', function(){
    var testNum = listNum[1];
    var result = checkNum(testNum);
    assert.isFalse(result);
  });

  it('Should return true', function(){
    var testNum = listNum[2];
    var result = checkNum(testNum);
    assert.isTrue(result);
  });

});  //end of describe test


/*
describe("Palindromes", function() {
  it("should return true if a word is a palindrome", function() {
    var word = "abba";
    var result = isPalindrome(word);
    assert.isTrue(result);
  });

  it("should return false if a word is NOT a palindrome", function() {
    var word = "not";
    assert.isFalse(isPalindrome(word));
  });

  it("should return true if a phrase is a palindrome", function() {
    var phrase = "a man a plan a canal panama";  //can replace with aabbaa  for phrase
    assert.isTrue(isPalindrome(phrase));
  });

  it("should return false if a phrase is NOT a palindrome", function() {
    var phrase = "this is not a palindrome"
    assert.isFalse(isPalindrome(phrase));
  });
});

*/