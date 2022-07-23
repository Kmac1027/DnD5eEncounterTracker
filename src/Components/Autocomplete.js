
import { Button } from 'react-bootstrap';
import "../styles/autocomplete.css";
import React from 'react';
import { useEffect, useRef, useState } from 'react';
function Autocomplete({ monsterButtons, setMonsterButtons, isLoading }) {
    const inputRef = useRef(null);
    var monsterNameArray = [];

    useEffect(() => {
        async function getMonsterName() {
            const response1 = await fetch(`https://api.open5e.com/monsters/?page=1`);
            let data1 = await response1.json();
            for (let i = 0; i <= data1.results.length; i++) {
                if (data1.results[i]) {
                    monsterNameArray.push(data1.results[i].name);
                }
            }
            const response2 = await fetch(`https://api.open5e.com/monsters/?page=2`);
            let data2 = await response2.json();
            for (let i = 0; i <= data2.results.length; i++) {
                if (data2.results[i]) {
                    monsterNameArray.push(data2.results[i].name);
                }
            }
            const response3 = await fetch(`https://api.open5e.com/monsters/?page=3`);
            let data3 = await response3.json();
            for (let i = 0; i <= data3.results.length; i++) {
                if (data3.results[i]) {
                    monsterNameArray.push(data3.results[i].name);
                }
            }
            const response4 = await fetch(`https://api.open5e.com/monsters/?page=4`);
            let data4 = await response4.json();
            for (let i = 0; i <= data4.results.length; i++) {
                if (data4.results[i]) {
                    monsterNameArray.push(data4.results[i].name);
                }
            }
            const response5 = await fetch(`https://api.open5e.com/monsters/?page=5`);
            let data5 = await response5.json();
            for (let i = 0; i <= data5.results.length; i++) {
                if (data5.results[i]) {
                    monsterNameArray.push(data5.results[i].name);
                }
            }
            const response6 = await fetch(`https://api.open5e.com/monsters/?page=6`);
            let data6 = await response6.json();
            for (let i = 0; i <= data6.results.length; i++) {
                if (data6.results[i]) {
                    monsterNameArray.push(data6.results[i].name);
                }
            }
            const response7 = await fetch(`https://api.open5e.com/monsters/?page=7`);
            let data7 = await response7.json();
            for (let i = 0; i <= data7.results.length; i++) {
                if (data7.results[i]) {
                    monsterNameArray.push(data7.results[i].name);
                }
            }
            const response8 = await fetch(`https://api.open5e.com/monsters/?page=8`);
            let data8 = await response8.json();
            for (let i = 0; i <= data8.results.length; i++) {
                if (data8.results[i]) {
                    monsterNameArray.push(data8.results[i].name);
                }
            }
            const response9 = await fetch(`https://api.open5e.com/monsters/?page=9`);
            let data9 = await response9.json();
            for (let i = 0; i <= data9.results.length; i++) {
                if (data9.results[i]) {
                    monsterNameArray.push(data9.results[i].name);
                }
            }
            const response10 = await fetch(`https://api.open5e.com/monsters/?page=10`);
            let data10 = await response10.json();
            for (let i = 0; i <= data10.results.length; i++) {
                if (data10.results[i]) {
                    monsterNameArray.push(data10.results[i].name);
                }
            }
            const response11 = await fetch(`https://api.open5e.com/monsters/?page=11`);
            let data11 = await response11.json();
            for (let i = 0; i <= data11.results.length; i++) {
                if (data11.results[i]) {
                    monsterNameArray.push(data11.results[i].name);
                }
            }
            const response12 = await fetch(`https://api.open5e.com/monsters/?page=12`);
            let data12 = await response12.json();
            for (let i = 0; i <= data12.results.length; i++) {
                if (data12.results[i]) {
                    monsterNameArray.push(data12.results[i].name);
                }
            }
            const response13 = await fetch(`https://api.open5e.com/monsters/?page=13`);
            let data13 = await response13.json();
            for (let i = 0; i <= data13.results.length; i++) {
                if (data13.results[i]) {
                    monsterNameArray.push(data13.results[i].name);
                }
            }
            const response14 = await fetch(`https://api.open5e.com/monsters/?page=14`);
            let data14 = await response14.json();
            for (let i = 0; i <= data14.results.length; i++) {
                if (data14.results[i]) {
                    monsterNameArray.push(data14.results[i].name);
                }
            }
            const response15 = await fetch(`https://api.open5e.com/monsters/?page=15`);
            let data15 = await response15.json();
            for (let i = 0; i <= data15.results.length; i++) {
                if (data15.results[i]) {
                    monsterNameArray.push(data15.results[i].name);
                }
            }
            const response16 = await fetch(`https://api.open5e.com/monsters/?page=16`);
            let data16 = await response16.json();
            for (let i = 0; i <= data16.results.length; i++) {
                if (data16.results[i]) {
                    monsterNameArray.push(data16.results[i].name);
                }
            }
            const response17 = await fetch(`https://api.open5e.com/monsters/?page=17`);
            let data17 = await response17.json();
            for (let i = 0; i <= data17.results.length; i++) {
                if (data17.results[i]) {
                    monsterNameArray.push(data17.results[i].name);
                }
            }
            const response18 = await fetch(`https://api.open5e.com/monsters/?page=18`);
            let data18 = await response18.json();
            for (let i = 0; i <= data18.results.length; i++) {
                if (data18.results[i]) {
                    monsterNameArray.push(data18.results[i].name);
                }
            }
            const response19 = await fetch(`https://api.open5e.com/monsters/?page=19`);
            let data19 = await response19.json();
            for (let i = 0; i <= data19.results.length; i++) {
                if (data19.results[i]) {
                    monsterNameArray.push(data19.results[i].name);
                }
            }
            const response20 = await fetch(`https://api.open5e.com/monsters/?page=20`);
            let data20 = await response20.json();
            for (let i = 0; i <= data20.results.length; i++) {
                if (data20.results[i]) {
                    monsterNameArray.push(data20.results[i].name);
                }
            }
            const response21 = await fetch(`https://api.open5e.com/monsters/?page=21`);
            let data21 = await response21.json();
            for (let i = 0; i <= data21.results.length; i++) {
                if (data21.results[i]) {
                    monsterNameArray.push(data21.results[i].name);
                }
            }
            const response22 = await fetch(`https://api.open5e.com/monsters/?page=22`);
            let data22 = await response22.json();
            for (let i = 0; i <= data22.results.length; i++) {
                if (data22.results[i]) {
                    monsterNameArray.push(data22.results[i].name);
                }
            }
        };
        getMonsterName();
    }, []);




    function addMonster() {
        if (inputRef.current.value === '') {
            alert('No Monster Entered in Input Box');
        } else {
            // console.log(inputRef.current.value);
            setMonsterButtons((monsterButtons) => [...monsterButtons, inputRef.current.value]);
        }
    }


    useEffect(() => {
        //this function creates the autocomplete functionality on the page
        function autocomplete(inp, arr) {
            /*the autocomplete function takes two arguments,
            the text field element and an array of possible autocompleted values:*/
            var currentFocus;
            /*execute a function when someone writes in the text field:*/
            inp.addEventListener("input", function (e) {
                var a, b, i, val = this.value;
                /*close any already open lists of autocompleted values*/
                closeAllLists();
                if (!val) { return false; }
                currentFocus = -1;
                /*create a DIV element that will contain the items (values):*/
                a = document.createElement("DIV");
                a.setAttribute("id", this.id + "autocomplete-list");
                a.setAttribute("class", "autocomplete-items");
                /*append the DIV element as a child of the autocomplete container:*/
                this.parentNode.appendChild(a);
                /*for each item in the array...*/
                for (i = 0; i < arr.length; i++) {
                    /*check if the item starts with the same letters as the text field value:*/
                    if (arr[i].substr(0, val.length).toUpperCase() === val.toUpperCase()) {
                        /*create a DIV element for each matching element:*/
                        b = document.createElement("DIV");
                        /*make the matching letters bold:*/
                        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                        b.innerHTML += arr[i].substr(val.length);
                        /*insert a input field that will hold the current array item's value:*/
                        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                        /*execute a function when someone clicks on the item value (DIV element):*/
                        b.addEventListener("click", function (e) {
                            /*insert the value for the autocomplete text field:*/
                            inp.value = this.getElementsByTagName("input")[0].value;
                            /*close the list of autocompleted values,
                            (or any other open lists of autocompleted values:*/
                            closeAllLists();
                        });
                        a.appendChild(b);
                    }
                }
            });
            /*execute a function presses a key on the keyboard:*/
            inp.addEventListener("keydown", function (e) {
                var x = document.getElementById(this.id + "autocomplete-list");
                if (x) x = x.getElementsByTagName("div");
                if (e.keyCode === 40) {
                    /*If the arrow DOWN key is pressed,
                    increase the currentFocus variable:*/
                    currentFocus++;
                    /*and make the current item more visible:*/
                    addActive(x);
                } else if (e.keyCode === 38) { //up
                    /*If the arrow UP key is pressed,
                    decrease the currentFocus variable:*/
                    currentFocus--;
                    /*and and make the current item more visible:*/
                    addActive(x);
                } else if (e.keyCode === 13) {
                    /*If the ENTER key is pressed, prevent the form from being submitted,*/
                    e.preventDefault();
                    if (currentFocus > -1) {
                        /*and simulate a click on the "active" item:*/
                        if (x) x[currentFocus].click();
                    }
                }
            });
            function addActive(x) {
                /*a function to classify an item as "active":*/
                if (!x) return false;
                /*start by removing the "active" class on all items:*/
                removeActive(x);
                if (currentFocus >= x.length) currentFocus = 0;
                if (currentFocus < 0) currentFocus = (x.length - 1);
                /*add class "autocomplete-active":*/
                x[currentFocus].classList.add("autocomplete-active");
            }
            function removeActive(x) {
                /*a function to remove the "active" class from all autocomplete items:*/
                for (var i = 0; i < x.length; i++) {
                    x[i].classList.remove("autocomplete-active");
                }
            }
            function closeAllLists(elmnt) {
                /*close all autocomplete lists in the document,
                except the one passed as an argument:*/
                var x = document.getElementsByClassName("autocomplete-items");
                for (var i = 0; i < x.length; i++) {
                    if (elmnt !== x[i] && elmnt !== inp) {
                        x[i].parentNode.removeChild(x[i]);
                    }
                }
            }
            /*execute a function when someone clicks in the document:*/
            document.addEventListener("click", function (e) {
                closeAllLists(e.target);
            });
        }

        autocomplete(document.getElementById("myInput"), monsterNameArray);
    }, []);


    return (
        <div>
            <div id="centerform">
                <form id="form" >
                    <div className="autocomplete" style={{ width: '300px' }}>
                        <input ref={inputRef} id="myInput" type="text" name="mySpellList" ></input>
                    </div>
                    <Button disabled={isLoading} onClick={() => addMonster()} variant='dark' id="submit">Add to Stat Block</Button>
                </form>
            </div>
        </div >

    );
}

export default Autocomplete;