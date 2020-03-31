//Write a program to convert Object Keys of JSON from camel Case to Snake Case using JavaScript.

const isObject = n => Object.prototype.toString.call(n) === "[object Object]";
const camelToSnake = str => str.split(/(?=[A-Z])/).join('_').toLowerCase();

const sample = {
    firstName: 'akash',
    fullAddress: [
      {
        'streetAddress': 'dhanori',
      },
      {
        'city': 'pune',
      },
    ],
  };

const convertToCamel = data => {
  if (isObject(data)) {
    const n = {};

    Object.keys(data).forEach(k => {
      n[camelToSnake(k)] = convertToCamel(data[k]);
    });

    return n;
  } else if (Array.isArray(data)) {
    return data.map(i => {
      return convertToCamel(i);
    });
  }

  return data;
};

console.log(convertToCamel(sample))

