function add() {

	var angajati=new Array();
	angajat[0]={nume:"Gherasim",prenume:"Lavinia",varsta:21,departament:"IT"};
	angajat[1]={nume:"Grigoriu",prenume:"Cristiana",varsta:22,departament:"IT"};
	angajat[2]={nume:"Victor",prenume:"Grigoriu",varsta:23,departament:"IT"};
	angajat[3]={nume:"Adina",prenume:"Gherasim",varsta:22,departament:"IT"};
	angajat[4]={nume:"Maria",prenume:"Popa",varsta:25,departament:"Marketing"};
	
	for(i=0;i<5;i++) {
	
		var table=document.getElementById("tbody");
		var row=document.createElement("tr");
		table.appendChild(row);
		
		var data=document.createElement("td");
		row.appendChild(data);
		data.innerHtml=angajat[i].nume;
		
	}
}


	