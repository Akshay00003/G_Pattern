function printGShape() {
    const height = 10;
    const width = 10;
    let pattern = Array.from(Array(height), () => Array(width).fill(' '));


    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        if ((i === 0 && j !== 0) ||
            (i === height - 1 && j !== width - 1) ||
            (i === Math.floor(height / 2) && j >= Math.floor(width / 2)) ||
            (j === 0 && i !== 0 && i !== height - 1) ||
            (j === width - 1 && i >= Math.floor(height / 2))) {
          pattern[i][j] = '*';
        }
      }
    }


    pattern.forEach(row => console.log(row.join(' ')));
  }

  // Call the function to print 'G'
  printGShape();