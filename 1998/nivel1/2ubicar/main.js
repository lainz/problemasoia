(function () {
    function ordenar(a, b) {
        if (a % 2 == 0 && b % 2 != 0)
            return -1;
        if (a % 2 != 0 && b % 2 == 0)
            return 1;
        if (a % 2 == 0 && b % 2 == 0)
            return a - b;
        if (a % 3 == 0 && b % 3 != 0)
            return -1;
        if (a % 3 != 0 && b % 3 == 0)
            return 1;
        if (a % 3 == 0 && b % 3 == 0)
            return a - b;
        return a - b;
    }

    function programa() {
        let numeros = [17, 4, 27, 7, 9, 16, 1, 3];
        numeros.sort(ordenar);
        document.getElementById("salida").innerText = numeros.join(", ");
    }

    programa();
})();