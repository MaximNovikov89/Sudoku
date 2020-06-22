let gameTable = [];
let completeTable = [];
let userTable = [];
let max = 5, min = 0;
let amountToRemoveMin, amountToRemoveMax;
let randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;

// 6 solved sudoku tables
let solvedTable1 = [[4, 3, 5, 2, 6, 9, 7, 8, 1], [6, 8, 2, 5, 7, 1, 4, 9, 3], [1, 9, 7, 8, 3, 4, 5, 6, 2],
[8, 2, 6, 1, 9, 5, 3, 4, 7], [3, 7, 4, 6, 8, 2, 9, 1, 5], [9, 5, 1, 7, 4, 3, 6, 2, 8], [5, 1, 9, 3, 2, 6, 8, 7, 4],
[2, 4, 8, 9, 5, 7, 1, 3, 6], [7, 6, 3, 4, 1, 8, 2, 5, 9]];

let solvedTable2 = [[1, 5, 2, 4, 8, 9, 3, 7, 6], [7, 3, 9, 2, 5, 6, 8, 4, 1], [4, 6, 8, 3, 7, 1, 2, 9, 5],
[3, 8, 7, 1, 2, 4, 6, 5, 9], [5, 9, 1, 7, 6, 3, 4, 2, 8], [2, 4, 6, 8, 9, 5, 7, 1, 3], [9, 1, 4, 6, 3, 7, 5, 8, 2],
[6, 2, 5, 9, 4, 8, 1, 3, 7], [8, 7, 3, 5, 1, 2, 9, 6, 4]];

let solvedTable3 = [[1, 2, 3, 6, 7, 8, 9, 4, 5], [5, 8, 4, 2, 3, 9, 7, 6, 1], [9, 6, 7, 1, 4, 5, 3, 2, 8],
[3, 7, 2, 4, 6, 1, 5, 8, 9], [6, 9, 1, 5, 8, 3, 2, 7, 4], [4, 5, 8, 7, 9, 2, 6, 1, 3], [8, 3, 6, 9, 2, 4, 1, 5, 7],
[2, 1, 9, 8, 5, 7, 4, 3, 6], [7, 4, 5, 3, 1, 6, 8, 9, 2]];

let solvedTable4 = [[5, 8, 1, 6, 7, 2, 4, 3, 9], [7, 9, 2, 8, 4, 3, 6, 5, 1], [3, 6, 4, 5, 9, 1, 7, 8, 2],
[4, 3, 8, 9, 5, 7, 2, 1, 6], [2, 5, 6, 1, 8, 4, 9, 7, 3], [1, 7, 9, 3, 2, 6, 8, 4, 5], [8, 4, 5, 2, 1, 9, 3, 6, 7],
[9, 1, 3, 7, 6, 8, 5, 2, 4], [6, 2, 7, 4, 3, 5, 1, 9, 8]];

let solvedTable5 = [[2, 7, 6, 3, 1, 4, 9, 5, 8], [8, 5, 4, 9, 6, 2, 7, 1, 3], [9, 1, 3, 8, 7, 5, 2, 6, 4],
[4, 6, 8, 1, 2, 7, 3, 9, 5], [5, 9, 7, 4, 3, 8, 6, 2, 1], [1, 3, 2, 5, 9, 6, 4, 8, 7], [3, 2, 5, 7, 8, 9, 1, 4, 6],
[6, 4, 1, 2, 5, 3, 8, 7, 9], [7, 8, 9, 6, 4, 1, 5, 3, 2]];

let solvedTable6 = [[1, 2, 6, 4, 3, 7, 9, 5, 8], [8, 9, 5, 6, 2, 1, 4, 7, 3], [3, 7, 4, 9, 8, 5, 1, 2, 6],
[4, 5, 7, 1, 9, 3, 8, 6, 2], [9, 8, 3, 2, 4, 6, 5, 1, 7], [6, 1, 2, 5, 7, 8, 3, 9, 4], [2, 6, 9, 3, 1, 4, 7, 8, 5],
[5, 4, 8, 7, 6, 9, 2, 3, 1], [7, 3, 1, 8, 5, 2, 6, 4, 9]];

// an array of solved sudoku tables
// each item in the array is a matrix that represents a solved sudoku table
let solvedTables = [solvedTable1, solvedTable2, solvedTable3, solvedTable4, solvedTable5, solvedTable6];

// onload function that is called in the body
// 1. gets the amount of cells to leave empty from local storage
// 2. getting a random solved sudoku table and saving it in a variable
// 3. copying the seleced solved table into game table
// 4. removing from game table random cells according to game difficulty
// 5. copying the game table into user table
// 6. printing the game table onto the html page
function initializeSudokuTable() {

    getAmountToRemoveFromLocalStorage();
    completeTable = solvedTables[randomIndex];
    copyToNewTable(completeTable, gameTable);
    getGameTableToDisplay(gameTable);
    copyToNewTable(gameTable, userTable);
    printSudokuTableToPage();
}

