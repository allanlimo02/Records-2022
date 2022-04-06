class Student{
    constructor(name,email,model,imei){
        this.name=name;
        this.email=email;
        this.model=model;
        this.imei=imei;
    }
}
class userInterface{
    static displayStudents(){
        const storedStudents=[
            {
            name:'Allan Limo',
            email:'allan@limo.com',
            model:'hp',
            imei:'ICU14cua'
        },
        {
            name:'Mercy Kinyua',
            email:'mercy@kinyua.com',
            model:'dell',
            imei:'Icdcfcua'
        }
    ];
    const studs=storedStudents;
    studs.forEach((stud)=>userInterface.addToList(stud)
    );
    }
    static addToList(){
        const list=document.getElementById('#studs-list')
    }
    
}