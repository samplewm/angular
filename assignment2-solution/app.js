(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListService', ShoppingListService);

// to be renamed ShoppingListService to ShoppingListCheckOffService

ToBuyShoppingController.$inject = ['ShoppingListService',];
function ToBuyShoppingController(ShoppingListService) {
  var buyList = this;
  buyList.buy = ShoppingListService.getBuyItems();
  buyList.removeItem = function (itemIdex) {
    ShoppingListService.addDeleteItem(itemIdex);
    if (buyList.buy.length == 0)
       buyList.flag = true;

  }
}

AlreadyBoughtShoppingController.$inject = ['ShoppingListService'];
function AlreadyBoughtShoppingController(ShoppingListService) {
  var holdList = this;
  holdList.hold = ShoppingListService.getHoldItems();
  holdList.sz = function () {
	if (holdList.hold.length == 0)
	  holdList.flag = true;
    else
     holdList.flag = false;
  }
}

function ShoppingListService() {
  var service = this;

  // Buy List
  var buy = [{ name: "Cookies", quantity: 10 },
             { name: "Cokes", quantity: 20 },
             { name: "Cheese", quantity: 30 },
             { name: "Cakes", quantity: 40 },
             { name: "Wine", quantity: 50 }];
  // Bought List
  var hold = [];
  var msg;

  service.addDeleteItem = function (itemIdex) {
	var item={name: buy[itemIdex].name, quantity: buy[itemIdex].quantity};
    hold.push(item);
    buy.splice(itemIdex, 1);
  };

  service.getBuyItems = function () {
    return buy;
  };

  service.getHoldItems = function () {
    return hold;
  };


}

})();