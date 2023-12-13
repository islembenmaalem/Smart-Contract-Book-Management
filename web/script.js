let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545")); // Connect to Ganache
// let contractAddress = document.getElementById("contractAddress").value;
 let contractAddress = "0x5a9072B702D59050e194d7431d948B00A13A908C";
 //contractAddress="0x60184eEf283294E2f1fcFdbC0348536D9e985156"
// contractAddress="0x7Bf565bB6bD4dc680EE44D578d5dafD2eF77ABab"
 contractAddress="0xd9145CCE52D386f254917e481eB44e9943F39138"
 // Replace with your contract ABI (you can get this from Remix or compilation output)
 /*
   const contractABI = [
 {
     "inputs": [],
     "stateMutability": "nonpayable",
     "type": "constructor"
 },
 {
     "inputs": [
         {
             "internalType": "string",
             "name": "title",
             "type": "string"
         },
         {
             "internalType": "string",
             "name": "genre",
             "type": "string"
         },
         {
             "internalType": "string",
             "name": "price",
             "type": "string"
         }
     ],
     "name": "addBook",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
 },
 {
     "inputs": [],
     "name": "admin",
     "outputs": [
         {
             "internalType": "address",
             "name": "",
             "type": "address"
         }
     ],
     "stateMutability": "view",
     "type": "function"
 },
 {
     "inputs": [
         {
             "internalType": "address",
             "name": "",
             "type": "address"
         }
     ],
     "name": "allowedUsers",
     "outputs": [
         {
             "internalType": "bool",
             "name": "",
             "type": "bool"
         }
     ],
     "stateMutability": "view",
     "type": "function"
 },
 {
     "inputs": [
         {
             "internalType": "string",
             "name": "",
             "type": "string"
         }
     ],
     "name": "books",
     "outputs": [
         {
             "internalType": "string",
             "name": "title",
             "type": "string"
         },
         {
             "internalType": "string",
             "name": "genre",
             "type": "string"
         },
         {
             "internalType": "string",
             "name": "price",
             "type": "string"
         }
     ],
     "stateMutability": "view",
     "type": "function"
 },
 {
     "inputs": [
         {
             "internalType": "string",
             "name": "newUsername",
             "type": "string"
         },
         {
             "internalType": "string",
             "name": "newPassword",
             "type": "string"
         }
     ],
     "name": "changeAdminCredentials",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
 },
 {
     "inputs": [
         {
             "internalType": "string",
             "name": "title",
             "type": "string"
         }
     ],
     "name": "getBook",
     "outputs": [
         {
             "components": [
                 {
                     "internalType": "string",
                     "name": "title",
                     "type": "string"
                 },
                 {
                     "internalType": "string",
                     "name": "genre",
                     "type": "string"
                 },
                 {
                     "internalType": "string",
                     "name": "price",
                     "type": "string"
                 }
             ],
             "internalType": "struct UserManagement.Book",
             "name": "",
             "type": "tuple"
         }
     ],
     "stateMutability": "view",
     "type": "function"
 },
 {
     "inputs": [],
     "name": "performAction",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
 },
 {
     "inputs": [
         {
             "internalType": "address",
             "name": "userAddress",
             "type": "address"
         }
     ],
     "name": "removeUser",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
 },
 {
     "inputs": [
         {
             "internalType": "string",
             "name": "username",
             "type": "string"
         },
         {
             "internalType": "string",
             "name": "password",
             "type": "string"
         }
     ],
     "name": "verifyAdminCredentials",
     "outputs": [
         {
             "internalType": "bool",
             "name": "",
             "type": "bool"
         }
     ],
     "stateMutability": "view",
     "type": "function"
 }
];


contractABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "genre",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "price",
				"type": "string"
			}
		],
		"name": "addBook",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "admin",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "books",
		"outputs": [
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "genre",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "price",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "newUsername",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "newPassword",
				"type": "string"
			}
		],
		"name": "changeAdminCredentials",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			}
		],
		"name": "getBook",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "title",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "genre",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "price",
						"type": "string"
					}
				],
				"internalType": "struct UserManagement.Book",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			}
		],
		"name": "removeBook",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "username",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "password",
				"type": "string"
			}
		],
		"name": "verifyAdminCredentials",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
contractABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "genre",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "price",
				"type": "string"
			}
		],
		"name": "addBook",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "newUsername",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "newPassword",
				"type": "string"
			}
		],
		"name": "changeAdminCredentials",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			}
		],
		"name": "removeBook",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "newGenre",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "newPrice",
				"type": "string"
			}
		],
		"name": "updateBook",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "admin",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "books",
		"outputs": [
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "genre",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "price",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			}
		],
		"name": "getBook",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "title",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "genre",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "price",
						"type": "string"
					}
				],
				"internalType": "struct UserManagement.Book",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "username",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "password",
				"type": "string"
			}
		],
		"name": "verifyAdminCredentials",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]*/
contractAddress="0x921b1Eb80BB6647b3c37Fb9E909F9d1B68785279"

