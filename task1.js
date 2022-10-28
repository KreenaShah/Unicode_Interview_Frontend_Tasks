const readline = require("readline-sync")
let n = Number(readline.question("Enter number of words : "))

var word=[]
for(let i=0;i<n;i++)
{
    let Iword=readline.question("Enter the word :")
    word.push(Iword)
}
console.log(word)

var newword = [word[0]]
c = 1

//print no. of distinct words
for(let i=0;i<n;i++)
{
  if(word[0] != word[i])
  {
    c += 1
    newword.append(word[i])
  }
}
print("Number of distinct words : " + str(c))

count = 0
for(let i=0;i<c;i++)
{
  for(let k=0;k<n;k++)
  {
    if(newword[i] == word[k])
      count += 1
    else
      count = 1
  }
print("For the word " + newword[i] + " , the count is " + str(count))
}
