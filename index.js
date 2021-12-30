var courses = [
  {
    id: 1,
    name: 'PHP',
    coin: 0,
    coinText: 'Gia: 0',
  },
  {
    id: 2,
    name: 'Java',
    coin: 50,
    coinText: 'Gia: 50',
  },
  {
    id: 3,
    name: 'C#',
    coin: 150,
    coinText: 'Gia: 150',
  },
  {
    id: 4,
    name: 'Javascript',
    coin: 100,
    coinText: 'Gia: 100',
  },
  {
    id: 5,
    name: 'Python',
    coin: 200,
    coinText: 'Gia: 200',
  },
];
function CourseHandler(course, index) {
  // return course; => trả về tất cả các phần tử của mảng courses
  // return 123; => trả về mảng 5 phần từ 123

  // return {
  //   id: course.id,
  //   name: `khoa hoc: ${course.name}`,
  //   coin: course.coin,
  //   coinText: `gia: {course.coin}`,
  //   index: index,
  //   originalArray: course,
  // };

  return `<h2>${course.name}</h2>`;
}
// map sẽ duyệt qua từng phần tử của mảng
// mỗi khi duyệt qua từng phần tử nó sẽ gọi lại function được truyền trong thèn map
var newCourse = courses.map(CourseHandler);

// map trả về 1 array
// function return về cái gì thì mảng mới return cái đó

// console.log(newCourse);

console.log(newCourse.join(''));

// map thường dùng để hiển thị ra view cho người dùng
