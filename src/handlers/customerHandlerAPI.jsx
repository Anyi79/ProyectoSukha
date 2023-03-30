import CustomerServiceAPI from "../services/customerServiceAPI";

const CustomerHandlerAPI = {
    addCustomer(newCustomer) {
        console.log(newCustomer)
        
        let customerType ="";
        if (userType='Particular'){
            customerType=1
        } else if (userType='Minorista'){
            customerType=2
        } else if (userType='Mayorista'){
            customerType=3
        }
    
        let customer = { 
            "Company": newCustomer.company,
            "Sector": newCustomer.sector,
            "IdCustomerType": customerType,
            "IdPerson": newCustomer.idPerson,
            "IsActive": true,     
            "Id": ""       
        }
        console.log(customer)
        return CustomerServiceAPI.submitCustomer(customer);
    },
    loadCustomers(){
        return CustomerServiceAPI.getCustomers();
    },
    loadCustomer(id) {
        return CustomerServiceAPI.getCustomer(id);
    },
    deleteCustomer(id){
        return CustomerServiceAPI.deleteCustomer(id);
    },
    updateCustomer(id, updatedCustomer){
        if (!updatedCustomer) {
            return;
        }
        
        if (userType='Particular'){
            customerType=1
        } else if (userType='Minorista'){
            customerType=2
        } else if (userType='Mayorista'){
            customerType=3
        }

        let updatedCustomerStructure = {
            "Company": newCustomer.company,
            "Sector": newCustomer.sector,
            "IdCustomerType": customerType,
        }
        console.log(updatedCustomerStructure)

        return CustomerServiceAPI.updateCustomer(id, updatedCustomerStructure);
    },
}

export default CustomerHandlerAPI;

