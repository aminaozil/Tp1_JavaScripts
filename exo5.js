let tableau = [
    {nom:"amy", prenom:"yum"},
    {age: 96, mat:"SN5896354"},
    {x:78, y:8, z:89},
]

for (tab of tableau){
    // console.log(tab)
    for (i in tab){
        console.log(i + ':' + tab[i]);
    }
}