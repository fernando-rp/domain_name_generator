
var pronoun=['let','our'];
var adj=['great','big','cool'];
var noun=['jogger','racoon'];
var extension=['.com','.net','.us','.io','.cl'];

any_string()


function any_string (){
     for (i=0; i<pronoun.length; i++){
        for(a=0; a<adj.length; a++){
            for(b=0; b<noun.length; b++){
                for(c=0; c<extension.length; c++){
                    console.log(pronoun[i] + adj[a]+ noun[b] + extension[c]);
                }
            }
        }

    }
}


