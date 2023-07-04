//linked list are methods, they have local variables//

//creates the linked list function//
class linkedList {
    constructor(head = null) {
    this.head = head;
    };

    //append will add the new node to the end of the linked list//
    append(value) {
        //this checks to see if it's an empty node//
        if (!this.head) {
            this.head = new node(value);
            return this
        }
        //if node is not empty this will apply the new node to the end (tail)//
        let tail = this.getTail();
        tail.next = new node(value);
        return tail;
    };

    //prepend will add the new node to the start of the list//
    prepend(value) {
        //check if node is empty//
        if (!this.head) {
            this.head = new node(value);
            return this;
        }
        let prevHead = this.head;
        this.head = new node(value, prevHead);
    }

    getTail() {
        //check to see if the node is empty first//
        if (!this.head) return null;
        let tail = this.head;
        //if tail isn't empty it will add the value to the tail//
        while (tail.next !== null) {
            tail = tail.next;
        }
        return tail;
        };
    
    //this will return the total number of nodes in the list//
    size() {
        let nodeCount = 0;
        let counter = this.head;
        //make sure the list isn't empty//
        while (counter !== null) {
            //this will count the nodes and return the count//
            nodeCount++;
            counter = counter.next;
        }
        return nodeCount;
    };

    //this will return whatever the head value is//
    getHead() { 
        return this.head
    };

    //this will return a node at the given index//
    at(index) {
        //check to see if it an empty node//
        if (!this.head) return null;

        let counter = this.head;
        for (let i = 0; i < index; i++) {
            counter = counter. next;
        }
        //return counter if counter is available and if it is not available return null//
        return counter ? counter : null;
    };

    //this will take the last element off the list//
    pop() {
        //check to see if it is an empty list//
        if (!this.head) return null;

        //if there is only one node in the list pop won't work because if you pop it off it will make the list empty//
        if (!this.head.next) {
            this.head = null;
            return;
        }
        //if there is more than one node in the list//
        //-2 is there because it should look at the pointer before the tail after looking at the size//
        //uses the at and size methods from earlier in the linked list//
        let pointerBeforeTail = this.at(this.size() -2);
        pointerBeforeTail.next = null;
        return this.head;
    };

    //this will search the list and return true if the list contains the value or false if it does not//
    contains(value) {
        //check the node list to make sure it isn't empty//
        if (!this.head) return null;

        //starts counter at first node in list//
        let counter = this.head;
        //if it is not null run this//
        while (counter !==null) {
            //this will return true if the value is in the list//
            if (value === counter.value) {
                return true;
            }
            //moves through the counters//
            counter = counter.next;
        }
        //if value is not in the list it will return false//
        return false;
    };

    //this will return the index of the node containing value or null if not found//
    find(value) {
        //check to see if list is empty//
        if (!this.head) return null;

        let index = 0;
        let counter = this.head;
        while (counter !==null) {
            index++;
            if (value === counter.value) {
                return index;
            }
            counter = counter.next;
        }
        return null;
    };

    //represents the linked list objects as strings so they can be printed and previewed in the console//
    toString() {
        //check for empty list//
        if (!this.head) return "null";

        let output = "";
        let counter = this.head;
        while (counter.next !==null) {
            //not arrow functions (->) part of the printed output//
            output = `${output} ( ${counter.value} ) ->`;
            counter = counter.next;
        }
        return `${output} ( ${counter.value} ) -> null`;
    };
};

//node is each individual item inside the list//
class node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
};

let list = new linkedList();

//console.logs to check the linked list//
console.log(list.prepend(1));
console.log(list.append(2));
console.log(list.append(3));
console.log(list.append(4));
console.log(list.size());
console.log(list.getHead());
console.log(list.getTail());
console.log(list.at(2));
console.log(list.pop());
console.log(list.contains(3));
console.log(list.find(2));
console.log(list.toString());
