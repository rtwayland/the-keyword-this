//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //It is typically used to referr to the properties and methods of an object. It is
      //usefull because several object can share a function, and because that function uses the 'this'
      //keyword, it can access the properties of any object that calls it.

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Explicit
      //Implicit
      //Default
      //new

  // 3) What is the difference between call and apply?

      //The only difference between them is that apply takes in an array of variables

  // 4) What does .bind do?

      //Binds a function to an object and assigns that binding to another variable.


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    var user = {
      username: 'uName',
      email: 'a@a.com',
      getUsername: function() {
        return this.username;
      }
    }

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.
user.getUsername();

//Next Problem


// Write the function definitions which will make the following function invocations function properly.

  function Car(model, make, year) {
    this.model = model;
    this.make = make;
    this.year = year;
    this.move = 1;
    this.moveCar = function () {
      this.move += 10;
      return this.move;
    }
  }

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to add a move property and write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
  getYear.call(prius);
  getYear.call(mustang);


//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

var userName = getMyUsername.bind(myUser)(); //Fix this

//Above you're given an object, and  a function. What will the getUsername function return?
//Note(no tests)
  //Undefined

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Default / window

//Fix the getMyUsername invocation so that userName will be equal to 'iliketurtles'.
