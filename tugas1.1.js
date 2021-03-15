function ratarata() {
    A = parseFloat(document.getElementById("a").value);
    B = parseFloat(document.getElementById("b").value);
    C = parseFloat(document.getElementById("c").value);
  
    document.getElementById("rata_rata").innerHTML = (A + B + C) / 3;
  }
  
  function max() {
    A = parseFloat(document.getElementById("a").value);
    B = parseFloat(document.getElementById("b").value);
    C = parseFloat(document.getElementById("c").value);
  
    document.getElementById("maksimum").innerHTML = Math.max(A, B, C);
  }
  
  function min() {
    A = parseFloat(document.getElementById("a").value);
    B = parseFloat(document.getElementById("b").value);
    C = parseFloat(document.getElementById("c").value);
  
    document.getElementById("minimum").innerHTML = Math.min(A, B, C);
  }
  
  function median(values) {
  
      A = parseFloat(document.getElementById("a").value);
      B = parseFloat(document.getElementById("b").value);
      C = parseFloat(document.getElementById("c").value);
  
      var data = [A,B,C];
      var jumlah = data.length
  
      for(var i=0; i<jumlah-1; i++){
          for(var j=0; j<jumlah-1; j++){
            if(data[j+1]<data[j]){
              var temp=data[j];
              data[j]=data[j+1];
              data[j+1]=temp;
            }
          }
        }
      
      document.getElementById("median").innerHTML = data[1];   
  }
  
  
  function hitung(){
      ratarata() 
      max()
      min()
      median()
  }
  
  function hapus() {
      document.getElementById("a").value = "";
      document.getElementById("b").value = "";
      document.getElementById("c").value = "";
      location.reload()
  }