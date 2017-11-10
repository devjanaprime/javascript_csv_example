Create CSV Example
===

A quick example of creating a CSV spreadsheet file from a string in javascript.

Send the following functiona string to convert to CSV and a filename. The file will automatically be created and downlaoded automatically.

```
let downloadCsv = ( string, fileName ) => {  
    let data = encodeURI( 'data:text/csv;charset=utf-8,' + string );
    link = document.createElement( 'a' );
    link.setAttribute( 'href', data );
    link.setAttribute( 'download', fileName );
    link.click();
}
```

Note: The example uses four inputs, creates a row of them with commas between, then repeats that line. 