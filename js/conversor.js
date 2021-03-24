function converte(){
    const valorDolar = document.getElementById("valor").value;
    const Transformavalor =  parseFloat(valorDolar);
    const valorReal =Transformavalor *5.50;
    const DolarReal = valorReal.toFixed(2);
    
    alert("O valor em dolar é:"+DolarReal)
  
    var res = document.getElementById("resultado")
    res.innerHTML = ` O valor convertido é ${DolarReal}`

   
}