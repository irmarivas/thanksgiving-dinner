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


// Make instances of both of the objects