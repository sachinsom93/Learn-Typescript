/*
    1. Partial
    2. Readonly
*/

interface Course{
    title: string;
    createdBy: string;
    price: number;
}

function createCourse(title: string, createdBy: string, price: number): Course{
    let newCourse: Partial<Course> = {};
    // Partial made all the parameters optional 
    newCourse.title = title;
    newCourse.createdBy = createdBy;
    newCourse.price = price;
    return newCourse as Course;
}

const names: Readonly<string[]> = ['som', 'sachin']
// names.push('suraj')
