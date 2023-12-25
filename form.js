let RightSide = document.getElementById("rightside")

let RightSide1 = document.getElementById("rightside1")
let RightSide2 = document.getElementById("rightside2")
let RightSide3 = document.getElementById("rightside3")
let RightSide4 = document.getElementById("rightside4")
let RightSide5 = document.getElementById("rightside5")

let Sidebarnum1 = document.getElementById("sidebarnum1")
let Sidebarnum2 = document.getElementById("sidebarnum2")
let Sidebarnum3 = document.getElementById("sidebarnum3")
let Sidebarnum4 = document.getElementById("sidebarnum4")

let ChangeBtn = document.getElementById("changebtn")
let Subs = document.getElementById("subs")

let Substext = "yr"

let Yearlysubs = true

let Totalprice = document.getElementById("totalprice")

let Oneprice = 10
let Twoprice = 20
let Threeprice = 20


let Planprice = 9



//step 1 starts here


let NameInput = document.getElementById("nameinput")
let EmailInput = document.getElementById("emailinput")
let NumberInput = document.getElementById("numberinput")

let NextStep1 = document.getElementById("nextstep1")

NextStep1.addEventListener("click", firststeppassed)

function firststeppassed() {

    Namecheck()
    Emailcheck()
    Numbercheck()

    if (NameInput.value !== "" && EmailInput.value.includes("@") && EmailInput.value.includes(".com") && NumberInput.value !== "") {

        RightSide1.style.display = "none"
        RightSide2.style.display = "flex"

        Sidebarnum1.style.backgroundColor = "transparent"
        Sidebarnum1.style.color = "white"

        Sidebarnum2.style.backgroundColor = "white"
        Sidebarnum2.style.color = "black"



    }
}

function Namecheck() {

    if (NameInput.value !== "") {
        document.getElementById("fieldrequired1").style.visibility = "hidden"
        console.log("NameInput Passed");
    } else {
        document.getElementById("fieldrequired1").textContent = "This field is required"
        document.getElementById("fieldrequired1").style.visibility = "visible"
        console.log("NameInput Failed")
    }
}

function Emailcheck() {

    if (EmailInput.value == "") {

        document.getElementById("fieldrequired2").textContent = "This field is required"
        document.getElementById("fieldrequired2").style.visibility = "visible"

        console.log("EmailInput Failed")

    }

    else if (!EmailInput.value.includes("@") && !EmailInput.value.includes(".com")) {

        document.getElementById("fieldrequired2").textContent = "Use a valid Email Address"
        document.getElementById("fieldrequired2").style.visibility = "visible"
        console.log("EmailInput Half-Passed")
    }

    else {
        document.getElementById("fieldrequired2").style.visibility = "hidden"
        console.log("EmailInput Passed")
    }
}

function Numbercheck() {

    if (NumberInput.value !== "") {
        document.getElementById("fieldrequired3").style.visibility = "hidden"
        console.log("NumberInput Passed");
    } else {
        document.getElementById("fieldrequired3").textContent = "This field is required"
        document.getElementById("fieldrequired3").style.visibility = "visible"
        console.log("NumberInput Failed");
    }
}


//step 1 ends here

//step 2 starts here

let OnOffBtn = document.getElementById("onoffbtn")

OnOffBtn.addEventListener("click", monthly)

function monthly() {

    Yearlysubs = false
    OnOffBtn.style.transform = "translateX(-28px)"
    OnOffBtn.removeEventListener("click", monthly)
    OnOffBtn.addEventListener("click", yearly)

    document.getElementById("monthly").style.color = "hsl(213, 96%, 18%)"
    document.getElementById("yearly").style.color = "grey"

    let freeelements = document.querySelectorAll("#free");
    for (let i = 0; i < freeelements.length; i++) {
        freeelements[i].style.display = "none"
    }
}

function yearly() {
    Yearlysubs = true
    OnOffBtn.style.transform = "translateX(0)"
    OnOffBtn.addEventListener("click", monthly)
    OnOffBtn.removeEventListener("click", yearly)

    document.getElementById("yearly").style.color = "hsl(213, 96%, 18%)"
    document.getElementById("monthly").style.color = "grey"

    let freeelements = document.querySelectorAll("#free");
    for (let i = 0; i < freeelements.length; i++) {
        freeelements[i].style.display = "block"
    }
}

let Plan1 = document.getElementById("plan1")
let Plan2 = document.getElementById("plan2")
let Plan3 = document.getElementById("plan3")

Plan1.addEventListener("click", function() {
    Plan1.style.backgroundColor = "hsl(231, 100%, 99%)"
    Plan2.style.backgroundColor = "white"
    Plan3.style.backgroundColor = "white"

    Plan1.style.borderColor = "hsl(243, 100%, 62%)"
    Plan2.style.borderColor = "hsl(229, 24%, 87%)"
    Plan3.style.borderColor = "hsl(229, 24%, 87%)"

    Planprice = 9
})

