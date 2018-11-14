// Write a Constructor for a Person Here
//Include 3 attributes and 1 Method

function makePerson(paramIsHappy, paramDishesMade, paramName)
{
    this.attribIsHappy = paramIsHappy;
    this.attribDishesMade = paramDishesMade;
    this.attribName = paramName;
    this.methodCook = function(paramFood)
    {
        return `${this.attribName} made ${paramFood}`;
    };
}


// Write a Constructor for a Meal Here
//Include 3 attributes and 1 Method

function makeMeal(paramIsTasty, paramHoursToCook, paramName)
{
    this.attribIsTasty  = paramIsTasty;
    this.attribHoursToCook = paramHoursToCook;
    this.attribName = paramName;
    this.methodExpires = function()
    {
        return `${this.attribName} is expired`;
    };
}


// Make instances of both of the objects

const person1 = new makePerson(true, 3, `Irma`);
const meal1 = new makeMeal(true, 3, `turkey`);