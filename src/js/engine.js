function fractionCalculator(whole, decimal, periodic) {
    const firstPart = Array.from(periodic).map(() => '9');
    const secondPart = Array.from(decimal).map(() => '0');
    const den = Number([...firstPart, ...secondPart].join(''));
    const num = Number(whole+decimal+periodic) - Number(whole+decimal);
    return {num, den};
}

export default fractionCalculator;