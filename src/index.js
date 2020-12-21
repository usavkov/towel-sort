module.exports = function towelSort (matrix) {
    if (!matrix || matrix.length === 0) {
      return []
    }

    return matrix.map((val, indx) => {
      return indx % 2 === 0 ? val : val.reverse();
    }).flat()
}
