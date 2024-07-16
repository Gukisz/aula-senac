const film = {
    name: 'Hunger Games',
    directors: ['Francis Lawrence, Gary Ross'],
    year: 2012,
    cast: ['Jeniffer Lawrance', 'Josh Hutcherson', 'Liam Hemsworth', 'Woody Harrelson', 'Elizabeth Banks', 'Stanley Tucci', 'Donald Sutherland', 'Lenny Kravitz', 'Willow Shields', 'Amandla Stenberg', 'Alexander Ludwig', 'Isabelle Fuhrman'],
    watched: true
}

film.characters = ['Katniss Everdeen', 'Peeta Mellark', 'Gale Hawthorne', 'Haymitch Abernathy', 'Effie Trinket', 'Caesar Flickerman', 'Presidente Snow', 'Cinna', 'Primrose Everdeen', 'Rue', 'Cato', 'Clove']

for (let i = 0; i < film.cast.length; i++){
    console.log(`Atores: ${film.cast[i]} Personagens: ${film.characters[i]}`)
}

film.cast[0] = 'Xuxa';

console.log(film.cast)