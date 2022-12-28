//prompt on actions Add, List, Delete, quit
let input= prompt("Please enter a command add, list, delete or 'q': ");
const toDoList = ['Collet Eggs', 'Feed Chickens'];


//Loop until q is entered
while (input !== 'quit' && input !== 'q'){


// list all items in the to do for of using literal
 if (input === 'list'){
    for(let i =0; i < toDoList.length; i++){
    console.log(`${i}: ${toDoList[i]}`);
    }

 }else if (input === 'add'){
    const addToDo = prompt('What is the new todo: ');
    toDoList.push(addToDo);
    console.log(`New Todo ${addToDo} has been added to the list`);
 }else if (input === 'delete'){
    const indexPrompt = prompt('What task number would you like to delete: ');
    deleted = toDoList.splice(indexPrompt,1);
    console.log(`The following ${deleted} has been deleted`);

 }

 input= prompt("Please enter a command add, list, delete or 'q': ");
    // }
    

}
console.log('Okay, You quit the App');
