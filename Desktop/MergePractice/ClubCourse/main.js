$(document).ready(function() {
    
$("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th><tr>");

var topicCount = topic.length;
var secondUnit = 1000;
var minuteUnit = secondUnit *60;
var hourUnit = minuteUnit * 60;
var dayUnit = hourUnit * 24;

for (var x=0;x<3;x++)
{
   
    $("#courseTable").append("<tr>");
    $("#courseTable").append("<td>"+(x+1)+"</td>");
    var thisDateString=(new Date((startDate.getTime()+x*7*dayUnit))).toLocaleDateString();
    $("#courseTable").append("<td>"+thisDateString.slice(0,thisDateString.length-5)+"</td>");
    //为什么这里不变蓝
    
    $("#courseTable").append("<td>"+topic[x]+"</td>");
    $("#courseTable").append("</tr>");
}
});