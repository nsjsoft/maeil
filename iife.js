foo();
function foo() {
    console.log('foo')
}

foo();
var foo = function() {
    console.log('foo');
}

(function foo() {});
console.log(foo);