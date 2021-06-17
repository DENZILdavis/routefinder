






count=0;


function he(startingPnt){
   


//const PriorityQueue = require("./PriorityQueue");
class Graph {
   constructor() {
      this.edges = {};
      this.nodes = [];
   }

   addNode(node) {
      this.nodes.push(node);
      this.edges[node] = [];
   }

   addEdge(node1, node2, weight = 1) {
      this.edges[node1].push({ node: node2, weight: weight });
      this.edges[node2].push({ node: node1, weight: weight });
   }

   addDirectedEdge(node1, node2, weight = 1) {
      this.edges[node1].push({ node: node2, weight: weight });
   }

   // addEdge(node1, node2) {
      //   this.edges[node1].push(node2);
      //   this.edges[node2].push(node1);
   // }

   // addDirectedEdge(node1, node2) {
      //   this.edges[node1].push(node2);
   // }

   display() {
      let graph = "";
      this.nodes.forEach(node => {
         graph += node + "->" + this.edges[node].map(n => n.node).join(", ") + "\n";
      });
      console.log(graph);
   }







djikstraAlgorithm(startNode) {
    let distances = {};

    // Stores the reference to previous nodes
    let prev = {};
    let pq = new PriorityQueue(this.nodes.length * this.nodes.length);

    // Set distances to all nodes to be infinite except startNode
    distances[startNode] = 0;
    pq.enqueue(startNode, 0);

    this.nodes.forEach(node => {
       if (node !== startNode) distances[node] = Infinity;
       prev[node] = null;
    });

    while (!pq.isEmpty()) {
       let minNode = pq.dequeue();
       let currNode = minNode.data;
       let weight = minNode.priority;

       this.edges[currNode].forEach(neighbor => {
          let alt = distances[currNode] + neighbor.weight;
          if (alt < distances[neighbor.node]) {
             distances[neighbor.node] = alt;
             prev[neighbor.node] = currNode;
             pq.enqueue(neighbor.node, distances[neighbor.node]);
          }
       });
    }
    return distances;
    
 }

}

   let g = new Graph();
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
 
  
 console.log(g.display());
   console.log(startingPnt);
   console.log(g.djikstraAlgorithm(startingPnt));
   results=g.djikstraAlgorithm(startingPnt);
  // results.forEach()
   
   for (let key in results) {
      if (results.hasOwnProperty(key) && (key!="A")&& (key!="B")&& (key!="C")&& (key!="D")&& (key!="E")&& (key!="F")&& (key!="G")) {
         value = results[key];
         console.log(key, value);
          document.getElementById(key).innerHTML=value;
          document.getElementById(key).style.borderColor= "white";
          document.getElementById(key).style.borderWidth="5px";
      }
   }
   
   PriorityQueue.prototype.Element = class {
      constructor(data, priority) {
         this.data = data;
         this.priority = priority;
      }
   };

}





function counts(point){
   locValue={"AB":"Administartive Block","SG":"Service Gate","BB":"Bio Block","MBA":"MBA College","GND":"Ground","AUD":"Auditorium","DB":"Decinnial Block","CHU":"Church","GH":"Girls Hostel","KC":"Knowledge Centre","BH":"Boys Hostel","MG":"Main Gate","CAN":"Canteen"};
   count=count+1;
   console.log(count);
   if(count==1){
      document.getElementById("second").innerHTML="Please select the second location";
      document.getElementById("info").innerHTML="These are the distances to all the locations from the "+locValue[point]+"!! ";
      he(point);
      startpnt=point;
   }
   if(count==2){

      tri(startpnt ,point);
   }
   
}






function resets(){
   count=0;
   startpnt="";
  document.getElementById("lists").innerHTML="";
  document.getElementById("second").innerHTML="Plaese select another location!";
     for (let key in results) {
      if (results.hasOwnProperty(key) && (key!="A")&& (key!="B")&& (key!="C")&& (key!="D")&& (key!="E")&& (key!="F")&& (key!="G")) {
         let value = results[key];
         console.log(key, value);
          document.getElementById(key).innerHTML=0;
          document.getElementById(key).style.borderColor= "blue";
          document.getElementById(key).style.borderWidth="2px";
          document.getElementById(key).style.background="#555"
          document.getElementById(key).style.opacity="1";
         document.getElementById(key).style.transition="border-color  3s,opacity  3s,background  3s";
		
      }
   }
   document.getElementById("A").style.visibility="hidden";
   document.getElementById("B").style.visibility="hidden";
   document.getElementById("C").style.visibility="hidden";
   document.getElementById("D").style.visibility="hidden";
   document.getElementById("E").style.visibility="hidden";
   document.getElementById("F").style.visibility="hidden";
   document.getElementById("G").style.visibility="hidden";
   
}



var i = 0;
var txt = 'coderZ Welcomes u to Route Finder!!'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
   
   window.onload = function() {
       window.setTimeout(
           function() { window.scrollTo(0,0); },
           100
       );
   };
  
  if (i < txt.length) {
    document.getElementById("demoss").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}