function addBorder(picture: string[]): string[]{
    let top = "*".repeat(picture[0].length);
    picture.unshift(top)
    for (let i = 0; i < picture.length; i++){
        picture[i] = picture[i] + "*";
        picture[i] = "*" + picture[i]
    }
    let bottom = "*".repeat(picture[1].length);
    picture.push(bottom);
    
    return picture;
}

