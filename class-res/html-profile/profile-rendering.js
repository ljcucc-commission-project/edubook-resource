(()=>{
  function postAreaExist(){
    var postArea = document.querySelector("#posts");
    if(postArea) return true;
    return false;
  }
  
  function addPsot(title, description){
    document.querySelector("#posts").innerHTML += 
    "<h3>" + title + "</h3>" + "<p>" + description + "</p>";
  }
  
  window.ljcucc = {
    addPost
  }
  
  console.log("%cPowered by ljcucc","color: rgba(0,0,0,.25);font-size: 60px;");
  console.log("%c","line-height: 200px;background: url('https://avatars2.githubusercontent.com/u/22980191?s=460&v=4'); padding:100px; background-size: 200px 200px; border-radius: 50%;")
})();
