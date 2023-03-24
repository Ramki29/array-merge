	
let one=[1,2,3,4];
let two=[5,6,7,8,9];
var countsss=0;	
function merge(one,two)
	{
	for(i=0; i<two.length; i++)
		{
		if(two[i]%2!=0)
		{
		one.push(two[i]);
		countsss++;
		}
		}
		return countsss;
	}
	document.write(merge(one,two));
	document.write("<br>");
	document.write(one);
	document.write("<br>");
	
	
	
	
var first=[10,20,30,40,50];
var second=[60,70,80,90,100];
var third=[];
let count1=0;
function mer(third)
	{
	for(i=0; i<first.length; i++)
		{
		third.push(first[i]);
		count1++;
		}
	for(i=0; i<second.length; i++)
		{
		third.push(second[i]);
		count1++;
		}	
		return count1;
	}	
	document.write(mer(third));
	document.write("<br>");
	document.write(third);
	document.write("<br>");