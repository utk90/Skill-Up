const sortDataByAge = require('./app.js');

test('Testing the sorting feature', () => {
    const sortedData = sortDataByAge();
    
    expect(sortedData[0].name).toBe('simran');
})

test('Testing last element after sorting is utkarsh', () => {
    const sortedData = sortDataByAge();
    expect(sortedData[sortedData.length-1].name).toBe('utkarsh');
})

test('checking length before and after sort is same', () => {
    const sortedData = sortDataByAge();
    expect(sortedData).toHaveLength(3);
})