class Page {
    constructor(id, section, title, contentElements)
    {
        this.id = id != null ? id : 0;
        this.section = section;
        this.title = title;
        this.contentElements = contentElements  != null ? contentElements : [];
        this.idCounter = 5; // arbitrarily chosen, for simple element id usage.
    }

    updateElement(elementId, content)
    {
        this.contentElements[elementId] = {type: 'p', id: elementId, content: content}
    }

    addElement(element)
    {
        const newId = ++this.idCounter;
        const content = element.content;
        const newElement = {type: 'p', id: newId, content: content};
        this.contentElements.push(newElement);
    }

}

module.exports = Page;