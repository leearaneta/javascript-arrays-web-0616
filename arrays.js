var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  var new_array = array
  var new_element = element
  new_array.unshift(new_element)
  return new_array
}

function descructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array
}

function addElementToEndOfArray(array, element) {
  var new_array = array
  var new_element = element
  new_array.push(new_element)
  return new_array
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array
}

function accessElementInArray(array, index) {
  return array[index]
}

function removeElementFromBeginningOfArray(array) {
  var new_array = array
  new_array.shift()
  return new_array
}

function removeElementFromEndOfArray(array) {
  var new_array = array
  new_array.pop()
  return new_array
}
