red=0
green=0
blue=0
quark=1
gluon=0
rggluon=0
gbgluon=0
brgluon=0
gluongain=0

function assignall(i) {
    if(i==1) {
        red+=quark
        }
    else if(i==2) {
        green+=quark
        }
    else if(i==3) {
        blue+=quark
        }
    else if(i==4) {
        red+=(1/3)*quark
        green+=(1/3)*quark
        blue+=(1/3)*quark
        }
    quark=0
    render()
}

function respc() {
    quark+=red+green+blue
    red=0    
    green=0
    blue=0
    render()
}

function render() {
    document.getElementById("n").innerText=red
    document.getElementById("n2").innerText=green
    document.getElementById("n3").innerText=blue
    document.getElementById("nq").innerText=quark
    gluongain=((red/4)+(green/4))+((green/4)+(blue/4))+((blue/4)+(red/4))
    document.getElementById("gluongain").innerText=gluongain
    document.getElementById("gluon").innerText=gluon
document.getElementById("rggluon").innerText=rggluon
document.getElementById("gbgluon").innerText=rggluon
document.getElementById("brgluon").innerText=rggluon
}

function tick(i) {
    if (i=1) {
        quark+=(red/3)+(green/3)+(blue/3)
        render()
        } else if (i=2) {
            red+=rggluon+brgluon
            green+=rggluon+gbgluon
            blue+=gbgluon+brgluon
        }
    if (i>1) {
    tick(i-1)
    }
}

function reset(i) {
    if (i=1) {
        if (gluongain>=1) {
            gluon+=gluongain
            respc()
            quark=1
            render()
            }
    }
}
