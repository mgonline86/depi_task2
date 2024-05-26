function getFormValues(form) {
    const formData = new FormData(form);
    const data = {};
    for (const [key, value] of formData) {
        data[key] = value;
    }
    return Object.values(data);
}

var allForms = [
    {
        id: "l1q1",
        func: (ns) => {
            const num1 = Number(ns[0]);
            const num2 = Number(ns[1]);
            if (num1 > num2) {
                return num1;
            } else {
                return num2;
            }
        }
    },
    {
        id: "l1q2",
        func: (ns) => {
            const num1 = Number(ns[0]);
            if (num1 > 0) {
                return "Positive";
            } else if (num1 < 0) {
                return "Negative";
            } else {
                return "Zero";
            }
        }
    },
    {
        id: "l2q1",
        func: (ns) => {
            const num1 = Number(ns[0]);
            if (num1 % 5 == 0 && num1 % 11 == 0) {
                return "Divisable by 5 & 11";
            } else {
                return "Not Divisable by 5 & 11";
            }
        }
    },
    {
        id: "l2q2",
        func: (ns) => {
            const num1 = Number(ns[0]);
            if (num1 % 2 == 0) {
                return "Even";
            } else {
                return "Odd";
            }
        }
    },
    {
        id: "l2q3",
        func: (ns) => {
            const lower = Number(ns[0]);
            const upper = Number(ns[1]);
            const num = Number(ns[2]);
            if (lower > upper) {
                return "Invalid Range";
            }
            if (num >= lower && num <= upper) {
                return "Yes, In Range";
            } else {
                return "No, Out of Range";
            }
        }
    },
    {
        id: "l3q1",
        func: (ns) => {
            const weight = Number(ns[0]);
            const height = Number(ns[1]);
            const BMI = weight / (height * height);
            if (BMI < 18.5) {
                return "Underweight";
            } else if (BMI >= 18.5 && BMI <= 24.9) {
                return "Normal Weight";
            } else {
                return "Overweight";
            }
        }
    },
    {
        id: "l3q4",
        func: (ns) => {
            const paid = Number(ns[0]);
            const tax = 1.1;  // 10% Tax
            let discount = 1;  // No Discount

            if (paid > 1000) {
                discount = 0.95;  // 5% Discount
            }

            const total = paid * tax * discount;
            return `
            <div class="receiptRow"><samp>Paid:</samp> <samp style="float:right;">${paid.toFixed(2)} L.E.</samp></div>
            <div class="receiptRow"><samp>Dicount:</samp> <samp style="float:right;">${((1 - discount) * 100).toFixed(2)} %</samp></div>
            <div class="receiptRow"><samp>Tax:</samp> <samp style="float:right;">${((tax - 1) * 100).toFixed(2)}%</samp></div>
            <hr style="border: 1px dashed"/>
            <div class="receiptRow"><samp>Total:</samp> <samp style="float:right;">${total.toFixed(2)} L.E.</div>
            `
        }
    },
    {
        id: "l3q5",
        func: (ns) => {
            const dogHumanAge = Number(ns[0]);

            if (dogHumanAge < 0) {
                return "Age must be positive number";
            }

            if (dogHumanAge <= 2) {
                return (dogHumanAge * 10.5).toFixed(2);
            } else {
                return (21 + (dogHumanAge - 2) * 4).toFixed(2);
            }
        }
    },
    {
        id: "l3q7",
        func: (ns) => {
            const num1 = Number(ns[0]);
            const operation = ns[1];
            const num2 = Number(ns[2]);
            
            if (operation === "+") {
                return num1 + num2;
            } else if (operation === "-") {
                return num1 - num2;
            } else if (operation === "x") {
                return num1 * num2;
            } else if (operation === "/") {
                return num1 / num2;
            }
        }
    }
]

allForms.forEach(form => {
    const { id, func } = form;

    const formEl = document.getElementById(id);
    const outputEl = formEl.querySelector('.output');
    formEl.addEventListener("submit", (e) => {
        e.preventDefault();
        const values = getFormValues(formEl);
        const result = func(values);
        outputEl.innerHTML = result;
        outputEl.classList.add("an-z-out-in");
        setTimeout(() => {
            outputEl.classList.remove("an-z-out-in");
        }, 1000);
    })
})