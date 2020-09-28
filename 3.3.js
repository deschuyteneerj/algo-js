const array = [100, 101, 102];

const duplicate = [...array];

for(let i = 0; i < array.length; i++)
{
    duplicate.push(array[i]);
}
console.log(duplicate);

const duplicate2 = array.concat(array);

console.log(duplicate2);