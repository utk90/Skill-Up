const data = [
    {
        name: "utkarsh",
        age: 25
    },
    {
        name: "harry",
        age: 21
    },
    {
        name: "simran",
        age: 20
    }
]

function sortDataByAge(){
    const sortedData = data.sort((a,b)=>a.age-b.age);
    return sortedData;
}

// console.log(sortDataByAge());

module.exports = sortDataByAge;