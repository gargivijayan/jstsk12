var z = 0; //initialize z
var j = 0; // initialize j

// one
var g = 10;
function one() { 
    var a = 1
    z = z + a
    document.getElementById("stockminus").textContent = z
    g = g - 1;
    console.log(g);
    document.getElementById("stock1").textContent = g
    if (g < 0) {
        alert("Out of Stock")
    }
    S1 = 60
    j = j + S1;
    document.getElementById("cash").textContent = j
    localStorage.setItem("cart", z)
    document.getElementById("stockminus").textContent = localStorage.getItem("cart")
    var e1 = document.getElementById("cash").textContent
    localStorage.setItem("amount", e1)
}

// two
var p = 13
function two() {
    var b = 1
    z = z + b
    document.getElementById("stockminus").textContent = z
    p = p - 1;
    document.getElementById("stock2").textContent = p
    if (p < 0) {
        alert("Out of Stock")
    }
    s2 = 20
    j = j + s2;
    console.log(j);
    document.getElementById("cash").textContent = j
    localStorage.setItem("cart", z)
    document.getElementById("stockminus").textContent = localStorage.getItem("cart")
    var e2 = document.getElementById("cash").textContent
    localStorage.setItem("amount", e2)
}

// three
var n = 18
function three() {
    var c = 1
    z = z + c
    document.getElementById("stockminus").textContent = z
    n = n - 1;
    document.getElementById("stock3").textContent = n
    if (n < 0) {
        alert("Out of Stock")
    }
    s3 = 35
    j = j + s3;
    console.log(j);
    document.getElementById("cash").textContent = j
    localStorage.setItem("cart", z)
    document.getElementById("stockminus").textContent = localStorage.getItem("cart")
     var e3 = document.getElementById("cash").textContent
    localStorage.setItem("amount", e3)

}
// four
var s = 3
function four() {
    var c = 1
    z = z + c
    s = s - 1;
    document.getElementById("stock4").textContent = s
    if (s < 0) {
        alert("Out of Stock")
    }
    s4 = 65
    j = j + s4;
    console.log(j);
    document.getElementById("cash").textContent = j
    localStorage.setItem("cart", z)
    document.getElementById("stockminus").textContent = localStorage.getItem("cart")
    var e4 = document.getElementById("cash").textContent
    localStorage.setItem("amount", e4)

}

// five
var t = 6
function five() {
    var c = 1
    z = z + c
    document.getElementById("stockminus").textContent = z
    t = t - 1;
    document.getElementById("stock5").textContent = t
    if (t < 0) {
        alert("Out of Stock")
    }
    s5 = 20
    j = j + s5;
    console.log(j);
    document.getElementById("cash").textContent = j
    localStorage.setItem("cart", z)
    document.getElementById("stockminus").textContent = localStorage.getItem("cart")
    var e5 = document.getElementById("cash").textContent
    localStorage.setItem("amount", e5)
}

// six
var u = 5
function six() {
    var c = 1
    z = z + c
    document.getElementById("stockminus").textContent = z
    u = u - 1;
    document.getElementById("stock6").textContent = u
    if (u < 0) {
        alert("Out of Stock")
    }
    s6 = 40
    j = j + s6;
    console.log(j);
    document.getElementById("cash").textContent = j
    localStorage.setItem("cart", z)
    document.getElementById("stockminus").textContent = localStorage.getItem("cart")
    var e6 = document.getElementById("cash").textContent
    localStorage.setItem("amount", e6)
}

// seven
var v = 7
function seven() {
    var c = 1
    z = z + c
    document.getElementById("stockminus").textContent = z
    v = v - 1;
    document.getElementById("stock7").textContent = v
    if (v < 0) {
        alert("Out of Stock")
    }
    s7 = 80
    j = j + s7;
    console.log(j);
    document.getElementById("cash").textContent = j
    localStorage.setItem("cart", z)
    document.getElementById("stockminus").textContent = localStorage.getItem("cart")
    var e7 = document.getElementById("cash").textContent
    localStorage.setItem("amount", e7)
}

// eight
var w = 16
function eight() {
    var c = 1
    z = z + c
    document.getElementById("stockminus").textContent = z
    w = w - 1;
    document.getElementById("stock8").textContent = w
    if (w < 0) {
        alert("Out of Stock")
    }
    s8 = 50
    j = j + s8;
    console.log(j);
    document.getElementById("cash").textContent = j
    localStorage.setItem("cart", z)
    document.getElementById("stockminus").textContent = localStorage.getItem("cart")

    var e8 = document.getElementById("cash").textContent
    localStorage.setItem("amount", e8)

}

//clear
function clear() {
    document.getElementById("cash").textContent = ""

}
document.getElementById("remove").addEventListener('click', function () {
    var t1 = document.getElementById("cash")
    t1.innerHTML = ""
    z = 0
    j = 0
    localStorage.removeItem("cash", t1)

    var t2 = document.getElementById("stockminus")
    t2.innerHTML = ""
    localStorage.removeItem("stockminus", t2)
    localStorage.clear()
})

var x = localStorage.getItem("amount");
console.log(x);

document.getElementById("cash").textContent = x

var y = localStorage.getItem("cart")
document.getElementById("stockminus").textContent = y




