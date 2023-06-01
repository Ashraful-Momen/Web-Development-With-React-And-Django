let searchBtn = document.querySelector('#searchBtn'); //search Btn
let searchUser = document.querySelector('#searchUser'); //input field value

let UserProfile = new profile(); // we need to pass the user fetch api data to this function....

searchBtn.addEventListener('click',(e)=>{
    let UserText = searchUser.value;

    if(UserText != ''){
        // alert(UserText);
        fetch(`https://api.github.com/users/${UserText}`)
        .then((res)=>res.json())
        .then((data)=>{
            if(data.message == 'Not Found'){
                //show alert()
                UserProfile.showAlert("User not found ", "alert alert-danger");
               
                
            }
            else{
                //profile()

                UserProfile.showProfile(data);
                
            }
            
        });
        
    }
    else if(UserProfile === ''){
        alert('Plz input your field');
        //clear profile()

        UserProfile.clearProfile();
    }
    else{
        UserProfile.clearProfile();

    }

    
})