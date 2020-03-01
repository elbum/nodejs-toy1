var boolVar = false;
console.log("불리언은" + (boolVar ? "참" : "거짓") + "입니다");

var cart = { name: "도서", price: "1500" };
var getTotal = function(cart) {
  return cart.price + "원";
};
var myCart = `장바구니에 ${cart.name} 가 있습니다 금액은 ${getTotal(
  cart
)} 임돵. `;
console.log(myCart);
