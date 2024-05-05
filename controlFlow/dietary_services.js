let isAuthenticated = false;
let appRole = "non-subscriber"
let authorizedAccess;
if (isAuthenticated){
    switch (appRole){
        case "employee":
            authorizedAccess = "Dietary Services";
            break;
        
        case "enrolledMember":
            authorizedAccess = "Dietary Services, One-on-one interaction with dietician";
            break;

        case "subscriber":
            authorizedAccess = "Dietary Services - Partial Access";
            break;
    }
}

else{
    authorizedAccess = "Need to enroll or subscribe";
}

console.log(authorizedAccess);