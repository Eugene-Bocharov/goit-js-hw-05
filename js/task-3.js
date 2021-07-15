console.log('-------task-3------');

class Storage{
  constructor(items) {
    this.items = items;
}
getItems() {
    return this.items;
}
addItem(item){
    this.items.push(item)
}
removeItem(item){
    const checkItem = this.items.indexOf(item);
    if(checkItem > 0){
        this.items.push(item)
    }
}
}


const storage = new Storage([
    'Нанітоіди',
    'Пролонгер',
    'Залізні жупи',
    'Антигравітатор',
  ]);
  
  const items = storage.getItems();
  console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]
  
  storage.addItem('Дроїд');
  console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]
  
  storage.removeItem('Пролонгер');
  console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]