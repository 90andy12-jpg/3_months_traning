
// =====================================================
// DATA STORAGE
// =====================================================

// Unique emails store karne ke liye Set
export const users = new Set();


// Complete user data store karne ke liye Map
export const userData = new Map();


// History
export let historyData = [];


// =====================================================
// HISTORY FUNCTIONS
// =====================================================


// History add karna
export function addHistoryData(historyObject) {

    historyData.unshift(historyObject);

}


// History delete karna
export function removeHistoryData(id) {

    historyData = historyData.filter(function (item) {

        return item.id !== id;

    });

}


// Puri history clear karna
export function clearHistoryData() {

    historyData = [];

}

