// revealing module pattern

const createSupplier = (function () {
    // private
    const name = 'General motors';
    const field = 'automobile';
    const getSupplierName = () => name;
    const getSupplierField = () => field;

    // public
    return {
        name,
        field,
        getName: () => getSupplierName(),
        getField: () => getSupplierField()
    }
})();

console.log(createSupplier.name); // General motors
console.log(createSupplier.field); // automobile
console.log(createSupplier.getName()); // General motors