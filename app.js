const data = [
    {
        name: 'John Doe',
        age: 32,
        gender: 'male',
        lookingfor:'female',
        location: 'Boston, MA',
        image: 'https://randomuser.me/api/portraits/men/82.jpg'
    },
    {
        name: 'Jen Smith',
        age: 26,
        gender: 'female',
        lookingfor:'male',
        location: 'Miami, FL',
        image: 'https://randomuser.me/api/portraits/women/82.jpg'
    },
    {
        name: 'William Johnson',
        age: 38,
        gender: 'male',
        lookingfor:'female',
        location: 'Lynn, MA',
        image: 'https://randomuser.me/api/portraits/men/83.jpg'
    }

];


const profiles = profileIterator(data);

//Call first profile
nextProfile();

//Next event
document.getElementById('next').addEventListener('click', nextProfile);

//Next Profile Display

function nextProfile(){
    //iterate
    const currentProfile = profiles.next().value;
    if(currentProfile !== undefined){
        document.getElementById('profileDisplay').innerHTML = `
        <ul class= "list-group">
        <li class= "list-group-item"> Name: ${currentProfile.name}</li>
        <li class= "list-group-item"> Age: ${currentProfile.age}</li>
        <li class= "list-group-item"> Location: ${currentProfile.location}</li>
        <li class= "list-group-item"> Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
        </ul>`;

        document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
    }else{
        //No more profiles
        window.location.reload();
    }
}



//Create the Iterator function
function profileIterator(profiles){
    let nextIndex = 0;  //counter
    return {
        next: function(){
            //return the value or done
            return nextIndex < profiles.length ?
             {value: profiles[nextIndex++], done: false} :
              {done: true}
        }
    };

}





//Iterators - how they work
/*
function nameIterator(names){
    let nextIndex = 0;
    return {
        next: function(){
            return nextIndex < names.length ? {value: names[nextIndex++], done: false} : {done: true}
        }
    }
}


//cReate an array of names
const namesArray = ['Jack','Jill','John'];

//init iterator and pass in the names aaray
const names = nameIterator(namesArray);

console.log(names.next().value); //jack
console.log(names.next().value); //jill
console.log(names.next().value); //john
console.log(names.next().value); //undefined
*/

/*
//Generators - needs asterix *
function* sayNames(){
    yield 'Jack';
    yield 'Jill';
    yield 'John';
}

const name = sayNames();

//console.log(name.next());
console.log(name.next().value); //jack
console.log(name.next().value); //jill

*/

//ID Creator
// function* createIds(){
//     let index = 1;
//     while(true){
//         yield index++;
//     }
// }

// const gen = createIds();
// console.log(gen.next().value);
// console.log(gen.next().value);