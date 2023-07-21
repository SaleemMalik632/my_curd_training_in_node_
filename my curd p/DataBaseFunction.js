const con_ = require('./Connection');

function getData() {

    const sqlQuery = 'SELECT * FROM malik1'; 
    con_.query(sqlQuery, (err, results) => {
        if (err) {
            console.error('Error executing the query: ', err);
            return;
        }
            console.log('Query result:', results);
            return results;
    });
}

function insertData(data) {
    const quary = 'INSERT INTO malik1 (Email, Password) VALUES (?,?)';
    con_.query(quary, [data.email, data.password], (err, results) => {
        if (err) {
            console.log('error in the function ');
            return;
        }
        console.log('result of the function is done ');
        return results;
    })
}



module.exports = {
    getData,
    insertData
}