function star_pattern(row) {
    for (let i = 1; i <= row; i++) {
        result = " "; // creat new var with blank
        for (let j = 1; j <= i; j++) {
            result += " A " //add new * at col iteretion.
        }
        console.log(result);
    }
}
star_pattern(10);