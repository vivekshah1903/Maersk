window.onload=function(){
var list = document.getElementById("shuffleAndSort");
function shuffle(items)
{
    let cached = items.slice(0), temp, i = cached.length, rand;
    while(--i)
    {
        randm = Math.floor(i * Math.random());
        temp = cached[randm];
        cached[rand] = cached[i];
        cached[i] = temp;
    }
    return cached;
}
function shuffleNodes()
{
    let nodes = list.children, i = 0;
    nodes = Array.prototype.slice.call(nodes);
	nodes.sort(function(a, b) {
  		return a - b;
	});
    nodes = shuffle(nodes);
    while(i < nodes.length)
    {
        list.appendChild(nodes[i]);
        ++i;
    }
} 
function sortNodes()
{
	let nodes = list.children;
	[].slice.call(nodes).sort(function(a, b) {
    		return a.textContent.localeCompare(b.textContent);
  	}).forEach(function(val, index) {
    		list.appendChild(val);
  	});	
} 
document.getElementById("shuffle").onclick = shuffleNodes;
document.getElementById("sort").onclick = sortNodes;
} 