contractABI =[
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "genre",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "price",
				"type": "string"
			}
		],
		"name": "addBook",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "newUsername",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "newPassword",
				"type": "string"
			}
		],
		"name": "changeAdminCredentials",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			}
		],
		"name": "removeBook",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "newGenre",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "newPrice",
				"type": "string"
			}
		],
		"name": "updateBook",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "admin",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "books",
		"outputs": [
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "genre",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "price",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllBooks",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "title",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "genre",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "price",
						"type": "string"
					}
				],
				"internalType": "struct UserManagement.Book[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			}
		],
		"name": "getBook",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "title",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "genre",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "price",
						"type": "string"
					}
				],
				"internalType": "struct UserManagement.Book",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "listOfTitles",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "n",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "username",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "password",
				"type": "string"
			}
		],
		"name": "verifyAdminCredentials",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
let contract = new web3.eth.Contract(contractABI, contractAddress);


 async function authenticateAndRedirect() {
     //const adminAddress = document.getElementById("adminAddress").value;
     const adminAddress = "0x361Ea8390010cF3287588cF262836207C75C860f"
     const adminUsername = document.getElementById("adminUsername").value;
     const adminPassword = document.getElementById("adminPassword").value;
     

     // Validate admin credentials (you may want to improve this validation)
     const validCredentials = await contract.methods.verifyAdminCredentials(adminUsername, adminPassword).call({ from: adminAddress , gas: 5000000, 
     });
     if (!validCredentials) {
         alert("Invalid admin credentials");
         return;
     }
     else{

         setAuthenticationState();

// Redirect to the addBookPage.html after authentication
window.location.href = "buttons.html";
web3.eth.defaultAccount = adminAddress;

     }


   
 }
 function setAuthenticationState() {
    localStorage.setItem("authenticated", "true");
}

////////////////////////////////////////////////////////////////addBook////////////////////////////////////////////////////////////////

async function addBook() {
    const adminAddress = document.getElementById("adminAddress").value;
    const adminUsername = document.getElementById("adminUsername").value;
    const adminPassword = document.getElementById("adminPassword").value;
    const bookTitle = document.getElementById("bookTitle").value;
    const bookGenre = document.getElementById("bookGenre").value;
    const bookPrice = document.getElementById("bookPrice").value;
     contract = new web3.eth.Contract(contractABI, contractAddress);

    // Validate admin credentials (you may want to improve this validation)
    const validCredentials = await contract.methods.verifyAdminCredentials(adminUsername, adminPassword).call({ from: adminAddress  })
    if (!validCredentials) {
        alert("Invalid admin credentials");
        return;
    }

    // Set the default account to the admin's address
    web3.eth.defaultAccount = adminAddress;

    // Call the addBook function in the contract
    await contract.methods.addBook(bookTitle, bookGenre, bookPrice).send({ from: adminAddress , gas: 5000000, 
});
console.log("Book added successfully!");
alert("Book added successfully!");
}

