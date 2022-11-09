//*************************************** */
// The Data AKA the Model in Models, Views, Controllers (MVC)
// Using a basic array since not yet using a database 
//*************************************** */
const fruits = [
    {
        name:'Apple',
        color: 'red',
        readyToEat: true
    },
    {
        name:'Pear',
        color: 'green',
        readyToEat: false
    },
    {
        name:'Banana',
        color: 'yellow',
        readyToEat: true
    }
];

//*************************************** */
// Export the data so we can use it in another file 
//*************************************** */
module.exports = fruits