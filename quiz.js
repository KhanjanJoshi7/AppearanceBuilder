
    let bmi,height,weight;
    let an = document.getElementById('q1');
    let sq = document.getElementById('sq');
    const gen = document.getElementsByClassName('gen');
    const pursue = document.getElementsByClassName('pursue');
    const prefer = document.getElementsByClassName('prefer');
    let q3val, q4val, q5val;

for (let i = 0; i < gen.length; i++)
{
    gen[i].addEventListener('click', () => {
        gen[i].style = "background:black;color:white;";
        for (let j = 0; j < gen.length; j++) {
            if (i != j) {
                if (gen[j].style.background == "black") {
                    gen[j].style = "background:transparent;color:black;";
                }
            }
            else {
                continue;
            }
        }
        q3val = gen[i].value;
        q3val = "" + `${q3val}`;
    });
}


for (let i = 0; i < pursue.length; i++) {
    pursue[i].addEventListener('click', () => {
        pursue[i].style = "background:black;color:white;";
        for (let j = 0; j < pursue.length; j++) {
            if (i != j) {
                if (pursue[j].style.background == "black") {
                    pursue[j].style = "background:transparent;color:black;";
                }
            }
            else {
                continue;
            }
        }
        
        q4val = pursue[i].value;
        q4val = "" + `${q4val}`;

    });
}
for (let i = 0; i < prefer.length; i++) {
    prefer[i].addEventListener('click', () => {
        prefer[i].style = "background:black;color:white;";
        for (let j = 0; j < prefer.length; j++) {
            if (i != j) {
                if (prefer[j].style.background == "black") {
                    prefer[j].style = "background:transparent;color:black;";
                }
            }
            else {
                continue;
            }
        }
        q5val = prefer[i].value;
        q5val = "" + `${q5val}`;

    });
}
        const opt = [];
        sq.addEventListener('click',()=>{
        document.getElementById('start').style.display = "none";
            document.getElementById('q1').style.display = "block";
            an.setAttribute('class', "anim");
            setTimeout(()=>{
        an.removeAttribute('class', 'anim');
            },5000);
        });
        let n1 = document.getElementById('n1');
        n1.addEventListener('click',()=>{
            if(document.getElementById('height').value == "")
            {
        alert("Please give input");
            }
            else{
        document.getElementById('q1').style.display = "none";
            document.getElementById('q2').style.display = "block";
            height = document.getElementById('height').value;
            let q = document.getElementById('q2');
            q.setAttribute('class', 'anim');
            setTimeout(() => {
        q.removeAttribute('class', 'anim');
            }, 5000);
            }
        });
        let n2 = document.getElementById('n2');
            n2.addEventListener('click', () => {
                if (document.getElementById('weight').value == "") {
        alert("Please give input");
                }
                else {
        weight = document.getElementById('weight').value;
                    bmi = weight/(height*0.01* height * 0.01)
                    bmi = bmi.toFixed(1);
                    opt.push("" + `${bmi}`);
                document.getElementById('q2').style.display = "none";
                document.getElementById('q3').style.display = "block";
                let q = document.getElementById('q3');
                q.setAttribute('class', 'anim');
                setTimeout(() => {
        q.removeAttribute('class', 'anim');
                }, 5000);
                }
            });

        let n3 = document.getElementById('n3');
        n3.addEventListener('click', () => {
        opt.push(q3val);
           document.getElementById('q3').style.display = "none";
            document.getElementById('q4').style.display = "block";
            let q = document.getElementById('q4');
            q.setAttribute('class', 'anim');
            setTimeout(() => {
        q.removeAttribute('class', 'anim');
            }, 5000);
        });
        let n4 = document.getElementById('n4');
            n4.addEventListener('click', () => {
        opt.push(q4val);
                document.getElementById('q4').style.display = "none";
                document.getElementById('q5').style.display = "block";
                let q = document.getElementById('q5');
                q.setAttribute('class', 'anim');
                setTimeout(() => {
        q.removeAttribute('class', 'anim');
                }, 5000);
            });

        let p1 = document.getElementById('p2');
            p1.addEventListener('click', () => {
        document.getElementById('q2').style.display = "none";
                document.getElementById('q1').style.display = "block";
                let q = document.getElementById('q1');
                q.setAttribute('class', 'anim');
                setTimeout(() => {
        q.removeAttribute('class', 'anim');
                }, 5000);
            });
        let p2 = document.getElementById('p3');
            p2.addEventListener('click', () => {
        document.getElementById('q3').style.display = "none";
                document.getElementById('q2').style.display = "block";
                let q = document.getElementById('q2');
                q.setAttribute('class', 'anim');
                setTimeout(() => {
        q.removeAttribute('class', 'anim');
                }, 5000);
            });
        let p3 = document.getElementById('p4');
            p3.addEventListener('click', () => {
        document.getElementById('q4').style.display = "none";
                document.getElementById('q3').style.display = "block";
                let q = document.getElementById('q3');
                q.setAttribute('class', 'anim');
                setTimeout(() => {
        q.removeAttribute('class', 'anim');
                }, 5000);
            });
        let p4 = document.getElementById('p5');
            p4.addEventListener('click', () => {
        document.getElementById('q5').style.display = "none";
                document.getElementById('q4').style.display = "block";
                let q = document.getElementById('q4');
                q.setAttribute('class', 'anim');
                setTimeout(() => {
        q.removeAttribute('class', 'anim');
                }, 5000);
            });

        let f1 = document.getElementById('f1');
        f1.addEventListener('click',()=>{
            opt.push(q5val); 
            let obj = {
                "bmi": opt[0],
                "q3": opt[1],
                "q4": opt[2],
                "q5": opt[3]
            }
            obj = JSON.stringify(obj);
            localStorage.setItem("quiz", obj);
            window.location.href = "./index.html";
        })