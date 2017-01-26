
// <ul id=result>
//     <li>No Items in data</li>
// </ul>
// <button id=data>Get Data</button>

$('#data')
    .on('click', function(event: JQueryEventObject){
        $.ajax({
            accepts: 'text/json',
            method: 'Get',
            url: 'data/words.json'
        })
        .done(function(data){
            let words = <string[]>data;
            let $elm = $('#result');

            // Clear html content
            $elm.html('');

            words.forEach(function(word){
                $elm.append(`<li>${word}</li>`);
            })

        })
    });