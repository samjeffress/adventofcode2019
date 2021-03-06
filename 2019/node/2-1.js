const input = [
  1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,10,1,19,1,19,5,23,1,23,9,27,2,27,6,31,1,31,6,35,2,35,9,39,1,6,39,43,2,10,43,47,1,47,9,51,1,51,6,55,1,55,6,59,2,59,10,63,1,6,63,67,2,6,67,71,1,71,5,75,2,13,75,79,1,10,79,83,1,5,83,87,2,87,10,91,1,5,91,95,2,95,6,99,1,99,6,103,2,103,6,107,2,107,9,111,1,111,5,115,1,115,6,119,2,6,119,123,1,5,123,127,1,127,13,131,1,2,131,135,1,135,10,0,99,2,14,0,0
]

const ADD = 1
const MULTIPLY = 2
const HALT = 99

const rewindInput = [...input.slice(0,1), 12, 2,...input.slice(3)]

console.log(input.length, rewindInput.length)

const add = (a, b) => a + b
const multiply = (a, b) => a * b

const execute = (input, startingPosition, operator) => {
  const firstValuePosition = input[startingPosition+1]
  const secondValuePosition = input[startingPosition+2]
  const value = operator(input[firstValuePosition], input[secondValuePosition])
  const positionToReplace = input[startingPosition+3]
  const newArray = [...input.slice(0,positionToReplace), value, ...input.slice(positionToReplace +1)]
  return newArray
}

const processOpcode = (input, index) => {
  const startingPosition = index * 4
  console.log(startingPosition, input[startingPosition])
  const opcode = input[startingPosition]
  switch (opcode) {
    case ADD:
      console.log('ADD')
      return processOpcode(execute(input, startingPosition, add), index+1)
      break;
    case MULTIPLY:
      console.log('MULTIPLY')
      return processOpcode(execute(input, startingPosition, multiply), index+1)
      break;
    case HALT: 
      console.log('HALT')
      return input
      break;
    default: 
      console.log('Unknown opcode')
  }
}

const r = processOpcode(rewindInput, 0)

const postHaltPositionZero = r[0]
console.log(postHaltPositionZero)