function multiples() {
    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0 && i % 3 !== 0) {
            console.log(i);
        }
    }
}
multiples();
