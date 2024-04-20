function compareMovies(movie1, movie2) {   
    const firstBeforeSecond = movie1.year < movie2.year;
    const sameYear = movie1.year === movie2.year;

    return `O primeiro filme foi lançado antes do segundo? ${firstBeforeSecond}\n` +
           `O primeiro filme foi lançado no mesmo ano do segundo? ${sameYear}`;
}

const movie1 = { name: "Primeiro Filme", year: 2010 };
const movie2 = { name: "Segundo Filme", year: 2010 };

console.log(compareMovies(movie1, movie2));
