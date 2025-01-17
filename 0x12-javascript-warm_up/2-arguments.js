#!/usr/bin/node
if( Process.argv.length === 2){
    console.log('Argument found');
}else if(Process.argv.length >= 3){
    console.log('Arguments found');
}else('No argument');
