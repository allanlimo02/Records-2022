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
function onFormSubmit(){

    var formData=retreivefromForm();
    insertData(formData);
    resetform();

}
// Insert data into the displaying panel
function insertData(data){
    var table=document.getElementById("outputTable").getElementsByTagName('tbody')[0];
    var newRow= table.insertRow(table.length);
    cell1=newRow.insertCell(0);
    cell1.innerHTML=data.studentname;
    cell2=newRow.insertCell(1);
    cell2.innerHTML=data.studentemail;
    cell3=newRow.insertCell(2);
    cell3.innerHTML=data.imeinumber;
    cell4=newRow.insertCell(3);
    cell4.innerHTML=data.laptopmodel;
    cell5=newRow.insertCell(4);
    cell5.innerHTML=`<i class="fa-solid fa-pen-to-square  text-success" onckick=""></i>
                     <i class="fa-solid fa-trash-can px-3 delete text-danger" onckick="deleteStudent()"></i>`;
                     

}
// capture data from DOM
function retreivefromForm(){
    var formData={};
    formData["studentname"]=document.getElementById("studentname").value;
    formData["studentemail"]=document.getElementById("studentemail").value;
    formData["imeinumber"]=document.getElementById("imeinumber").value;
    formData["laptopmodel"]=document.getElementById("laptopmodel").value;
    return formData;
}
function resetform(){
    document.getElementById("studentname").value="";
    document.getElementById("studentemail").value="";
    document.getElementById("imeinumber").value="";
    document.getElementById("laptopmodel").value="";
}
function onEdit(td){    
    selectedRow=td.parentElement.parentElement;
    document.getElementById("studentname").value=selectedRow.cells[0].innerHTML;
    document.getElementById("studentemail").value=selectedRow.cells[1].innerHTML;
    document.getElementById("imeinumber").value=selectedRow.cells[2].innerHTML;
    document.getElementById("laptopmodel").value=selectedRow.cells[3].innerHTML;
}
function deleteStudent(){
    if(el.classList.contains('delete')){
        el.parentElement.parentElement.remove();
    }
}