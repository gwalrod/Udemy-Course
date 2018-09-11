
class wquery {
    constructor(el){
        if(el.indexOf('.') > -1){
            el = el.replace('.', '');
            console.log(el);
            this.elements = document.getElementsByClassName(el);
        }else if(el.indexOf('#') > -1){
            el = el.replace('#', '');
            this.elements = [document.getElementById(el)];
        }else{
            this.elements = document;
        }

    }

    addClass(cl){
        var count = 0;
        while(count < this.elements.length){
            if(this.elements[count].className){
                this.elements[count].className += " " + cl;
            }else{
                this.elements[count].className = cl;
            }
            count++;
        }
    }

}

function wQuery(el){
    var element = new wquery(el);
    return element;
}