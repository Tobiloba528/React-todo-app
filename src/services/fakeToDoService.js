const items = [
  { todo: "Go to the Gym", id: "1" },
  { todo: "Read Some books", id: "2" },
  { todo: "Play Fifa for a little while", id: "3" },
  { todo: "Visit a friend", id: "4" },
  { todo: "Wash some clothes", id: "5" },
  { todo: "clean the house", id: "6" },
  { todo: "watch some movies", id: "7" }
];

export function getToDo (){
    return items
}

export function saveItem(item){
  let itemInDb = {};
  itemInDb.todo = item.todo;


  if(!itemInDb.id){
    itemInDb.id=Date.now() + 1;
  return items.push(itemInDb);
  }
  }
  
