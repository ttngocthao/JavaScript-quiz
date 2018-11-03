var bank = [
    ['What does une bibliothèque mean ?','a libray','a house','a bakery','a shop','A'],
    ['What is une patinoire?','swimming pool','ice rink','car park','book shop','B'],
    ['What is un champignon ?','a carrot','a mushroom','a strawberry','an onion','B'],
    ['What does un librairie mean?','a library','a bank','a bookshop','a hospital','C'],
    ['Vous ........ dans un bureau?','travaille','travailles','travailler','travaillez','D'],
    ['Which of these can you not drink?','citron pressé ','fleu','chocolat','eau','B'],
    ['Les lettres sont ......... le tiroir dela commode?','dans','par','au','devant','A'],
    ['Which is not a means of transport?','bateau','camion','parapluie','moto','C'],
    ['Which is not edible?','riz','poisson','carte','poulet','C'],
    ['What is deux cent vingt?','20','2','100','220','D'],
    ['What is a baker shop?','une boulangerie','un timbre','une poste','un marché','A'],
    ['Which is 86?','soixante seize','cinquante six','quatre vingt seize','quatre-vingt six','D']
]
//shuffle the bank

function shuffle (){
    var i = bank.length, j, temp;
    while(--i>0){
        j = Math.floor(Math.random()*(i+1));
        temp = bank[j];
        bank[j]= bank[i];
        bank[i]= temp;
    }
    return bank;
}

shuffle();
var questions = bank.slice(0,5);