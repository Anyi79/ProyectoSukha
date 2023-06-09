import UserServiceAPI from "../services/userServiceAPI";

const UserHandlerAPI = {
    addUser(newUser) {
        console.log(newUser)
    
        let user = { 
            "User": newUser.user,
            "Password": newUser.password,
            "InsertDate": new Date(),
            "UpdateDate": new Date(),
            "IsActive": true,

        }
        console.log(user)
        return UserServiceAPI.submitUser(user);
    },
    loadUsers(){
        return UserServiceAPI.getUsers();
    },
    loadUser(id) {
        return UserServiceAPI.getUser(id);
    },
    deleteUser(id){
        return UserServiceAPI.deleteUser(id);
    },
    updateUser(id, updatedUser){
        if (!updatedUser) {
            return;
        }
        
        let updatedUserStructure = {
            "User": newUser.user,
            "Password": newUser.password,
            "UpdateDate": new Date(),
        }
        console.log(updatedUserStructure)

        return UserServiceAPI.updateUser(id, updatedUserStructure);
    },
}

export default UserHandlerAPI;

