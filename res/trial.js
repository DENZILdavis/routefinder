
let graph1 = {
    SG: { BB: 33},
    BB:{SG:33,},
	A: { start: 1, C: 4, D: 2 },
	B: { A: 8, D: 7 },
	C: { D: 6, finish: 3 },
	D: { finish: 1 },
	finish: {},
};



const shortestDistanceNode = (distances, visited) => {
	let shortest = null;

	for (let node in distances) {
		let currentIsShortest =
			shortest === null || distances[node] < distances[shortest];
		if (currentIsShortest && !visited.includes(node)) {
			shortest = node;
		}
	}
	return shortest;
};


const findShortestPathWithLogs = (graph3, startNode, endNode) => {
	// establish object for recording distances from the start node
	let distances = {};
	distances[endNode] = "Infinity";
    //distances = Object.assign(distances, graph[startNode]);
    distances = Object.assign(distances, graph3.edges[startNode]);

	// track paths
	let parents = { endNode: null };
	for (let child in graph3.edges[startNode]) {
		parents[child] = startNode;
	}

	// track nodes that have already been visited
	let visited = [];

	// find the nearest node
	let node = shortestDistanceNode(distances, visited);

	// for that node
	while (node) {
		// find its distance from the start node & its child nodes
		let distance = distances[node];
		let children = graph3.edges[node];
		// for each of those child nodes
		for (let child in children) {
			// make sure each child node is not the start node
			if (String(child) === String(startNode)) {
				console.log("don't return to the start node! 🙅");
				continue;
			} else {
				console.log("startNode: " + startNode);
				console.log("distance from node " + parents[node] + " to node " + node + ")");
				console.log("previous distance: " + distances[node]);
				// save the distance from the start node to the child node
				let newdistance = distance + children[child];
				console.log("new distance: " + newdistance);
				// if there's no recorded distance from the start node to the child node in the distances object
				// or if the recorded distance is shorter than the previously stored distance from the start node to the child node
				// save the distance to the object
				// record the path
				if (!distances[child] || distances[child] > newdistance) {
					distances[child] = newdistance;
					parents[child] = node;
					console.log("distance + parents updated");
				} else {
					console.log("not updating, because a shorter path already exists!");
				}
			}
		}
		// move the node to the visited set
		visited.push(node);
		// move to the nearest neighbor node
		node = shortestDistanceNode(distances, visited);
	}

	// using the stored paths from start node to end node
	// record the shortest path
	let shortestPath = [endNode];
	let parent = parents[endNode];
	while (parent) {
		shortestPath.push(parent);
		parent = parents[parent];
	}
	shortestPath.reverse();

	// return the shortest path from start node to end node & its distance
	let results = {
		distance: distances[endNode],
		path: shortestPath,
	};
    
    return results;
    
};

class Graph2 {
    constructor() {
       this.edges = {};
       this.nodes = [];
    }
 
    addNode(node) {
      this.nodes.push(node);
       this.edges[node] = { };
   }
 