////////////////////////////////////////////////////////////////removeBook////////////////////////////////////////////////////////////////

 
async function removeBook() {
    contract = new web3.eth.Contract(contractABI, contractAddress);

       /*const adminAddress = document.getElementById("adminAddress").value;
       const adminUsername = document.getElementById("adminUsername").value;
       const adminPassword = document.getElementById("adminPassword").value; */
       const bookTitle = document.getElementById("bookTitleremove").value;
       const adminAddress = "0x361Ea8390010cF3287588cF262836207C75C860f"
       // Validate admin credentials (you may want to improve this validation)
      

       // Set the default account to the admin's address
       web3.eth.defaultAccount = adminAddress;

       // Call the addBook function in the contract
       await contract.methods.removeBook(bookTitle).send({ from: adminAddress 
});
       console.log("Book removed successfully!");
              alert("Book removed successfully!");

   }


   ////////////////////////////////////////////////////////////////updateBook////////////////////////////////////////////////////////////////
   async function updateBook() {
    const adminAddress = document.getElementById("adminAddress").value;
    const adminUsername = document.getElementById("adminUsername").value;
    const adminPassword = document.getElementById("adminPassword").value;
    const nbookTitle = document.getElementById('bookTitle').value;
    const nbookGenre = document.getElementById('newGenre').value;
    const nbookPrice = document.getElementById('newPrice').value;
     contract = new web3.eth.Contract(contractABI, contractAddress);

    // Validate admin credentials (you may want to improve this validation)
    const validCredentials = await contract.methods.verifyAdminCredentials(adminUsername, adminPassword).call({ from: adminAddress });
    if (!validCredentials) {
        alert("Invalid admin credentials");
        return;
    }

    // Set the default account to the admin's address
    web3.eth.defaultAccount = adminAddress;



    try {
        // Call the addBook function in the smart contract
        const result = await contract.methods.updateBook(nbookTitle, nbookGenre, nbookPrice).send({ from: adminAddress });

        console.log('Transaction successful:', result);
        console.log("Book updated successfully!");
        alert("Book updated successfully!");

    } catch (error) {
        console.error('Error updating book:', error);
        alert('Error updating book:', error);
    }
    
}

   ////////////////////////////////////////////////////////////////getBook////////////////////////////////////////////////////////////////

   
   contract = new web3.eth.Contract(contractABI, contractAddress);

   async function GetBook() {
    bookTitle = document.getElementById('bookTitleGet').value;
    contract = new web3.eth.Contract(contractABI, contractAddress);
    console.error("bookTitle : ",bookTitle);

    try {
        //result = await contract.methods.getBook(bookTitle).call();
        const result = await contract.methods.getBook(bookTitle).call();

        // Display the book details on the page
        document.getElementById('bookTitle').innerText = result.title;
        document.getElementById('bookGenre').innerText = result.genre;
        document.getElementById('bookPrice').innerText = result.price;
    } catch (error) {
        alert('Error getting book:', error);

        console.error('Error getting book:', error);
        alert('Error getting book:', error);
    }
}
async function GetBook() {
    const bookTitle = document.getElementById('bookTitleGet').value;
    const contract = new web3.eth.Contract(contractABI, contractAddress);

    console.log("bookTitle : ", bookTitle);

    try {
        const result = await contract.methods.getBook(bookTitle).call();
        console.log("result : ", result);
if (result[0]!==""){

        // Display the book details on the page
        document.getElementById('bookTitle').innerText = result.title;
        document.getElementById('bookGenre').innerText = result.genre;
        document.getElementById('bookPrice').innerText = result.price;
}
else{
    alert('Error getting book: not found ' );

}
    } catch (error) {
        console.error('Error getting book:', error);
        alert('Error getting book: ' + error.message);
    }
}


   ////////////////////////////////////////////////////////////////getAllBook////////////////////////////////////////////////////////////////


     
   contract = new web3.eth.Contract(contractABI, contractAddress);
   async function getAllBook() {
    contract = new web3.eth.Contract(contractABI, contractAddress);

    try {
        const result = await contract.methods.getAllBooks().call(); // array of arrays
        console.log(result);

        // Assuming there is a div with the id "resultContainer" in your HTML
        const resultContainer = document.getElementById('resultContainer');

        // Clear previous content in the container
        resultContainer.innerHTML = '';

        // Create a table with Bootstrap classes
        const table = document.createElement('table');
        table.classList.add('table', 'table-bordered');

        // Create a thead element for the table
        const thead = document.createElement('thead');
        thead.classList.add('thead-primary');

        // Create a tr element for the header row
        const headerRow = document.createElement('tr');

        // Add header columns
        const headerTitles = ['Title', 'Genre', 'Price'];
        headerTitles.forEach((title) => {
            const th = document.createElement('th');
            th.textContent = title;
            headerRow.appendChild(th);
        });

        // Append the header row to the thead
        thead.appendChild(headerRow);

        // Append the thead to the table
        table.appendChild(thead);

        // Create a tbody element for the table
        const tbody = document.createElement('tbody');

        // Loop through the outer array
        result.forEach((innerArray) => {
            // Create a tr element for each inner array
            const tr = document.createElement('tr');

            // Loop through the inner array to create td elements
            innerArray.forEach((item) => {
                
                    const td = document.createElement('td');
                    td.textContent = item;
                    tr.appendChild(td);
                
            });
            
                const iconTd = document.createElement('td');
                
                // Add edit and delete icons
                const editIcon = document.createElement('i');
                editIcon.classList.add('fas', 'fa-edit', 'mr-2', 'text-primary', 'cursor-pointer');
                editIcon.setAttribute('title', 'Edit');
                editIcon.addEventListener('click', () => handleEdit(innerArray[0], innerArray[1], innerArray[2]));

                const deleteIcon = document.createElement('i');
                deleteIcon.classList.add('fas', 'fa-trash-alt', 'text-danger', 'cursor-pointer');
                deleteIcon.setAttribute('title', 'Delete');
                deleteIcon.addEventListener('click', () => handleDelete(innerArray[0])); // Add your delete logic

                iconTd.appendChild(editIcon);
                iconTd.appendChild(deleteIcon);

                // Append the td to the tr
                tr.appendChild(iconTd);

                // Append the tr to the tbody
                tbody.appendChild(tr);

            
        });

        // Append the tbody to the table
        table.appendChild(tbody);

        // Append the table to the result container
        resultContainer.appendChild(table);

    } catch (error) {
        console.error('Error getting book:', error);
        alert('Error getting book:', error);
    }
}


// Sample edit function to redirect to "ModifyBook.html" with data
function handleEdit( title, genre, price) {
    // Assuming you want to pass the book details to the "ModifyBook.html" page
    const queryString = `?title=${encodeURIComponent(title)}&genre=${encodeURIComponent(genre)}&price=${price}`;
    const modifyBookUrl = `ModifyBook.html${queryString}`;
    window.location.href = modifyBookUrl;
}


function handleDelete( title) {
    // Assuming you want to pass the book details to the "ModifyBook.html" page
    const queryString = `?title=${encodeURIComponent(title)}`;
    const modifyBookUrl = `DeleteBook.html${queryString}`;
    window.location.href = modifyBookUrl;
}