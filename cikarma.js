function cikar() {
    if (parseInt(sayi1.value) < parseInt(sayi2.value))
	alert("çıkarma işlemi için birinci sayının ikinci sayıdan büyük olması gerekiyor!");
    else
        sonuc.innerHTML = parseInt(sayi1.value) - parseInt(sayi2.value);
}
