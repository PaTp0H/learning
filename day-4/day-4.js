// Exercises: Level 2
// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

const grade = parseInt(prompt('Write grade'))

switch (true) {
    case grade >= 80 && grade <= 100:
        console.log(`Your grade A`)
        break
    case grade >= 70 && grade <= 89:
        console.log(`Your grade B`)
        break
    case grade >= 60 && grade <= 69:
        console.log(`Your grade C`)
        break
    case grade >= 50 && grade <= 59:
        console.log(`Your grade D`)
        break
    case grade >= 0 && grade <= 49:
        console.log(`Your grade D`)
        break
    case grade > 100:
    default:
        console.log(`Ого ты машина`)
        break
}

// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

const season = prompt('Write a month').toLocaleLowerCase()

const autumn = ['september', 'october', 'november']
const winter = ['december', 'january', 'february']
const spring = ['march', 'april', 'may']
const summer = ['june', 'july', 'august']

switch (true) {
    case autumn.includes(season):
        console.log('The season is Autumn')
        break
    case winter.includes(season):
        console.log('the season is Winter')
        break
    case spring.includes(season):
        console.log('the season is Spring')
        break
    case spring.includes(season):
        console.log('the season is Summer')
        break
    default:
        console.log(`there is no such month`)
        break
}

// Check if a day is weekend day or a working day. Your script will take day as an input.
//     What is the day  today? Saturday
//     Saturday is a weekend.

//     What is the day today? saturDaY
//     Saturday is a weekend.

//     What is the day today? Friday
//     Friday is a working day.

//     What is the day today? FrIDAy
//     Friday is a working day.

// Exercises: Level 3
// Write a program which tells the number of days in a month.
//   Enter a month: January
//   January has 31 days.

//   Enter a month: JANUARY
//   January has 31 day

//   Enter a month: February
//   February has 28 days.

//   Enter a month: FEbruary
//   February has 28 days.

// Write a program which tells the number of days in a month, now consider leap year.

Date.prototype.daysInMonth = function (month) {
    return new Date(this.getFullYear(), month, 0).getDate();
};

const month = (enterMonth) => {
    const monthMap = {
        "january": 1,
        "february": 2,
        "march": 3,
        "april": 4,
        "may": 5,
        "june": 6,
        "july": 7,
        "august": 8,
        "september": 9,
        "october": 10,
        "november": 11,
        "december": 12
    };

    return monthMap[enterMonth]
}

const getDaysInMonth = () => {
    const enterMonth = prompt('Enter a month').toLocaleLowerCase()

    if(month(enterMonth)) {
        console.log(`${enterMonth.charAt(0).toUpperCase() + enterMonth.substring(1)} has ${new Date().daysInMonth(month(enterMonth))} days`);
    }
    else {
        console.log('The entered month is not correct')
    }   
}

getDaysInMonth()
