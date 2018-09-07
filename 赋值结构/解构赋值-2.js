var person = {
  name: '小明',
  age: 20,
  gender: 'male',
  passport: 'G-12345678',
  school: 'No.4 middle school',
  address: {
      city: 'Beijing',
      street: 'No.1 Road',
      zipcode: '100001'
  }
};
let { name, age, passport, sex = 'men',
  address: { // 使用嵌套中对象解构赋值
      city,
      zip
  } } = person;
  
name
age
passport
sex
city
zip
address