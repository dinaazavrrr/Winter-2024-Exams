class UniqueItemsManager {
  constructor() {
    this.items = [];
  }

  addItems(newItems) {
    this.items = this.items.concat(newItems);
  }

  getUniqueItems() {
    return DISTINCT(this.items);
  }
}
const itemManager = new UniqueItemsManager();
itemManager.addItems([1, 2, 3, 1, 2, 4, 5]);
const uniqueItems = itemManager.getUniqueItems();
console.log(uniqueItems);\

module.exports = DISTINCT;
