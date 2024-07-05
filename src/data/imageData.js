// Image Data Object Definition

function ImageData(image, alt, description, id) {
    this.image = JSON.stringify(image);
    this.image2 = image;
    this.imageAlt = alt;
    this.imageDescription = description;
    this.imageId = id;
}

ImageData.prototype.printImageImg = function() {
    console.log(`Image Img: ${this.image}`);
}

ImageData.prototype.printImageAlt = function() {
    console.log(`Image Alt: ${this.imageAlt}`);
}

ImageData.prototype.printImageDescription = function() {
    console.log(`Image Description: ${this.imageDescription}`);
}

ImageData.prototype.printImageId = function() {
    console.log(`Image Id: ${this.imageId}`);
}

export default ImageData;