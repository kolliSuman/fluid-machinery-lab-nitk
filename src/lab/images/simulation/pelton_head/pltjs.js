//on click of next button
var mpointer=0;
var repeat =0;
var flag=0;
var x=0;
var y;


function navNext()
{

for (temp = 0; temp <= 7 ; temp++) 
{ 
document.getElementById('canvas'+temp).style.visibility="hidden";
}

simsubscreennum+=1;
document.getElementById('canvas'+(simsubscreennum)).style.visibility="visible";
document.getElementById('nextButton').style.visibility="hidden";
magic();
}


//Move pointing finger with mouse
$(document).mousemove(function(e)
{

if(simsubscreennum==1 && mpointer==0) 
{
if(e.pageX<800 && e.pageY<600)  
{
document.getElementById('onarm').style.visibility="visible";

 $("#onarm").css({left:e.pageX, top:e.pageY});
}


}

else if(simsubscreennum!=1)
{
	document.getElementById('onarm').style.visibility="hidden";
}


});

//blink arrow on the next step
function animatearrow()
{
if (document.getElementById('arrow1').style.visibility=="hidden")
document.getElementById('arrow1').style.visibility="visible";
else
document.getElementById('arrow1').style.visibility="hidden";
}

//stop blinking arrow
function myStopFunction() 
{
clearInterval(myInt);
document.getElementById('arrow1').style.visibility="hidden";
}


//-----------------------------------------blink arrow on the next step---------------------------------------------
//blink arrow on the next step
function animatearrow()
{
if (document.getElementById('arrow1').style.visibility=="hidden")
document.getElementById('arrow1').style.visibility="visible";
else
document.getElementById('arrow1').style.visibility="hidden";
}

//stop blinking arrow
function myStopFunction() 
{
clearInterval(myInt);
document.getElementById('arrow1').style.visibility="hidden";
}

//-------------------------------------function magic starts here----------------------------------------------------

function magic()
{
	
	if (simsubscreennum==1)
	{
		document.getElementById('trial').style="visibility:hidden ;left: 70px; top: 100px;position: absolute;font-weight: bold;";
		document.getElementById('trial').innerHTML="";
		refresh1();
		if(flag==1)
		{
		document.getElementById('can1on').onclick="";
		document.getElementById('pumptext').innerHTML="Stop the pump by pressing the stop button."		
		}
		else
		{
		document.getElementById("onarm").style="margin-left:-50px; margin-top: -50px; position:absolute;";
		document.getElementById('can1on').onclick=function() { step1(); };
		document.getElementById('can1off').onclick=function() { stepstop(); };
		}
	}
	
	
	else if (simsubscreennum==2)
	{
		refresh1();
		repeat+=1;
		
		document.getElementById('can1-form').style.visibility="hidden";
		
		if(repeat!=1){
			myStopFunction();
			
		}
		else
		{

			myInt = setInterval(function(){ animatearrow(); }, 500);
				document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 50px; top: 430px; height: 50px; z-index: 10;";
				document.getElementById("arrow1").style.WebkitTransform = "rotate(-90deg)"; 
				document.getElementById("arrow1").style.msTransform = "rotate(-90deg)"; 
				document.getElementById("arrow1").style.transform = "rotate(-90deg)";
			
			document.getElementById('can2-8').onclick=function() 
			{
				myStopFunction();	
				document.getElementById("can2-8").style.transformOrigin = "20% 75%";
				document.getElementById("can2-8").style.animation = "springreading 1s forwards ";
				step2(); 
			
			};
		}	
	}
	else if (simsubscreennum==3)
	{
		document.getElementById('trial').style="visibility:visible ;left: 700px; top: 100px;position: absolute;font-weight: bold;text-transform: uppercase;";
		document.getElementById('trial').innerHTML="Trial : " + repeat;
		
		
		myStopFunction();
		refresh1();
		if(repeat==1)
		{
			
			document.getElementById('can3-3').style.visibility="hidden";
			step3andhalf();
		}
	
		else{
			
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 580px; top: 380px; height: 50px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
			document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
			document.getElementById("arrow1").style.transform = "rotate(90deg)";
			
			document.getElementById('can3-5').innerHTML="Weight on the pan = ";
			document.getElementById('can3-3').style.visibility="visible";
			
			document.getElementById('can3-3').onclick=function() { step3(); };
		}
		
	}
	else if (simsubscreennum==4)
	{
		
		
		
		
		document.getElementById('can3-3').style.visibility="hidden";
		step4();	
	}
	else if (simsubscreennum==5)
	{
		
		
		document.getElementById('can5-9').innerHTML="Initial reading (water level till crest) = "+values[x][lnt][4] +" cm";
		
		myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 200px; top: 190px; height: 50px; z-index: 10;";
			
			document.getElementById("arrow1").style.WebkitTransform = "rotate(45deg)"; 
			 // Code for IE9
			 document.getElementById("arrow1").style.msTransform = "rotate(45deg)"; 
			 // Standard syntax
			 document.getElementById("arrow1").style.transform = "rotate(45deg)";
			 
		document.getElementById('can5-7').onclick=function() { step5andhalf();};
		
	}
	else if(simsubscreennum==6)
	{
		
		
		step6();

		if(repeat==8)
		{
			flag=1;
			mpointer=0;
			simsubscreennum=0;
			
		}
		else if (repeat < 8)
		{
			
			simsubscreennum=2;
			
			magic();
			
		}	
		
	}
	else (simsubscreennum==7)
	{
		document.getElementById('step7text1').onclick=function() { step_7a();}
		document.getElementById('step7text2').onclick=function() { step_7b();}
		document.getElementById('step7text3').onclick=function() { step_7c();}
	}
	
	


}

