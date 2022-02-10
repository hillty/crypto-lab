const alphArray = "abcdefghijklmnopqrstuvwxyz".split('')
const cipherArray = "badcfehgjilknmporqtsvuxwzy".split('')
let decodedString = []

const decode = (str) => {
    for(let i = 0; i < str.length; i++){
        decodedString.push(alphArray[cipherArray.indexOf(str[i])])
    }
    return decodedString.join('')
}

console.log(decode('jkpufdqzosphqbogz'))