/* amount of cells to leave empty based on the level difficulty */
let toRemoveMin, toRemoveMax;

/* function that saves the variables: toRemoveMin and toRemoveMax
in the local storage so we can use them at another page*/
function saveAmountToRemoveInLocalStorage() {
    window.localStorage.setItem('amountMin', toRemoveMin);
    window.localStorage.setItem('amountMax', toRemoveMax);
}

/* function for onclick easy level button */
function easyLevel() {
    toRemoveMin = 2, toRemoveMax = 4;
    saveAmountToRemoveInLocalStorage();
    window.location.href = "sudoku.html";
}

/* function for onclick medium level button */
function mediumLevel() {
    toRemoveMin = 4, toRemoveMax = 4;
    saveAmountToRemoveInLocalStorage();
    window.location.href = "sudoku.html";
}

/* function for onclick hard level button */
function hardLevel() {
    toRemoveMin = 6, toRemoveMax = 7;
    saveAmountToRemoveInLocalStorage();
    window.location.href = "sudoku.html";
}


