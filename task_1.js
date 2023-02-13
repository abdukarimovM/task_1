let person = {
    name: 'Alisher',
    address:{
        country: {
            name: 'Uzbekistan',
            region: 'Tashkent'
        }
    },
    skills: {
        soft: [ 'develeoper' ],
        hard: [ 'runner', 'santexnik' ]
    }
}
function obj(about){

    let { address: { country: { name }}} = person;
    let { skills: { soft }} = person;

    soft = soft.join('')

    console.log(`My country is ${name}.`);
    console.log(`I am NodeJs ${soft}.`);
}

obj(person)