let createCSV = () =>{
    console.log( 'in createCSV' );
    let csvString = '';
    csvString += document.getElementById( 'input0' ).value + ',';
    csvString += document.getElementById( 'input1' ).value + ',';
    csvString += document.getElementById( 'input2' ).value + ',';
    csvString += document.getElementById( 'input3' ).value + '\n';
    csvString += document.getElementById( 'input0' ).value + ',';
    csvString += document.getElementById( 'input1' ).value + ',';
    csvString += document.getElementById( 'input2' ).value + ',';
    csvString += document.getElementById( 'input3' ).value + '\n';
    console.log( 'creating csv with string:', csvString );
    downloadCsv( csvString, 'test.csv' );
}

let downloadCsv = ( string, fileName ) => {  
    let data = encodeURI( 'data:text/csv;charset=utf-8,' + string );
    link = document.createElement( 'a' );
    link.setAttribute( 'href', data );
    link.setAttribute( 'download', fileName );
    link.click();
}