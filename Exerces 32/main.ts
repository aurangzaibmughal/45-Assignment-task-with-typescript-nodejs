
let current_users: string [] =  ["Admin" , "Admin" , "pasha" , "Honny" , "Ureeba" ];

// Array of New Users
let new_users: string[] = ["Aurangzaib" , "Ibraheem" , "ureeba " , "Noman" , "Admin"]

// loop through new user to check for usernames availblity.

new_users.forEach((newUsers) => {
    if (
        current_users.some(
            (currentUsers) => currentUsers.toLocaleLowerCase() === newUsers.toLocaleLowerCase()
        
        )
    )   {
        console.log(`${newUsers} will need to enter a new username.`)
    }   else{

        console.log(`${newUsers} is available.`);

    }
        

    });


