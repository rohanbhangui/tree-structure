var arr = [
  {id: "1", parent: "", children: []},
  {id: "2", parent: "", children: []},
  {id: "3", parent: "1", children: []},
  {id: "4", parent: "2", children: []},
  {id: "5", parent: "2", children: []},
  {id: "6", parent: "3", children: []},
  {id: "7", parent: "3", children: []},
  {id: "8", parent: "3", children: []},
  {id: "9", parent: "5", children: []},
  {id: "10", parent: "5", children: []},
  {id: "11", parent: "7", children: []},
  {id: "12", parent: "8", children: []},
  {id: "13", parent: "8", children: []},
];

var tree = [];
var root = {id:"root", children:[]};

function find(haystack, needle) {
  if (haystack.id === needle) return haystack;
  for (var i in haystack.children) {
    var result = find(haystack.children[i], needle);
    if (result) return result;
  }
  return null;
}

$(document).ready(function () {

  for(var item in arr)
  {
    console.log();
    if(arr[item]["parent"] == "")
    {
      root["children"].push(arr[item]);
    }
    else
    {
      var currentObj = find(root, arr[item]["parent"]);
      if(currentObj != null)
      {
        currentObj["children"].push(arr[item]);
      }
      else
      {
        root["children"].push(arr[item]);
      }
    }
  }

  console.log(root);

});