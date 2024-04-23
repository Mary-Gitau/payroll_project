
let form = document.getElementById("myform")

form.addEventListener('submit', function (e) {
    // prevent the page from refreshing
    e.preventDefault()


    let basic_salary = Number(document.getElementById("basic_salary").value)

    let benefits = Number(document.getElementById("benefits").value)

    let gross_salary = calc_gross_salary(basic_salary, benefits)
    document.getElementById("gross_salary").innerHTML = gross_salary

    let NHIF = cal_nhif(gross_salary)
    document.getElementById("NHIF").innerHTML = NHIF


    let NSSF = calc_nssf(gross_salary)
    document.getElementById("NSSF").innerHTML = NSSF

    let NHDF = cal_nhdf(gross_salary)
    document.getElementById("NHDF").innerHTML = NHDF

    let Taxable_income = calc_taxable_income(gross_salary, NHDF, NSSF)
    console.log("taxable_income")
    document.getElementById("Taxable_income").innerHTML = Taxable_income

    let Final_Payee = calc_Final_payee(Taxable_income)
    document.getElementById("Final_Payee").innerHTML = Final_Payee

    let Net_pay = calc_net_pay(gross_salary, NHIF, NHDF, NSSF, Final_Payee)
    document.getElementById("Net_pay").innerHTML = Net_pay





















})




function calc_gross_salary(a, b) {
    let gross_salary = a + b

    return gross_salary
}



function cal_nhif(gross) {
    let nhif = 0

    let gross_salary = Number(basic_salary) + Number(benefits)

    if (gross >= 0 && gross <= 5999) {
        result = 150
    }
    else if (gross >= 6000 && gross <= 7999) {
        result = 300
    }
    else if (gross >= 8000 && gross <= 11999) {
        result = 400
    }
    else if (gross >= 12000 && gross <= 14999) {
        result = 500
    }
    else if (gross >= 15000 && gross <= 19000) {
        result = 600
    }
    else if (gross >= 20000 && gross <= 24999) {
        result = 750
    }
    else if (gross >= 25000 && gross <= 29999) {
        result = 850
    }
    else if (gross >= 30000 && gross <= 34999) {
        result = 900
    }
    else if (gross >= 35000 && gross <= 39999) {
        result = 950
    }
    else if (gross >= 40000 && gross <= 44999) {
        result = 1000
    }
    else if (gross >= 45000 && gross <= 49999) {
        result = 1100
    }
    else if (gross >= 50000 && gross <= 59999) {
        result = 1200
    }
    else if (gross >= 60000 && gross <= 69999) {
        result = 1300
    }
    else if (gross >= 70000 && gross <= 69999) {
        result = 1400
    }
    else if (gross >= 80000 && gross <= 77999) {
        result = 1500
    }
    else if (gross >= 90000 && gross <= 99999) {
        result = 1600
    }
    else {
        result = 1700
    }

    return result

}
let NHIF = cal_nhif(gross_salary)
console.log("NHIF", NHIF)

// number 16
// Continue with the program above, then use  the gross salary to find the NSSF.
// To find the Kenya NSSF Rate  using 6% of the Gross Salary. 
// BUT ONLY A MAXIMUM OF 18,000 Gross Salary CAN BE USED IN NSSF. 



function calc_nssf(y, rate = 0.06) {
    let nssf = 0
    if (y >= 0 && y <= 18000) {
        nssf = 0.06 * y

    }
    else {
        nssf = 1080
    }
    return nssf
}
let NSSF = calc_nssf(gross_salary)
console.log("NSSF", NSSF)

// number 17
// Continue with the same program and calculate an individual’s NHDF using:
//  i.e NHDF = gross_salary *  0.01



function cal_nhdf(x, rate = 0.01) {
    let nhdf = x * 0.01
    return nhdf

}
let NHDF = cal_nhdf(gross_salary)
console.log("NHDF", NHDF)

// number18

// Calculate the taxable income.
// i.e taxable_income = gross salary - (NSSF + NHDF)

function calc_taxable_income(a, b, c) {
    let Taxable_income = a - (b + c)
    return Taxable_income

}
let Taxable_income = calc_taxable_income(gross_salary, NHDF, NSSF)
console.log("Taxable Income", Taxable_income)


// number 19

// Continue with the same program and find the person's PAYEE using the taxable income above




function calc_Final_payee(tax) {
    let Final_Payee = 0

    let relief = 2400

    if (tax >= 0 && tax <= 24000) {
        Final_Payee = 0
    }
    else if (tax >= 24000 && tax <= 32333) {
        Final_Payee = (0.25 * (tax - 24000))
    }
    else if (tax >= 32333 && tax <= 500000) {
        Final_Payee = (0.25 * 8333) + (0.3 * (tax - 32333))
    }
    else if (tax <= 500000 && tax >= 800000) {
        Final_Payee = (0.25 * 8333) + (0.3 * (tax - 467667)) + ((tax - 500000) * 0.325)
    }
    else {
        // (tax <= 800000 && tax >= 1600000){
        Final_Payee =(0.25 * 8333) + (0.3 * 467667) + (300000 * 0.325) + (0.35 * (tax - 800000)) 
    }

    return Final_Payee
}
let Final_Payee = calc_Final_payee(Taxable_income)
console.log("payee", Final_Payee)

// number 20

// Continue with the same program and calculate an individual’s Net Salary using:
//  net_salary = gross_salary - (nhif + nhdf +  nssf + payee)

function calc_net_pay(a, b, c, d, e) {
    let net_pay = a - (b + c + d + e)

    return net_pay


}
let Net_pay = calc_net_pay(gross_salary, NHIF, NHDF, NSSF, Final_Payee)
console.log("Net pay", Net_pay)










