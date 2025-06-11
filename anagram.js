/*
  Write a function isAnagram which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    n1=str1.length
    n2=str2.length
    if(n1!=n2){
        return false;
    }
    let flag=1
    let i,j;
    for (i=0;i<n1;i++){
        flag=1
        for (j=0;j<n2;j++){
        if (str1[i]==str2[j]){
            console.log("i="+i+",j="+j)
            str1[i]="*"
            flag=0
        }
        }
        if (flag==1){
            return false
        }
    }
    return true
}

module.exports = isAnagram;
