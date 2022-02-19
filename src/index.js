module.exports = function check(str, bracketsConfig) {
  const stack = []
  
  if (str.length % 2 > 0) return false

  for (let i=0; i<str.length; i++) {
    for (let arr of bracketsConfig) {
      if (arr[0] === str[i]) {
        if (stack[stack.length - 1] === arr[0] && arr[0] === arr[1]) {
          stack.pop()
          break
        }
        else stack.push(str[i])
        break;
      }

      if (str[i] === arr[1] && stack[stack.length - 1] === arr[0]) {
        stack.pop()
        break;
      }
    }
  }

  if (stack.length === 0) return true
  else return false
}
