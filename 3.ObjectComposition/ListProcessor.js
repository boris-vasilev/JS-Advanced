let listProcessor = (function(command){
    let line = "";

    function add(word){
        line+=word+" ";
    }
    function remove(word){
        let splitLine = line.split(" ");
        for (let element of splitLine){
            if (element===word){
                splitLine.splice(splitLine.indexOf(element),1);
            }
        }
        line = splitLine.join(' ');
    }
    print = ()=>console.log(line);
    return {
        add,
        remove,
        print
    }
})();
listProcessor.add('ivan');
listProcessor.add('pesho');
listProcessor.add('gosho');
listProcessor.remove('ivan');
listProcessor.print();
