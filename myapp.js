    function myBtn() {
         var output = document.getElementById('output_image');
               try{
                      window.print(); 
                  }catch{
                      alert('error');
              }
            } 

function fullName(){
      let name = document.getElementById('name').value;
      let idName = document.getElementById('showname');
        idName.innerHTML = name;
  }
  function program(){
      let program = document.getElementById('program').value;
      let idProgram = document.getElementById('showprogram');
        idProgram.innerHTML = program;
  }
  function stdId(){
      let studentId = document.getElementById('stdid').value;
      let id= document.getElementById('showid');
        id.innerHTML = studentId;
  }


          function preview_image(event)
                  {
                      try{   var reader = new FileReader();
                      reader.onload = function()
                      {
                          var output = document.getElementById('output_image');
                          output.src = reader.result;
                          
                      }
                      reader.readAsDataURL(event.target.files[0]);
                      
                      console.log(reader); 
                         }catch{
                          alert('Image must be inserted');
                  }
                      
                  }
       
                
















