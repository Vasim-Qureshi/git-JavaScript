class AccountDtail{
    #AcNum; //private var
    #Name;
    #Balance;
    constructor(AcNum,Name,Balance){
        this.#AcNum=AcNum;
        this.#Name=Name;
        this.Balance=Balance;
    }
    getUserDetails(){
        console.log('Account No: ' + this.#AcNum)
        console.log('Account Holders Name: ' + this.#Name)
        console.log('Available Balance: ' + this.#Balance)
    }
    getBalance(amt){
        console.log("Avail Balance",this.#Balance);  
    }
    diposit(amt){
        this.#Balance+=amt;
        console.log(`${amt} is credited in your account xxxxxx ${ this.#AcNum}`);
    }
    withdraw(){

    }
}

const vasimAccount=new AccountDtail();
vasimAccount.getUserDetails();