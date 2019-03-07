class Palindromo {
    constructor(palabra) {
        this.palabra = palabra;
    }
    esPalindromo(palabra) {
        if (palabra.length < 3)
            return false;
        return palabra.split("").reverse().join("") == palabra;
    }
    esDPalindromo(palabra) {
        return this.esPalindromo(palabra.slice(0, palabra.length - 1));
    }
    esIPalindromo(palabra) {
        return this.esPalindromo(palabra.slice(1));
    }
    test() {
        document.getElementById("palabra").innerText = this.palabra;
        let salida = [];
        for (let i = 0; i <= this.palabra.length; i++) {
            for (let j = 0; j <= this.palabra.length; j++) {
                let tmp = this.palabra.slice(i, j);
                if (tmp == "" || tmp.length < 3)
                    continue;
                let out = tmp;
                if (this.esPalindromo(tmp))
                    out += " palindromo"
                if (this.esDPalindromo(tmp))
                    out += " d-palindromo"
                if (this.esIPalindromo(tmp))
                    out += " i-palindromo"
                if (tmp != out)
                    salida.push(out);
            }
        }
        if (salida.length > 0) {
            document.getElementById("salida").innerHTML = salida.join("</br>");
        } else {
            document.getElementById("salida").innerHTML = 'No se puede.';
        }
    }
}

let palabra = new URL(window.location.href).searchParams.get("palabra");
if (!palabra)
    palabra = "anana"
let palindromo = new Palindromo(palabra).test();
