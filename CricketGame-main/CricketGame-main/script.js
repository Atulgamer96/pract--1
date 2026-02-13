function bats()
{
    let cc=getRandomInRange(1,3);
    //1->bat,//2->ball,//stump
    if(cc==1)
    {
      document.getElementById("result").innerHTML="Computer selects bat and you too so match is draw";
    }
    else if(cc==2)
    {
        document.getElementById("result").innerHTML="Computer selects ball and you selects bat so you win the match";   
    }
    else
    {
        document.getElementById("result").innerHTML="Computer selects stump and you selects bat so you loss the match";
    }
}
function balls()
{
    let cc=getRandomInRange(1,3);
    //1->bat,//2->ball,//stump
    if(cc==1)
    {
        document.getElementById("reult").innerHTML="Computer selects ball and you selects bat so you loss the match";                   
    }
    else if(cc==2)
    {
        document.getElementById("result").innerHTML="Computer selects ball and you too so match is draw";
    }
    else
    {
        document.getElementById("result").innerHTML="Computer selects stump and you selects ball so you win the match";
    }
}

function stumps()
{
    let cc=getRandomInRange(1,3);
    //1->bat,//2->ball,//stump
    if(cc==1)
    {
       document.getElementById("result").innerHTML="Computer selects stump and you too so match is draw"; 
    }
    else if(cc==2)
    {
        document.getElementById("result").innerHTML="Computer selects ball and you selects stump so you win the match";
    }
    else
    {
        document.getElementById("result").innerHTML="Computer selects stump and you selects ball so you loss the match";
    }
}

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