function step1()
{
	mpointer=1;
	document.getElementById('onarm').style.visibility="hidden";
	document.getElementById('can1-form').style.visibility="visible";
	
	document.getElementById('can1-ok').onclick=function() { step1andhalf(); };
	
}

function step1andhalf()
{
	x = document.getElementById("can1-select").selectedIndex;
	y = document.getElementById("can1-select").options;
	document.getElementById('nextButton').style.visibility="visible";
}

function step2()
{
	
	setTimeout(function(){
	document.getElementById("can2-3").style.transformOrigin = "62% 37%";
	//document.getElementById("can2-3").style.transformOrigin = "40% 51%";
	document.getElementById("can2-3").style.animation = "arrow-1 2s forwards ";
	
	
	}, 1000);
	setTimeout(function(){
	document.getElementById('can2-4').innerHTML="Constant pressure = " +values[x][lnt][14] +" kg/cm<sup>2</sup>" ;
	document.getElementById('can2-5').innerHTML="Constant head = " +y[x].text +" m" ;
	document.getElementById('nextButton').style.visibility="visible";	},3000);
	
}



function step3()
{
	myStopFunction();
	
	document.getElementById("can3-3").style.animation = "tacho 1s forwards";
	setTimeout(function(){
	document.getElementById("can3-4").style.transformOrigin = "50% 58%";
	document.getElementById("can3-4").style.animation = "springreading 1s forwards ";
	}, 1000);
	
	
	setTimeout(function(){
	document.getElementById('can3-5').innerHTML="Weight on the pan = "+values[x][lnt][1] +" kg" ;
	document.getElementById('can3-6').innerHTML="Spring balance reading = "+values[x][lnt][2] +" kg" ;
	document.getElementById('can3-7').innerHTML="Torque = "+values[x][lnt][3] +" N-m" ;
	
	document.getElementById('nextButton').style.visibility="visible";
	}, 3000);
	
}
function step3andhalf()
{
	
	setTimeout(function(){
		document.getElementById("can3-4").style.transformOrigin = "50% 58%";
		document.getElementById("can3-4").style.animation = "springreading 0.9s forwards ";
	}, 700);
	setTimeout(function(){
	document.getElementById('can3-5').innerHTML="Dead weight of the pan = "+values[x][lnt][1] +" kg" ;
	document.getElementById('can3-6').innerHTML="Spring balance reading = "+values[x][lnt][2] +" kg" ;
	document.getElementById('can3-7').innerHTML="Torque = "+values[x][lnt][3] +" N-m" ;
	document.getElementById('nextButton').style.visibility="visible";
	}, 3000);
		
}

function step4()
{
	
	
	document.getElementById("can4-3").style.transformOrigin = "33% 35%";
	document.getElementById("can4-3").style.animation = "spring 2s forwards ";
	setTimeout(function(){
	document.getElementById('can4-4').innerHTML="Speed of motor = "+values[x][lnt][0] +" rpm" ;
	document.getElementById('nextButton').style.visibility="visible";
	}, 2000);
}