    addEdge(node1, node2, weight = 1) {
        let first=node1;
        let second=node2;
        this.edges[node1][second] = weight;
        this.edges[node2][first]  = weight;
    }
    display() {
        let graph = "";
        this.nodes.forEach(node => {
           graph += node + "->" + this.edges[node].map(n => n.node).join(", ") + "\n";
        });
        console.log(graph);
    }
 
   
}
function tri(starting,ending){

	locs=["AB","BB","SG","MG","MBA","GND","DB","AUD","GH","CAN","CHU","KC","BH"];
	for (let loc in locs){
		
		
		document.getElementById(locs[loc]).style.opacity="0.6";
	}
	
let g = new Graph2();

g.addNode("A");
g.addNode("B");
g.addNode("C");
g.addNode("D");
g.addNode("E");
g.addNode("F");
g.addNode("G");
g.addNode("AB");
g.addNode("SG");
g.addNode("BB");
g.addNode("MG");
g.addNode("MBA");
g.addNode("BH");
g.addNode("CAN");
g.addNode("GH");
g.addNode("KC");
g.addNode("CHU");
g.addNode("DB");
g.addNode("GND");
g.addNode("AUD");



g.addEdge("SG", "BB",33);
g.addEdge("BB","B",27 );
g.addEdge("B", "BH", 13);
g.addEdge("BH", "KC",9 );
g.addEdge("BH", "C",12 );
g.addEdge("C", "CAN",9 );
g.addEdge("C", "GH",11 );
g.addEdge("C", "D",19 );
g.addEdge("D", "E",8 );
g.addEdge("E", "DB",5 );
g.addEdge("DB", "GND",14 );
g.addEdge("GND", "F",22 );
g.addEdge("F", "G",15 );
g.addEdge("G", "AUD",6);
g.addEdge("AUD", "E", 27);
g.addEdge("G", "CHU", 10);
g.addEdge("CHU", "KC", 10);
g.addEdge("CHU", "A",10 );
g.addEdge("KC", "A", 22);
g.addEdge("A", "AB",8 );
g.addEdge("AB", "G",7 );
g.addEdge("AB", "F",17 );
g.addEdge("AB", "MBA", 60);
g.addEdge("AB", "MG",100 );
g.addEdge("AB", "BB",39 );
g.addEdge("CHU", "D",15 );




/*
startNode="A";
endNode="D";

console.log(graph1[startNode]);

console.log("g=  ");



console.log(g.edges[startNode]);*/
console.log("ANSWER.... ");
ans=findShortestPathWithLogs(g, starting, ending);
console.log(ans["path"]);

locValue={"AB":"Administartive Block","SG":"Service Gate","BB":"Bio Block","MBA":"MBA College","GND":"Ground","AUD":"Auditorium","DB":"Decinnial Block","CHU":"Church","GH":"Girls Hostel","KC":"Knowledge Centre","BH":"Boys Hostel","MG":"Main Gate","CAN":"Canteen"};

 let aa=[ ];
 let ad=0;
 let app="";

app = document.querySelector('#lists'); 




function tasks(val,j){
	setTimeout(function(){
		document.getElementById("lists").innerHTML="";
		if(!((ans["path"][val]=="A")||(ans["path"][val]=="B")||(ans["path"][val]=="C")||(ans["path"][val]=="D")|| (ans["path"][val]=="E")|| (ans["path"][val]=="F")||(ans["path"][val]=="G") ))
    {
        console.log("here");
    console.log(ans["path"][val]);
    aa[ad]=locValue[ans["path"][val]];
    ad=ad+1;
	}
	

	let nodes = aa.map(strs => {
		let li = document.createElement('li');
		li.textContent = strs;
		return li;
	
	});
	app.append(...nodes);
	delete(nodes);   

 },1100*j);

}



 let j=0;
for (let val in ans["path"]){
	tasks(val,j);
	j=j+1;
   
}





 
let i=0;
for (let key in ans["path"]) {
	
        task(key,i);
		i=i+1;
        document.getElementById("second").innerHTML="Hurray!! "+"\n"+" U can Select the path"+"";
    }
    value = ans["path"][ans["path"].length-1];
    document.getElementById(value).style.background="green";
    document.getElementById(value).innerHTML="Desination";   
   

document.getElementById("info").innerHTML="And the total distance is only <strong>"+ans["distance"]+"</strong>!!";
function task(key,i){
	   
		setTimeout(function()	{

		let value = ans["path"][key];

       console.log(key, value);
        //document.getElementById(value).innerHTML=value;
        document.getElementById(value).style.visibility="visible";
        
        document.getElementById(value).style.opacity="1";
        document.getElementById(value).style.background="rgb(180, 100, 233)";
        document.getElementById(value).style.borderColor= "rgb(150, 150, 240)";
		document.getElementById(value).style.borderWidth="4px";
		let value1 = ans["path"][ans["path"].length-1];
    document.getElementById(value1).style.background="white";
	document.getElementById(value1).innerHTML="Desination"; 
	document.getElementById(value1).style.borderColor= "green";
	document.getElementById(value1).style.color= "black";
		document.getElementById(value).style.transition="border-color  3s,background  3s,border-color 3s";
		
		
		},1000*i);
}
   let value1 = ans["path"][ans["path"].length-1];
    document.getElementById(value1).style.background="green";
    document.getElementById(value1).innerHTML="Desination"; 
}