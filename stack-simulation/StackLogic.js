
class Stack {


    constructor() {
        
        let wrapper = document.createElement("div");                //graphical look
        wrapper.id = "stack-wrapper";
       /* let text = document.createTextNode("Neki neki tuki je"); */
       /* wrapper.appendChild(text); */
        let formWrapper = document.getElementById("form-wrapper");
        formWrapper.appendChild(wrapper);
       /* document.body.appendChild(wrapper); */
        let displayValues = document.createElement("p");
        let sizeValue = document.createElement("p")
        displayValues.id = "valueDisplay";
        sizeValue.id = "valueSize";
        document.body.appendChild(displayValues);
        document.body.appendChild(sizeValue);


        this.count = 0;             //the creation of stack storage & count
        this.storage = [];
    }

    push(value) {

        this.storage[this.count] = value;
        

        let wrapperDOM = document.getElementById("stack-wrapper");

        let element = document.createElement("div");
        element.classList.add("stack-child"); 
        let nodeValue = this.storage[this.count];
        console.log(nodeValue);
        let text = document.createTextNode(value)
        wrapperDOM.appendChild(element);
        element.appendChild(text);

        this.count++;
        
        
       

    }

    pop() {
        if (this.count === 0) {
            return undefined;
        }



        this.count--;
        let result = this.storage[this.count-1];
        delete this.storage[this.count];
        let stackNode = document.getElementsByClassName("stack-child");
        stackNode[this.count].remove();
        return result;
    }

    size() {
        let para2 = document.getElementById("valueSize");
        para2.innerHTML = "";
        para2.innerHTML += "Numbers of elements in the stack: " + this.count;
        return this.count;
    }

    peek() {
        return this.storage[this.count-1];
    }

    print() {
        let para = document.getElementById("valueDisplay");
        para.innerHTML = "";

        for (let i = this.count-1; i  >= 0; i--) {
            
            console.log(this.storage[i]);
            para.innerHTML += " " + this.storage[i];

        }
    }

}




let myStack = new Stack();      //create our stack



function newData() {
    let x = document.getElementById("neki").value;
    myStack.push(x);    
}






function displayData() {
  console.log("Current data on stack is: ");
  myStack.print();
}

function popData() {
    console.log(myStack.pop());
}

function showSize() {
    console.log("The size of the current stack is: " + myStack.size());
 
}




