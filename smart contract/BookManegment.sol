// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.2 <0.9.0;

contract UserManagement {
    address public admin;
    mapping(address => string) private adminUsernames;
    mapping(address => string) private adminPasswords;
 struct Book {
        string title;
        string genre;
        string price;
    }
uint256 public n=0; 
    mapping (string => Book) public books;
string [] public listOfTitles;

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this operation");
        _;
    }

   

    constructor() {
        admin = msg.sender;
        adminUsernames[msg.sender] = "a";
        adminPasswords[msg.sender] = "a";
    }

    function verifyAdminCredentials(string memory username, string memory password) public view returns (bool) {
        return (keccak256(abi.encodePacked(username)) == keccak256(abi.encodePacked(adminUsernames[msg.sender])))
            && (keccak256(abi.encodePacked(password)) == keccak256(abi.encodePacked(adminPasswords[msg.sender])));
    }

    function changeAdminCredentials(string memory newUsername, string memory newPassword) public onlyAdmin {
        adminUsernames[msg.sender] = newUsername;
        adminPasswords[msg.sender] = newPassword;
    }

    function addBook(string memory title, string memory genre, string memory price) public onlyAdmin {
        require(bytes(books[title].title).length == 0, "Book with this title already exists");

        Book memory newBook = Book(title, genre, price);
        books[title] = newBook;
       // listOfTitles[n]=title;
       
       n++;
              listOfTitles.push(title);

    }

    function getBook(string memory title) public view returns (Book memory) {
        return books[title];
    }

   function removeBook(string memory title) public onlyAdmin {
    require(bytes(books[title].title).length > 0, "Book does not exist");

    // Find the index of the book in the listOfTitles
    uint256 indexToRemove;
    for (uint256 i = 0; i < n; i++) {
        if (keccak256(abi.encodePacked(listOfTitles[i])) == keccak256(abi.encodePacked(title))) {
            indexToRemove = i;
            break;
        }
    }

    listOfTitles[indexToRemove] = listOfTitles[listOfTitles.length - 1];

        // Remove the last element by decreasing the array's length
        listOfTitles.pop();

    // Decrease the length of the array
    n--;

    // Remove the last element (which is now a duplicate)
    //delete listOfTitles[n];

    // Delete the book from the books mapping
    delete books[title];
}

  

     function updateBook(
        string memory title,
        string memory newGenre,
        string memory newPrice
    ) public onlyAdmin {
        // Check if the book exists
        require(bytes(books[title].title).length > 0, "Book does not exist");

        // Update the book details
        books[title].genre = newGenre;
        books[title].price = newPrice;
    }

    

    
 function getAllBooks() public view returns (Book[] memory) {
    Book[] memory allBooks = new Book[](n);

    for (uint256 i = 0; i < n; i++) {
        string memory title = listOfTitles[i];
        allBooks[i] = books[title];
    }

    return allBooks;
}

    
}
