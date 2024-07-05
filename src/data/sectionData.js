// Section Data Object Definition

function SectionData(name, marker, title, subTitle, sectionType, sectionNfo, hasGallery, galleryType, galleryThumbs, galleryImages) {
    this.name = name;
    this.marker = marker;
    this.title = title;
    this.subTitle = subTitle;
    this.sectionType = sectionType;
    this.sectionNfo = sectionNfo;
    this.hasGallery = hasGallery;
    this.galleryType = galleryType;
    this.galleryThumbs = galleryThumbs;
    this.galleryImages = galleryImages;
}

SectionData.prototype.printName = function() {
    console.log(`Name: ${this.name}`);
}

SectionData.prototype.printMarker = function() {
    console.log(`Marker: ${this.marker}`);
}

SectionData.prototype.printTitle = function() {
    console.log(`Title: ${this.title}`);
}

SectionData.prototype.printSubtitle = function() {
    console.log(`Subtitle: ${this.subTitle}`);
}

SectionData.prototype.printSectionType = function() {
    console.log(`Section Type: ${this.sectionType}`);
}

SectionData.prototype.printSectionNfo = function() {
    console.log(`SectionNfo: ${this.sectionNfo}`);
}

SectionData.prototype.printHasGallery = function() {
    console.log(`HasGallery: ${this.hasGallery}`);
}

SectionData.prototype.printGalleryType = function() {
    console.log(`Gallery Type: ${this.galleryType}`);
}

SectionData.prototype.printGalleryImages = function() {
    console.log(`Gallery Images: ${JSON.stringify(this.galleryImages, null, 2)}`);
}

export default SectionData;