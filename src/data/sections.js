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

// About Section Data

const aboutSectionData = new SectionData(
    'about',
    'about',
    'About Me',
    'A blurb about myself.',
    'nfo',
    `Some would say that I am soft spoken and contemplative. I would say that I am thoughtful, inquisitive and deeply analytical. A creative problem-solver with more than seven years of delivering design solutions with a breadth of training spanning architectural principles to web development. A personal philosophy revolving around the idea that curiosity, adaptability, continued learning and observation are vital to being an effective problem solver/designer/developer and a happy person./n/n
    My interests gravitate towards activities where my imagination is allowed to lead and discover new paths. I enjoy drawing, scifi/fantasy, comics/bande dessinee, animation, classic chambara samurai films, architecture, and art in all its forms. I strive towards being an effective collaborator and seek to connect and pool skills with fellow like-minded tech creatives.`,
    true,
    'hero',
    [], 
    []   
);

// WebDevelopment Section Data

const webDevSectionData = new SectionData(
    'wedDev',
    'webDev',
    'Web Development',
    'My journey in webDev.',
    'project',
    `Some would say that I am soft spoken and contemplative. I would say that I am thoughtful, inquisitive and deeply analytical. A creative problem-solver with more than seven years of delivering design solutions with a breadth of training spanning architectural principles to web development. A personal philosophy revolving around the idea that curiosity, adaptability, continued learning and observation are vital to being an effective problem solver/designer/developer and a happy person.

    My interests gravitate towards activities where my imagination is allowed to lead and discover new paths. I enjoy drawing, scifi/fantasy, comics/bande dessinee, animation, classic chambara samurai films, architecture, and art in all its forms. I strive towards being an effective collaborator and seek to connect and pool skills with fellow like-minded tech creatives.`,
    true,
    'project',
    [], 
    []   
);

// Email Development Section Data

const emailDevSectionData = new SectionData(
    'emailDev',
    'emailDev',
    'EmailDevelopment',
    'My exploraions in the emailDev.',
    'project',
    `Some would say that I am soft spoken and contemplative. I would say that I am thoughtful, inquisitive and deeply analytical. A creative problem-solver with more than seven years of delivering design solutions with a breadth of training spanning architectural principles to web development. A personal philosophy revolving around the idea that curiosity, adaptability, continued learning and observation are vital to being an effective problem solver/designer/developer and a happy person.

    My interests gravitate towards activities where my imagination is allowed to lead and discover new paths. I enjoy drawing, scifi/fantasy, comics/bande dessinee, animation, classic chambara samurai films, architecture, and art in all its forms. I strive towards being an effective collaborator and seek to connect and pool skills with fellow like-minded tech creatives.`,
    true,
    'project',
    [], 
    []   
);

// Graphic Design Section Data

const grfxDsnSectionData = new SectionData(
    'grfxDsn',
    'grfxDsn',
    'Graphic Design',
    'Art + Communication',
    'project2',
    `Some would say that I am soft spoken and contemplative. I would say that I am thoughtful, inquisitive and deeply analytical. A creative problem-solver with more than seven years of delivering design solutions with a breadth of training spanning architectural principles to web development. A personal philosophy revolving around the idea that curiosity, adaptability, continued learning and observation are vital to being an effective problem solver/designer/developer and a happy person.

    My interests gravitate towards activities where my imagination is allowed to lead and discover new paths. I enjoy drawing, scifi/fantasy, comics/bande dessinee, animation, classic chambara samurai films, architecture, and art in all its forms. I strive towards being an effective collaborator and seek to connect and pool skills with fellow like-minded tech creatives.`,
    true,
    'project2',
    [], 
    []   
);

// Visual Design Section Data

const visDsnSectionData = new SectionData(
    'visDsn',
    'visDsn',
    'Visual Design',
    'Concepts + Illustrations',
    'project2',
    `Some would say that I am soft spoken and contemplative. I would say that I am thoughtful, inquisitive and deeply analytical. A creative problem-solver with more than seven years of delivering design solutions with a breadth of training spanning architectural principles to web development. A personal philosophy revolving around the idea that curiosity, adaptability, continued learning and observation are vital to being an effective problem solver/designer/developer and a happy person.

    My interests gravitate towards activities where my imagination is allowed to lead and discover new paths. I enjoy drawing, scifi/fantasy, comics/bande dessinee, animation, classic chambara samurai films, architecture, and art in all its forms. I strive towards being an effective collaborator and seek to connect and pool skills with fellow like-minded tech creatives.`,
    true,
    'project2',
    [], 
    []   
);

const sectionsData = {
    about: aboutSectionData,
    webDev: webDevSectionData,
    emailDev: emailDevSectionData,
    grfxDsn: grfxDsnSectionData,
    visDsn: visDsnSectionData,
}

export default sectionsData;