const sample = [1, [2, 3, null, 4], [null], 5]

const flattenList = data => data.flat().filter(i=>i !== null && i !== undefined)

console.log('result =======>',flattenList(sample))