function step5andhalf()
{
	myStopFunction();
	setTimeout(function(){
	document.getElementById("can5-13").style.animation = "water-5 1.5s 1 forwards";
	
	}, 1000);
	
	setTimeout(function(){
	document.getElementById("can5-3").style.animation = "myhook-2 2s 1  forwards";
	
	step5quarter();
	
	}, 2700);
	
	
}

function step5quarter()
{
	setTimeout(function(){
	
	document.getElementById('can5-10').innerHTML="Final reading = "+values[x][lnt][5] +" cm" ;
	document.getElementById('can5-11').innerHTML="Head of water = "+values[x][lnt][6] + " m";
	document.getElementById('can5-12').innerHTML="Actual discharge, Q<sub>act</sub> = "+values[x][lnt][7] +" m<sup>3</sup>/sec";
	setTimeout(function(){
	document.getElementById('nextButton').style.visibility="visible";
	}, 500);
	
	}, 3000);
	
}
function step_7a()
{
	
	$("#chartContainer").ejChart(
        {
		    //Initializing Primary X Axis	
		    primaryXAxis:
            {
			   
                labelFormat: "{value}",
                title: { text: 'Unit Speed' },
                range: { min: 0, max: 250, interval: 50 } 
            },	
			
			//Initializing Primary Y Axis	
            primaryYAxis:
            {
				labelFormat: "{value}",
                title: { text: 'Efficiency' },
                range: { min: 0, max: 35, interval: 5 }
				
            },	
			
			//Initializing Common Properties for all the series
           
            //Initializing Series				
            series: 
			[
			    {
                points: [
				{ x: values[x][0][11], y: values[x][0][10]},
				{ x: values[x][1][11], y: values[x][1][10]},
				{ x: values[x][2][11], y: values[x][2][10]},
				{ x: values[x][3][11], y: values[x][3][10]},
				{ x: values[x][4][11], y: values[x][4][10]},
				{ x: values[x][5][11], y: values[x][5][10]},
				{ x: values[x][6][11], y: values[x][6][10]},
				{ x: values[x][7][11], y: values[x][7][10]}
				
				],
				type: 'line',
					fill: "#0066FF",
					border :{width:5},
					tooltip:{visible:true},
					marker:{
                        shape: 'circle',
						size:
                        {
                            height: 5, width: 5
                        },
                        visible: true
                    },					
					enableAnimation :true
                }
			],
             load:"loadTheme",
			isResponsive: true,
			
			legend:{visible:false}
        });
}

function step_7b()
{
	$("#chartContainer").ejChart(
        {
		    //Initializing Primary X Axis	
		    primaryXAxis:
            {
			  
                labelFormat: "{value}",
                title: { text: 'Unit Speed' },
                range: { min: 0, max: 250, interval: 50 } 
            },	
			
			//Initializing Primary Y Axis	
            primaryYAxis:
            {
				 labelFormat: "{value}",
                title: { text: 'Unit Power' },
                range: { min: 0, max: 2.5, interval: 0.5 }
				
            },	
			
			//Initializing Common Properties for all the series
           
            //Initializing Series				
            series: 
			[
			    {
                points: [
				{ x: values[x][0][11], y: values[x][0][13]},
				{ x: values[x][1][11], y: values[x][1][13]},
				{ x: values[x][2][11], y: values[x][2][13]},
				{ x: values[x][3][11], y: values[x][3][13]},
				{ x: values[x][4][11], y: values[x][4][13]},
				{ x: values[x][5][11], y: values[x][5][13]},
				{ x: values[x][6][11], y: values[x][6][13]},
				{ x: values[x][7][11], y: values[x][7][13]}
				
				],
				type: 'line',
					fill: "#0066FF",
					border :{width:5},
					tooltip:{visible:true},
					marker:{
                        shape: 'circle',
						size:
                        {
                            height: 5, width: 5
                        },
                        visible: true
                    },					
					enableAnimation :true
                }
			],
             load:"loadTheme",
			isResponsive: true,
			
			legend:{visible:false}
        });
}

