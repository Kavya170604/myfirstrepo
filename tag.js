const animals=["tiger","deer","lion","dog"];
for(i in animals){
    document.getElementsByTagName("p")[i].innerHTML=animals[i];
  }