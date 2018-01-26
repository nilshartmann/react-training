import { createSelector } from "reselect";

const shopItemsSelector = state => {
  console.log(`Calculating shop items: ${JSON.stringify(state.shop.items)}`);
  return state.shop.items;
};
const taxPercentSelector = state => {
  console.log(`Calculating tax percent: ${state.shop.taxPercent}`);
  return state.shop.taxPercent;
};

// https://github.com/reactjs/reselect#createselectorinputselectors--inputselectors-resultfunc
const subtotalSelector = createSelector(
  shopItemsSelector, // passed as items
  items => {
    const subTotal = items.reduce((acc, item) => acc + item.value, 0);
    console.log(`Calculating sub total: ${subTotal}`);
    return subTotal;
  }
);

const taxSelector = createSelector(
  subtotalSelector, // passed as subtotal
  taxPercentSelector, // passed as taxPercent
  (subtotal, taxPercent) => {
    const tax = subtotal * (taxPercent / 100);
    console.log(`Calculating tax: ${tax}`);
    return tax;
  }
);

export const totalSelector = createSelector(
  subtotalSelector, // passed as subtotal
  taxSelector, // passed as tax
  (subtotal, tax) => {
    const total = { total: subtotal + tax };
    console.log(`Calculating total: ${JSON.stringify(total)}`);
    return total;
  }
);

let exampleState = {
  shop: {
    taxPercent: 8,
    items: [{ name: "apple", value: 1.2 }, { name: "orange", value: 0.95 }]
  }
};

console.log("Calculating dependent values");

console.log(subtotalSelector(exampleState)); // 2.15
console.log(taxSelector(exampleState)); // 0.172
console.log(totalSelector(exampleState)); // { total: 2.322 }

console.log("Calculating dependent values a second time");

console.log(subtotalSelector(exampleState)); // 2.15
console.log(taxSelector(exampleState)); // 0.172
console.log(totalSelector(exampleState)); // { total: 2.322 }

console.log("Moving to Germany and raising tax to 19%");

exampleState = {
  shop: {
    ...exampleState.shop,
    taxPercent: 19
  }
};

console.log(subtotalSelector(exampleState)); // 2.15
console.log(taxSelector(exampleState)); // 0.4085
console.log(totalSelector(exampleState)); // { total: 2.5585 }
