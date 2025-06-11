/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str=str.toLowerCase();
  n=str.length;
  k=n-1;
  flag=0
  for (i=0;i<n;i++)
  {
      if(str[i]!=str[k])
      {     flag=1;
            break;
      }
      k--;
  }
  if(flag==1)
  {     return false;
  }
  return true
}

module.exports = isPalindrome;
