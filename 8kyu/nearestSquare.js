function nearestSq(n) {
    const sqrt = Math.sqrt(n);
    const rounded = Math.round(sqrt);
    const prevSq = Math.pow(rounded - 1, 2);
    const currSq = Math.pow(rounded, 2);
    const nextSq = Math.pow(rounded + 1, 2);
  
    if (n === currSq) {
      return n; // n is already a perfect square
    } else if (Math.abs(n - currSq) <= Math.abs(n - prevSq) && Math.abs(n - currSq) <= Math.abs(n - nextSq)) {
      return currSq; // currSq is the nearest square number
    } else if (Math.abs(n - prevSq) <= Math.abs(n - nextSq)) {
      return prevSq; // prevSq is the nearest square number
    } else {
      return nextSq; // nextSq is the nearest square number
    }
  }
  