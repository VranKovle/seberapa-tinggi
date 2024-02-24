function checkHeight() {
    var height = parseFloat(document.getElementById("heightInput").value);
    var resultElement = document.getElementById("result");
    
    if (height >= 100 && height < 120) {
      resultElement.textContent = "Cebolnya awokawok";
    } else if (height >= 120 && height < 140) {
      resultElement.textContent = "Aduhai cebolnya";
    } else if (height >= 140 && height < 160) {
      resultElement.textContent = "Lu cewe?";
    } else if (height >= 160 && height <= 180) {
      resultElement.textContent = "kita friend";
    } else if (height >= 180 && height <= 300) {
      resultElement.textContent = "Ini bule atau enderman?";
    }
    else {
      resultElement.textContent = "unvalid , harap masukan angka diatas 100 dan dibawah 300";
    }
  }