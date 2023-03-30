import PersonServiceAPI from "../services/personServiceAPI";

const PersonHandlerAPI = {
    addPerson(newPerson) {
        console.log(newPerson)        
    
        let person = { 
            "DNI": newPerson.dni,
            "Name": newPerson.name,
            "Surname": newPerson.surname,
            "Birthdate": "",
            "Adress": "",
            "City": "",
            "Province": newPerson.country,
            "PostalCode": "",
            "Phone": newPerson.phone,
            "Email": newPerson.email,
            "InsertDate": new Date(),
            "UpdateDate": new Date(),
            "IsActive": true,
            "Id":""
        }
        console.log(person)
        return PersonServiceAPI.submitPerson(person);
    },
    loadPersons(){
        return PersonServiceAPI.getPersons();
    },
    loadPerson(id) {
        return PersonServiceAPI.getPerson(id);
    },
    deletePerson(id){
        return PersonServiceAPI.deletePerson(id);
    },
    updatePerson(id, updatedPerson){
        if (!updatedPerson) {
            return;
        }
        
        let updatedPersonStructure = {
            "DNI": updatedPerson.dni,
            "Name": updatedPerson.name,
            "Surname": updatedPerson.surname,
            "Birthdate": "",
            "Adress": "",
            "City": "",
            "Province": updatedPerson.country,
            "PostalCode": "",
            "Phone": updatedPerson.phone,
            "Email": updatedPerson.email,
            "UpdateDate": new Date(),
        }
        console.log(updatedPersonStructure)

        return PersonServiceAPI.updatePerson(id, updatedPersonStructure);
    },
}

export default PersonHandlerAPI;

