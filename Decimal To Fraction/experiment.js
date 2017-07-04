var mySceneTLX;        /* Top Left corner X coordinate */
var mySceneTLY;        /* Top Left corner Y coordinate */
var mySceneBRX;        /* Bottom Right corner X coordinate */
var mySceneBRY;        /* Bottom Right corner Y coordinate */
var mySceneW;          /* Scene Width */
var mySceneH;          /* Scene Height */
var myCenterX;         /* Scene Center X coordinate */
var myCenterY;         /* Scene Center Y coordinate */

var myText;
var myText1;
var myText2;
var myText3;
var myText4;
/*function notify()
{

}*/
function initialiseScene()
{
    /* Initialise Scene Variables */
    mySceneTLX = 0.0;
    mySceneTLY = 3.0;
    mySceneBRX = 4.0;
    mySceneBRY = 0.0;
    mySceneW   = (mySceneBRX - mySceneTLX);
    mySceneH   = (mySceneTLY - mySceneBRY);
    myCenterX  = (mySceneTLX + mySceneBRX) / 2.0;
    myCenterY  = (mySceneTLY + mySceneBRY) / 2.0;

}

function loadExperimentElements()
{
    PIEsetDeveloperName("Saloni Mundra");
    PIEsetExperimentTitle("Decimal to Fraction");
    generateHelp();
    generateInfo();
    initialiseScene();
    var geometry = new THREE.BoxGeometry( mySceneW * 2, mySceneH * 2, 0 );
    var material = new THREE.MeshBasicMaterial( {color: 0xffff99} );
    var myBack = new THREE.Mesh( geometry, material );
    myBack.position.set(myCenterX, myCenterY, 0);
    myBack.castShadow=false;
    myBack.receiveShadow=false;
    //myBack.receiveShadow = true;
    //PIEaddInputCheckbox("Decimal", "", notify());
    PIEaddElement(myBack);

    var text2 = document.createElement('div');
    text2.style.position = 'absolute';
//text2.style.zIndex = 1;    // if you still don't see the label, try uncommenting this
    text2.style.width = 100;
    text2.style.height = 100;
    text2.style.color="blue";
    text2.style.fontSize=20+'px';
    //text2.style.backgroundColor = "blue";

    text2.innerHTML = "Decimal Number: ";
    text2.style.top = 120 + 'px';
    text2.style.left = 350 + 'px';
    document.body.appendChild(text2);
    myText=text2;
    PIEaddInputCommand("Demo",demo);

    var text3 = document.createElement('div');
    text3.style.position = 'absolute';
//text2.style.zIndex = 1;    // if you still don't see the label, try uncommenting this
    text3.style.width = 100;
    text3.style.height = 100;
    text3.style.color="blue";
    text3.style.fontSize=20+'px';
    //text2.style.backgroundColor = "blue";

    text3.innerHTML = "Fraction: ";
    text3.style.top = 400 + 'px';
    text3.style.left = 350 + 'px';
    document.body.appendChild(text3);
    myText1=text3;

    var text4 = document.createElement('div');
    text4.style.position = 'absolute';
//text2.style.zIndex = 1;    // if you still don't see the label, try uncommenting this
    text4.style.width = 100;
    text4.style.height = 100;
    text4.style.color="#800080";
    text4.style.fontSize=40+'px';
    //text2.style.backgroundColor = "blue";

    text4.innerHTML = " ";
    text4.style.top = 320 + 'px';
    text4.style.left = 350 + 'px';
    document.body.appendChild(text4);
    myText2=text4;


    var text5 = document.createElement('div');
    text5.style.position = 'absolute';
//text2.style.zIndex = 1;    // if you still don't see the label, try uncommenting this
    text5.style.width = 100;
    text5.style.height = 100;
    text5.style.color="blue";
    text5.style.fontSize=20+'px';
    //text2.style.backgroundColor = "blue";

    text5.innerHTML = " ";
    text5.style.top = 200 + 'px';
    text5.style.left = 170 + 'px';
    document.body.appendChild(text5);
    myText3=text5;
    //myText3.innerHTML="<table><tr><th bgcolor='#ff0000'>NUMBER</th><th bgcolor='#ff0000'>HUNDEREDS(100)</th><th bgcolor='#ff0000'>TENS(10)</th><th bgcolor='#ff0000'>ONES(1)</th><th bgcolor='#ff0000'>TENTHS(1/10)</th><th bgcolor='#ff0000'>HUNDRETHS(1/100)</th></tr></table>";

    var text6 = document.createElement('div');
    text6.style.position = 'absolute';
//text2.style.zIndex = 1;    // if you still don't see the label, try uncommenting this
    text6.style.width = 100;
    text6.style.height = 100;
    text6.style.color="blue";
    text6.style.fontSize=20+'px';
    //text2.style.backgroundColor = "blue";

    text6.innerHTML = " ";
    text6.style.top = 230 + 'px';
    text6.style.left = 170 + 'px';
    document.body.appendChild(text6);
    myText4=text6;

    var text7 = document.createElement('div');
    text7.style.position = 'absolute';
//text2.style.zIndex = 1;    // if you still don't see the label, try uncommenting this
    text7.style.width = 100;
    text7.style.height = 100;
    text7.style.color="blue";
    text7.style.fontSize=20+'px';
    //text2.style.backgroundColor = "blue";

    text7.innerHTML = "Reduced Fraction: ";
    text7.style.top = 450 + 'px';
    text7.style.left = 350 + 'px';
    document.body.appendChild(text7);
    myText5=text7;




    resetExperiment();
    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
}
function generateHelp()
{
    var helpString="<h1>Help</h1>";
    PIEupdateHelp(helpString);
}
function generateInfo()
{
    var info="<h1>Info</h1>";
    PIEupdateInfo(info);
}
function resetExperiment()
{
    initialiseScene();
}


    function demo(){

    var x= parseFloat(Math.min(1 + (Math.random() * (999 - 1)),999).toFixed(2));
    Math.round(x * 100) / 100
    myText.innerHTML="Decimal Number: "+x;
    var integerVal= parseInt((x*100));
    if(x*100-integerVal>0.5)
        integerVal++;
    var num=integerVal;
    myText1.innerHTML="Fraction: "+integerVal+"/100";
    var output = [];
    for(var i=0;i<5;i++)
    {
    output[i]=parseInt(integerVal%10);
    integerVal=parseInt(integerVal/10);
    }
    myText3.innerHTML="<table><tr><th bgcolor='#ff0000'>NUMBER</th><th bgcolor='#ff0000'>HUNDEREDS(100)</th><th bgcolor='#ff0000'>TENS(10)</th><th bgcolor='#ff0000'>ONES(1)</th><th bgcolor='#ff0000'>TENTHS(1/10)</th><th bgcolor='#ff0000'>HUNDRETHS(1/100)</th></tr><tr><td bgcolor='#ff0000'>"+x+" "+"</td><td bgcolor='#ff0000'>"+output[4]+"</td><td bgcolor='#ff0000'>"+output[3]+"</td><td bgcolor='#ff0000'>"+output[2]+"</td><td bgcolor='#ff0000'>"+output[1]+"</td><td bgcolor='#ff0000'>"+output[0]+"</td><tr></table>";
    var sNumber=x.toString();
    var len=sNumber.length;
    console.log(len);
    var i;
    var y="";
    var l1=0;
    var l2=0;
    var flag=0;
    for(i=0;i<len;i++)
    {
        if(sNumber.charAt(i)!='.' && flag==0)
        {
            l1++;

        }
        if(flag==1)
        {
            l2++;
        }
        if(sNumber.charAt(i)=='.')
            flag=1;

    }
    console.log(l1);
    console.log(l2);
    i=0;

    while(i<l1)
    {

        y+=parseInt(sNumber.charAt(i))*Math.pow(10,l1-1-i);
        if(i!=(len-1))
     {
        y+="+";
     }
        i++;
    }
    i=l1+1;
    var k=0;
    while(k<l2)
    {

        y+=sNumber.charAt(i)+"/"+Math.pow(10,k+1);
        if(i!=(len-1))
     {
        y+="+";
     }
        i++;
        k++;
    }

    myText2.innerHTML=y;
    var gcd = function(a, b) {
    if ( ! b) {
        return a;
    }

    return gcd(b, a % b);
};
    var gc = gcd(num,100);
    console.log(gc);
    console.log(num);
    myText5.innerHTML="Reduced Fraction: "+parseInt(num/gc)+"/"+parseInt(100/gc);

myCreateFunction();

}

var gcd = function(a, b) {
    if ( ! b) {
        return a;
    }

    return gcd(b, a % b);
};

function myCreateFunction() {
    var table = document.createElement('div');
    table.style.position='absolute';
    table.style.width = 100;
    table.style.height = 100;
    table.style.top = 200 + 'px';
    table.style.left = 170 + 'px';
    table.style.border=1+'px'+ 'solid black';

    var header = table.createTHead();
    var row = header.insertRow(0);
    var cell = row.insertCell(0);
    cell.innerHTML = "<b>This is a table header</b>";
    document.appendChild(table);

}



