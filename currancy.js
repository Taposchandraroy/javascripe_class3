


let amonunt = prompt ('Amount');

let currancy = prompt ('Currancy');


if ( amonunt == '' || currancy == '' ) {

    alert (`All fiend not found`);
    
} else {
   
    if ( currancy == 'dolar') {
        console.log(` ${amonunt} ${currancy} = ${amonunt * 85.5 } taka`);
        
    } else if ( currancy == 'pount') {
        console.log(` ${amonunt} ${currancy} = ${amonunt * 115.5 } taka`);
        
    }
      else if ( currancy == 'rupi') {
        console.log(` ${amonunt} ${currancy} = ${amonunt * 1.5 } taka`);
        
    }
    
}