function step_7c()
{
	$("#chartContainer").ejChart(
        {
		    //Initializing Primary X Axis	
		    primaryXAxis:
            {
			    labelFormat: "{value}",
                title: { text: 'Unit Speed' },
                range: { min: 0, max: 250, interval: 50 }
            },	
			
			//Initializing Primary Y Axis	
            primaryYAxis:
            {
				labelFormat: "{value}",
                title: { text: 'Unit Discharge' },
                range: { min: 0, max: 0.00150, interval: 0.00050 }
				
                
            },	
			
			//Initializing Common Properties for all the series
           
            //Initializing Series				
            series: 
			[
			    {
                points: [
				{ x: values[x][0][11], y: values[x][0][12]},
				{ x: values[x][1][11], y: values[x][1][12]},
				{ x: values[x][2][11], y: values[x][2][12]},
				{ x: values[x][3][11], y: values[x][3][12]},
				{ x: values[x][4][11], y: values[x][4][12]},
				{ x: values[x][5][11], y: values[x][5][12]},
				{ x: values[x][6][11], y: values[x][6][12]},
				{ x: values[x][7][11], y: values[x][7][12]}
				
				],
				type: 'line',
					fill: "#0066FF",
					border :{width:5},
					tooltip:{visible:true},
					marker:{
                        shape: 'circle',
						size:
                        {
                            height: 5, width: 5
                        },
                        visible: true
                    },					
					enableAnimation :true
                }
			],
             load:"loadTheme",
			isResponsive: true,
			
			legend:{visible:false}
        });
	
}




function step6()
{
	
	myStopFunction();
	
	
	
	setTimeout(function(){
		
	document.getElementById('can6-5').innerHTML="Input power = "+values[x][lnt][8] +" watt" ;
	document.getElementById('can6-6').innerHTML="Output power = "+values[x][lnt][9] +" watt" ;
	document.getElementById('can6-7').innerHTML="Efficiency = "+values[x][lnt][10] +" %" ;
	document.getElementById('can6-8').innerHTML="Unit power = "+values[x][lnt][13] +" watt" ;
	document.getElementById('can6-9').innerHTML="Unit speed = "+values[x][lnt][11] +" rpm" ;
	document.getElementById('can6-10').innerHTML="Unit discharge = "+values[x][lnt][12] +" m<sup>3</sup>/sec";
	document.getElementById('nextButton').style.visibility="visible";
	lnt+=1;
	}, 500);
	
	
	
}





function stepstop()
{
	if(flag!=1){
		document.getElementById('nextButton').style.visibility="hidden";	
	}
	else{
		simsubscreennum=6;
		document.getElementById('nextButton').style.visibility="visible";
	}
	
}


function refresh1()
{
	document.getElementById("can1-select").selectedIndex = 0;
	
	document.getElementById("can2-3").style.transformOrigin = "";
	document.getElementById("can2-3").style.animation = "";
	document.getElementById('can2-4').innerHTML="Constant pressure = ";
	document.getElementById('can2-5').innerHTML="Constant head = ";
	document.getElementById("can2-8").style.transformOrigin = "";
	document.getElementById("can2-8").style.animation = "";
	document.getElementById("can3-3").style.animation = "";
	document.getElementById("can3-4").style.transformOrigin = "";
	document.getElementById("can3-4").style.animation = "";
	
	//document.getElementById('can3-5').innerHTML="Weight on the pan =";
	document.getElementById('can3-6').innerHTML="Spring balance reading = ";
	document.getElementById('can3-7').innerHTML="Torque = ";
	
	document.getElementById("can4-3").style.transformOrigin = "";
	document.getElementById("can4-3").style.animation = "";
	document.getElementById('can4-4').innerHTML="Speed of motor = ";
	
	document.getElementById("can5-5").style.animation = "";	
	document.getElementById("can5-3").style.animation = "";
	
	document.getElementById("can5-13").style.animation = "";
	document.getElementById("can5-3").style.animation = "";
	
	document.getElementById('can5-9').innerHTML="Initial reading (water level till crest) = ";
	document.getElementById('can5-10').innerHTML="Final reading = ";
	document.getElementById('can5-11').innerHTML="Head of water = ";
	document.getElementById('can5-12').innerHTML="Actual discharge, Q<sub>act</sub> = ";
	
	document.getElementById('can6-5').innerHTML="Input power = ";
	document.getElementById('can6-6').innerHTML="Output power = ";
	document.getElementById('can6-7').innerHTML="Efficiency = ";
	document.getElementById('can6-8').innerHTML="Unit power = ";
	document.getElementById('can6-9').innerHTML="Unit speed = ";
	document.getElementById('can6-10').innerHTML="Unit discharge = ";
	
	document.getElementById('nextButton').style.visibility="hidden";
	
}

