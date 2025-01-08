// Steps:
// 1. async function to bring (fetch) data from json file
 //2. fetch the data from the json file, await here to continue the code and come back here at this mark when the fetch is done 
 // 3.make sure that the respone is succesful
// 4.converting the data to json
//  5. call the div that we will display the data in  
 //6.  for each user we create a new user card "div" and add the data in it using for each
         // we give it a class name to work on it in css
         // we specify which content will be displayed inside the card 
         // we use backticks because it's a multiline text with values






         
//  async function to bring (fetch) data from json file
async function fetchUserData(params) {


 // fetch the data from the json file, await here to continue the code and come back here at this mark when the fetch is done 
   try {
            // const response = await fetch ('task1.json');
            const response = await fetch ('https://api.npoint.io/e1b6280f683b443ea2a2');

 // make sure that the respone is succesful

            if (!response.ok) {
                throw new Error("Network response was not ok");
                
            }
    
// converting the data to json
   const data = await response.json (); 

//    call the div that we will display the data in 
    const outputDiv = document.getElementById("output");

// this for each loop takes each user from the data
    data.forEach(user => {

        //  for each user we create a new user card "div" and add the data in it

        const userCard = document.createElement('div');
        // we give it a class name to work on it in css
        userCard.className = 'card'; 
    // we specify which content will be displayed inside the card 
    // we use backticks because it's a multiline text with values
        userCard.innerHTML = `
            <h3>${user.name}</h3>
            <p><strong>Age:</strong> ${user.Age}</p>
            <p><strong>Email:</strong> ${user.Email}</p>
            <p><strong>Profession:</strong> ${user.Profession}</p>
        `;
        outputDiv.appendChild(userCard);    
    });
     
} 

catch (error) {
    console.error('Error fetching data:', error)

        }
}