Plan2.addEventListener("click", function() {
    Plan2.style.backgroundColor = "hsl(231, 100%, 99%)"
    Plan1.style.backgroundColor = "white"
    Plan3.style.backgroundColor = "white"

    Plan2.style.borderColor = "hsl(243, 100%, 62%)"
    Plan1.style.borderColor = "hsl(229, 24%, 87%)"
    Plan3.style.borderColor = "hsl(229, 24%, 87%)"

    Planprice = 12
})

Plan3.addEventListener("click", function() {
    Plan3.style.backgroundColor = "hsl(231, 100%, 99%)"
    Plan1.style.backgroundColor = "white"
    Plan2.style.backgroundColor = "white"

    Plan3.style.borderColor = "hsl(243, 100%, 62%)"
    Plan1.style.borderColor = "hsl(229, 24%, 87%)"
    Plan2.style.borderColor = "hsl(229, 24%, 87%)"

    Planprice = 15
})

let NextStep2 = document.getElementById("nextstep2")

NextStep2.addEventListener("click", secondsteppassed)

let GoBack1 = document.getElementById("goback1")

GoBack1.addEventListener("click", function() {
    RightSide1.style.display = "flex"
    RightSide2.style.display = "none"

    Sidebarnum1.style.backgroundColor = "white"
    Sidebarnum1.style.color = "black"

    Sidebarnum2.style.backgroundColor = "transparent"
    Sidebarnum2.style.color = "white"
})

function secondsteppassed() {
    Sidebarnum2.style.backgroundColor = "transparent"
    Sidebarnum2.style.color = "white"

    Sidebarnum3.style.backgroundColor = "white"
    Sidebarnum3.style.color = "black"

    RightSide2.style.display = "none"
    RightSide3.style.display = "flex"

    let Addon13 = document.getElementById("addon13")
    let Addon23 = document.getElementById("addon23")
    let Addon33 = document.getElementById("addon33")

    if (Yearlysubs == true) {
        Addon13.textContent = "+10$/yr"
        Addon23.textContent = "+20$/yr"
        Addon33.textContent = "+20$/yr"
    } else {
        Addon13.textContent = "+1$/mo"
        Addon23.textContent = "+2$/mo"
        Addon33.textContent = "+2$/mo"
    }

}

///////////////


let OnlineService = true
let Largerstorage = true
let CustomizableProfile = false

let OnlineServicePrice = 10
let LargerstoragePrice = 20
let CustomizableProfilePrice = 0

let Checkbox1 = document.getElementById("checkbox1")
let Checkbox2 = document.getElementById("checkbox2")
let Checkbox3 = document.getElementById("checkbox3")

let Addon1 = document.getElementById("addon1")
let Addon2 = document.getElementById("addon2")
let Addon3 = document.getElementById("addon3")

Addon1.addEventListener("click", function() {
    if (Checkbox1.checked == true) {
        Addon1.style.backgroundColor = "white"
        Addon1.style.borderColor = "grey"
        Checkbox1.checked = false
        OnlineService = false
        OnlineServicePrice = 0
    } else {
        Addon1.style.backgroundColor = "hsl(217, 100%, 97%)"
        Addon1.style.borderColor = "blue"
        Checkbox1.checked = true
        OnlineService = true
        OnlineServicePrice = 10
    }
})

Addon2.addEventListener("click", function() {
    if (Checkbox2.checked == true) {
        Addon2.style.backgroundColor = "white"
        Addon2.style.borderColor = "grey"
        Checkbox2.checked = false
        Largerstorage = false
        LargerstoragePrice = 0
    } else {
        Addon2.style.backgroundColor = "hsl(217, 100%, 97%)"
        Addon2.style.borderColor = "blue"
        Checkbox2.checked = true
        Largerstorage = true
        LargerstoragePrice = 20
    }
})

Addon3.addEventListener("click", function() {
    if (Checkbox3.checked == true) {
        Addon3.style.backgroundColor = "white"
        Addon3.style.borderColor = "grey"
        Checkbox3.checked = false
        CustomizableProfile = false
        CustomizableProfilePrice = 0

    } else {
        Addon3.style.backgroundColor = "hsl(217, 100%, 97%)"
        Addon3.style.borderColor = "blue"
        Checkbox3.checked = true
        CustomizableProfile = true
        CustomizableProfilePrice = 20
    }
})

let NextStep3 = document.getElementById("nextstep3")

NextStep3.addEventListener("click", thirdsteppassed)

let GoBack2 = document.getElementById("goback2")

