var alphabet = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
  'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ]

module.exports = function(argument) {
  var offset = ( argument - 1 )
  var letters = ( alphabet[offset % 26] )
  while (( offset = Math.floor(offset / 26) ) > 0) {
    --offset
    letters = ( alphabet[offset % 26] + letters ) }
  return letters }
