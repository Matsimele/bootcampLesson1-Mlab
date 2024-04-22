

           
const data = [
{PersonalInformation:"Name: Mishael",Education:"Diploma in IT",Projects:" Voting Sytem",Experience:"Junior software developer"},
{PersonalInformation:" Surname: Ntsoane",Education:"Microsoft AZ-900",Projects:"Car Rental System"},
{PersonalInformation:"Email: mish9408@gmail.com",Education:" Microsoft PL-300",Projects:"Life Insurence"}
   
];


const tableContainer = document.getElementById('table-container');


function displayDataInTable() {
  
    const table = document.createElement('table');
    table.style.border = '1px white';
    table.style.borderCollapse = 'collapse';

  
    const header = document.createElement('tr');
    const headers = ['Personal Information', 'Educational Backround','Projects', 'Experience'];
    
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        th.style.border = '1px white';
        th.style.padding = '10px';
        header.appendChild(th);
    });
    table.appendChild(header);

  
    data.forEach(rowData => {
      
        const row = document.createElement('tr');
        row.style.border = '1px blue';
    


        for (const key in rowData) {
      
            const cell = document.createElement('td');
            cell.textContent = rowData[key];
            cell.style.border = '1px white';
            cell.style.padding = '18px';
          
            row.appendChild(cell);
        }

  
        table.appendChild(row);
    });

    
    tableContainer.appendChild(table);
}


displayDataInTable();