GoBack2.addEventListener("click", function() {
    RightSide2.style.display = "flex"
    RightSide3.style.display = "none"

    Sidebarnum3.style.backgroundColor = "transparent"
    Sidebarnum3.style.color = "white"

    Sidebarnum2.style.backgroundColor = "white"
    Sidebarnum2.style.color = "black"
})

function thirdsteppassed() {

    Sidebarnum3.style.backgroundColor = "transparent"
    Sidebarnum3.style.color = "white"

    Sidebarnum4.style.backgroundColor = "white"
    Sidebarnum4.style.color = "black"

    RightSide3.style.display = "none"
    RightSide4.style.display = "flex"

    if (Yearlysubs == true) {
        services()
        Substext = "yr"
        Regprice.textContent = `$${Planprice*10 }/${Substext}`
        Subs.textContent = "Yearly"
        Totalprice.textContent = `$${Planprice*10 + OnlineServicePrice + LargerstoragePrice + CustomizableProfilePrice}/${Substext}`

    } else {
        services()
        Substext = "mo"
        Regprice.textContent = `$${Planprice}/${Substext}`
        Subs.textContent = "Monthly"
        Totalprice.textContent = `$${Planprice + OnlineServicePrice/10 + LargerstoragePrice/10 + CustomizableProfilePrice/10}/${Substext}`

    }
}


///////////////////////






let Regprice = document.getElementById("regprice")

ChangeBtn.addEventListener("click", function() {
    if (Yearlysubs == true) {
        Yearlysubs = false
        Substext = "mo"
        Subs.textContent = "Monthly"
        Oneprice = 1
        Twoprice = 2
        services()
        Regprice.textContent = `$${Planprice}/${Substext}`
        Totalprice.textContent = `$${Planprice + OnlineServicePrice/10 + LargerstoragePrice/10 + CustomizableProfilePrice/10}/${Substext}`

    } else {
        Yearlysubs = true
        Subs.textContent = "Yearly"
        Substext = "yr"
        Oneprice = 10
        Twoprice = 20
        services()
        Regprice.textContent = `$${Planprice*10}/${Substext}`
        Totalprice.textContent = `$${Planprice*10 + OnlineServicePrice + LargerstoragePrice + CustomizableProfilePrice}/${Substext}`

    }


})

function services() {

    document.getElementById("serviceprice").innerHTML = ""

    if (OnlineService == true) {
        if (Yearlysubs == true) {
            Substext = "yr"
            document.getElementById("serviceprice").innerHTML += `
                                <div>
                <p id="service">online service</p>
                <p id="price">+${OnlineServicePrice}$/${Substext}</p>
                </div>
                       `
        } else {
            Substext = "mo"
            document.getElementById("serviceprice").innerHTML += `
                                <div>
                <p id="service">online service</p>
                <p id="price">+${OnlineServicePrice/10}$/${Substext}</p>
                </div>
                       `
        }

    }

    if (Largerstorage == true) {
        if (Yearlysubs == true) {
            Substext = "yr"
            document.getElementById("serviceprice").innerHTML += `
                                <div>
                <p id="service">larger storage</p>
                <p id="price">+${LargerstoragePrice}$/${Substext}</p>
                </div>
                       `
        } else {
            Substext = "mo"
            document.getElementById("serviceprice").innerHTML += `
                                            <div>
                            <p id="service">larger storage</p>
                            <p id="price">+${LargerstoragePrice/10}$/${Substext}</p>
                            </div>
                                   `
        }

    }

    if (CustomizableProfile == true) {
        if (Yearlysubs == true) {
            Substext = "yr"
            document.getElementById("serviceprice").innerHTML += `
                                    <div>
                    <p id="service">customizable  profile</p>
                    <p id="price">+${CustomizableProfilePrice}$/${Substext}</p>
                    </div>
                           `
        } else {
            Substext = "mo"
            document.getElementById("serviceprice").innerHTML += `
                                    <div>
                    <p id="service">customizable  profile</p>
                    <p id="price">+${CustomizableProfilePrice/10}$/${Substext}</p>
                    </div>
                           `
        }
    }
}

let GoBack3 = document.getElementById("goback3")

GoBack3.addEventListener("click", function() {
    RightSide3.style.display = "flex"
    RightSide4.style.display = "none"

    Sidebarnum4.style.backgroundColor = "transparent"
    Sidebarnum4.style.color = "white"

    Sidebarnum3.style.backgroundColor = "white"
    Sidebarnum3.style.color = "black"
})

let NextStep4 = document.getElementById("nextstep4")

NextStep4.addEventListener("click", fourthsteppassed)

function fourthsteppassed(){
    RightSide4.style.display = "none"
    RightSide5.style.display = "flex"
}