// function to get the amount of cells to leave empty from local storage
function getAmountToRemoveFromLocalStorage() {

    amountToRemoveMin = Number(window.localStorage.getItem('amountMin'));
    amountToRemoveMax = Number(window.localStorage.getItem('amountMax'));
}

// function that copies one table to another
function copyToNewTable(copyFromTable, copyToTable) {

    copyFromTable.forEach((item, i) => {
        copyToTable[i] = copyFromTable[i].slice();
    });
}

// function that removes random cells from the game 
// table that will be presented to the user
function getGameTableToDisplay(sudokuTable) {

    let row, column;
    let length = sudokuTable.length;

    for (row = 0; row < length; row++) {
        for (let k = 0; k < amountToRemoveMin; k++) {
            column = Math.floor(Math.random() * (8 - 0 + 1)) + 0;
            if (sudokuTable[row][column] != '') {
                sudokuTable[row][column] = '';
            }
            else {
                k--;
            }
        }
    }

    // removing only from the last row, more cells
    amountToRemoveMax = amountToRemoveMax - amountToRemoveMin;
    row = length - 1;
    for (let k = 0; k < amountToRemoveMax; k++) {
        column = Math.floor(Math.random() * (8 - 0 + 1)) + 0;
        if (sudokuTable[row][column] != '') {
            sudokuTable[row][column] = '';
        }
        else {
            k--;
        }
    }
}

// function that prints the sudoku game table to the html page
function printSudokuTableToPage() {

    for (let i = 0; i < gameTable.length; i++) {
        for (let j = 0; j < gameTable.length; j++) {
            if (gameTable[i][j] != '') {
                document.getElementById(`cell${i}${j}`).disabled = true;
            }
            else {
                document.getElementById(`cell${i}${j}`).style.color = 'black'; // for when pressing again button
                document.getElementById(`cell${i}${j}`).style.backgroundColor = 'white'; // for when pressing again button
            }

            document.getElementById(`cell${i}${j}`).value = gameTable[i][j]; // prints the value to the input cell
        }
    }
}


// function for onclick difficulty button
function chooseDifficulty() {

    window.location.href = "menu.html";
}

// function for onclick play again button
function playAgain() {

    copyToNewTable(gameTable, userTable);
    printSudokuTableToPage();
}

// function for onclick new game button
function playNewGame() {

    location.reload();
}

// function for onclick finish button
// presents the user with the relevant message
function solveGame() {

    let result = compareTables();
    let messageBox = document.getElementById("finishMessage");
    let displayMessage = document.getElementById('message');

    if (result) {
        displayMessage.style.color = "rgb(0, 128, 68)";
        displayMessage.innerHTML = 'You WON the game!';
    }
    else {
        displayMessage.style.color = "red";
        displayMessage.innerHTML = 'Sorry, try again...';
    }
    
    messageBox.style.display = "block";
}

// function that compares the complete table to the user table
function compareTables() {

    for (let i = 0; i < completeTable.length; i++) {
        for (let j = 0; j < completeTable.length; j++) {
            if (completeTable[i][j] != userTable[i][j]) {
                return false;
            }
        }
    }

    return true;
}

// function that solves the sudoku table
function surrenderGame() {

    let inputStatus;

    for (let i = 0; i < userTable.length; i++) {
        for (let j = 0; j < userTable.length; j++) {
            inputStatus = document.getElementById(`cell${i}${j}`).disabled; // gets true if input is disabled or false if not
            if (inputStatus != true) {
                document.getElementById(`cell${i}${j}`).style.backgroundColor = 'white';
                document.getElementById(`cell${i}${j}`).value = completeTable[i][j];
                userTable[i][j] = completeTable[i][j];
            }
        }
    }
}

// function that validates each input cell in real time using oninput
function validateCellInput(currentElement) {

    let inputValue = currentElement.value;
    let inputId = currentElement.id;
    let row = Number(inputId[4]), col = Number(inputId[5]); // cell32

    userTable[row][col] = Number(inputValue);

    if (Number(inputValue) != completeTable[row][col] && inputValue != '') { // and not backspace
        document.getElementById(inputId).style.backgroundColor = "#CD5C5C"; // red
        document.getElementById(inputId).style.color = "black";
    }
    else {
        document.getElementById(inputId).style.color = "green";
        document.getElementById(inputId).style.backgroundColor = "white";
    }
}

// function for onclick close button
// this button appears on the finish message box
function closeMessageBox() {

    chooseDifficulty();
}