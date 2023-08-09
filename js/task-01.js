const list = document.querySelector('#categories');
const items = list.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
    const itemName = item.querySelector('h2').textContent;
    const itemLength = item.querySelectorAll('ul li').length;

    console.log(`Category: ${itemName}`);
    console.log(`Elements: ${itemLength}`);
})

