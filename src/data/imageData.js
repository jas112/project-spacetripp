// Image Data Object Definition

function ImageData(image, alt, description, id) {
    this.image = image;
    this.imageAlt = alt;
    this.imageDescription = description;
    this.imageId = id;
}

SectionData.prototype.printImageAlt = function() {
    console.log(`Image Alt: ${this.imageAlt}`);
}

SectionData.prototype.printImageDescription = function() {
    console.log(`Image Description: ${this.imageDescription}`);
}

SectionData.prototype.printImageId = function() {
    console.log(`Image Id: ${this.imageId}`);
}

export default ImageData;