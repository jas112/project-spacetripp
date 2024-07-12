// Link Object Definition

function LinkData(url, icon, title, linkText) {
    this.url = url;
    this.icon = icon;
    this.title = title;
    this.linkText = linkText;
}

LinkData.prototype.printUrl = function(){
    console.log(`Link Url: ${this.url}`);
}

LinkData.prototype.printTitle = function(){
    console.log(`Link Title: ${this.title}`);
}

LinkData.prototype.printLinkText = function(){
    console.log(`Link Text: ${this.linkText}`);
}

export default LinkData