//prompt on actions Add, List, Delete, quit
let input= prompt("Please enter a command add, list, delete or 'q': ");
//Loop until q is entered
while (input !== 'quit' && input !== 'q'){


const toDoList = ['Collet Eggs', 'Feed Chickens'];


//Create an add to list using push
    // if (input === 'add'){
    //     toDoList.push = prompt("Please add a todo item: ");
    //     console.log(toDoList);
    //     input= prompt("Please enter a command add, list, delete or 'q': ");
    // }
// list all items in the to do for of using literal
 if (input === 'list'){
    for(let i =0; i < toDoList.length; i++){
    console.log(`${i}: ${toDoList[i]}`);
    }

 }
// delete list by index
    // if(input === "delete"){
    // let listItem = parseInt(prompt("What list item would you like to delete: "));
    // toDoList.remove[listItem];
    // console.log(toDoList);
 input= prompt("Please enter a command add, list, delete or 'q': ");
    // }
    

}
console.log('Okay, You quit the App');
