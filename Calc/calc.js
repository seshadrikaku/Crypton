const Calculate = (question) => {
    const parts = question.split(' ');
    const num1 = parseInt(parts[2]);
    const num2 = parseInt(parts[4]);
    const operation = parts[3];
  
    let result;
  
    switch (operation) {
      case 'plus':
        result = num1 + num2;
        break;
      case 'minus':
        result = num1 - num2;
        break;
      case 'multiplied':
        result = num1 * num2;
        break;
      case 'divided':
        result = num1 / num2;
        break;
      default:
        return 'Invalid operation';
    }
  
    return `${num1} ${operation} ${num2} is ${result}`;
  };
  
  module.exports = Calculate;
  