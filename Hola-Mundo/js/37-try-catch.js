'use strict'

try{ // significa prueba este codigo y si sale error ve al catch
    var year = 2025;
    alert(year);
    var vector = new Array(9999999999999);
} catch(error){
    console.log(error);
    alert('ha ocurrido un error en el codigo');
}