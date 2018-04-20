const baseUrl = support.baseUrl();
const appKey = support.appKey();

let urlMaker = (() => {

    function registrationUrl() {
        return `${baseUrl}/user/${appKey}`;
    }

    function loginUrl() {
        return `${baseUrl}/user/${appKey}/login`;
    }

    function logoutUrl() {
        return `${baseUrl}/user/${appKey}/_logout`;
    }

    function getActiveReceiptUrl(userId) {
        let endpoint = `receipts?query={"_acl.creator":"${userId}","active":true}`;
        return `${baseUrl}/appdata/${appKey}/${endpoint}`;
    }

    function getEntriesByReceiptIDUrl(activeReceiptID) {
        let endpoint = `entries?query={"receiptId":"${activeReceiptID}"}`;
        return `${baseUrl}/appdata/${appKey}/${endpoint}`;
    }

    function createReceiptUrl() {
        return `${baseUrl}/appdata/${appKey}/receipts`;
    }

    function addEntryUrl() {
        return `${baseUrl}/appdata/${appKey}/entries`;
    }

    function deleteEntryUrl(entryId) {
        return `${baseUrl}/appdata/${appKey}/entries/${entryId}`;
    }

    function getMyReceiptsUrl(userId) {
        let endpoint = `receipts?query={"_acl.creator":"${userId}","active":false}`;
        return `${baseUrl}/appdata/${appKey}/${endpoint}`;
    }

    function receiptDetailsUrl(receiptId) {
        return `${baseUrl}/appdata/${appKey}/receipts/${receiptId}`;
    }

    function commitReceiptUrl(receiptId) {
        return `${baseUrl}/appdata/${appKey}/receipts/${receiptId}`;
    }

    return{
        registrationUrl,
        loginUrl ,
        logoutUrl ,
        getActiveReceiptUrl ,
        getEntriesByReceiptIDUrl ,
        createReceiptUrl ,
        addEntryUrl,
        deleteEntryUrl,
        getMyReceiptsUrl,
        receiptDetailsUrl,
        commitReceiptUrl
    }
})();