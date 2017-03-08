
import $ from 'jquery';
let HOST = 'http://localhost:9090';

module.exports = {
    list(callback){
        $.get(`${HOST}/messages`)
            .then(function(data){
                callback(data);
            })
    },
    add(message,callback){
        $.post(`${HOST}/messages`,message)
            .then(function(data){
                callback(data);
            })
    },
}