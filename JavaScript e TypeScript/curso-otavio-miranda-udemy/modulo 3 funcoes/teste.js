function contador(max) {
    if(max > 10) return;
    console.log(max);
    max++;
    contador(max);
}
contador(0);