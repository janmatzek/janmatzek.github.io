let alps = {
    photo: 'images/alps.jpg',
    title: 'Austrian Alps',
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante."
}

let bled = {
    photo: 'images/bled.jpg',
    title: 'Bled',
    description: "Et harum quidem rerum facilis est et expedita distinctio. Cras elementum. In rutrum. Aliquam id dolor. Integer lacinia. "
}

let fuji = {
    photo: 'images/fuji.jpg',
    title: 'Mount Fuji',
    description: "Duis viverra diam non justo. Etiam posuere lacus quis dolor. Nullam rhoncus aliquam metus."
}

let path = {
    photo: 'images/path.jpg',
    title: 'Mountain path',
    description: "Aliquam id dolor. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Nam quis nulla. Curabitur vitae diam non enim vestibulum interdum."
}


let scotland = {
    photo: 'images/scotland.jpg',
    title: 'Scottish hills',
    description: "Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus."
}

let sunset = {
    photo: 'images/sunset.jpg',
    title: 'Sunset and clouds',
    description: "Integer tempor. Duis risus. Etiam dictum tincidunt diam. Proin mattis lacinia justo. Nullam eget nisl."
}

let thailand = {
    photo: 'images/thailand.jpg',
    title: 'Chiang Rai',
    description: "Praesent in mauris eu tortor porttitor accumsan. Donec ipsum massa, ullamcorper in, auctor et, scelerisque sed, est."
}

let yellowstone = {
    photo: 'images/yellowstone.jpg',
    title: 'Yellowstone',
    description: "Integer tempor. Sed ac dolor sit amet purus malesuada congue. Etiam egestas wisi a erat. Vivamus ac leo pretium faucibus."
}

let imagesData = [alps, bled, fuji, path, scotland, sunset, thailand, yellowstone]

let currentPhoto = 0

$('#rightArrow').click( () => {
    if (currentPhoto<(imagesData.length-1)) {
    currentPhoto++;
    loadPhoto(currentPhoto)}
    else {
        currentPhoto = 0;
        loadPhoto(currentPhoto)
    }
})
$('#leftArrow').click( () => {
    if (currentPhoto>0) {
    currentPhoto = currentPhoto - 1;
    loadPhoto(currentPhoto)}
    else {
        currentPhoto = 7;
        loadPhoto(currentPhoto)
    }
})

imagesData.forEach ((item, index) => {
    item = imagesData[index].photo
    $('.thumbnails').append(`<div class="thumbnail" data-index="${index}" id="th${index}"><img src="${item}" class="th"><div class="bubble">`+imagesData[index].title+`</div></div>`)
    
})

$('.thumbnail').click((event) => {
    let indexClicked = $(event.target).attr('data-index')
    currentPhoto = parseInt(indexClicked)
    loadPhoto(currentPhoto)
})

let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', imagesData[currentPhoto].photo)
    $('#photo-title').text(imagesData[currentPhoto].title)
    $('#photo-description').text(imagesData[currentPhoto].description)
    $('.thumbnail').css('box-shadow', '0px 12px 10px -10px #aaaaaa')
    $('#th'+currentPhoto).css('box-shadow', '0px 12px 10px -10px #000000')
    }
    // the append is an issue -> it literally appends to previous value, including what was inserted by javaScript
    loadPhoto(currentPhoto)