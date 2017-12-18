(function () {
    'use strict';

    // Объекты, как ассоциативные массивы

    var obj = {}; // Cоздание пустого ассоциативного массива
    console.log("obj", obj);

    // В объекте можно хранить любые значения, которые называются свойствами объекта.
    // Доступ к свойствам осуществляется по имени свойства (переменная)

    // Основные операции с объектами: создание, получение и удаление свойств.
    // Для обращения к свойствам используется запись «через точку», вида имя_объекта.имя_свойства(ключ)
    // Удаление осуществляется оператором delete

    var user = {};

    user.id = 1;  // создали свойство с именем id, присвоили ему значение 1
    user.login = 'nikname';
    user.email = 'nikname@email.ru';

    console.log(user);
    console.log('Имя пользователя: ', user.name);  // прочитали свойство name объекта user
    console.log('E-mail: ', user.email);  // прочитали свойство email объекта user

    delete user.email; // удалили свойство email

    console.log(user.email);
    console.log(user);

    // Если нужно проверить, есть ли в объекте свойство с определенным ключом.
    // используется оператор: "in": "имя_свойства(ключ)" in obj, имя свойства – обязательно должно быть в виде строки

    if ("email" in user) {
        console.log( "Свойство email существует!" );
    }

    if ("login" in user) {
        console.log( "Свойство login существует!" );
    }



    // Работа со свойствами  через квадратные скобки имя_объекта['имя_свойства']
    user.phone = '459807';
    user['phone'] = '459807';
    console.log(user);

    /*
    Доступ к свойству через переменную  Квадратные скобки также позволяют обратиться к свойству, имя которого хранится в переменной
    Доступ через точку используется, если мы на этапе написания программы уже знаем название свойства.
    А если оно будет определено по ходу выполнения, то единственный выбор – квадратные скобки.
    */
    var propName = 'phone';
    console.log(user[propName]);

    // литеральный способ объявление объекта
    // Объект можно заполнить значениями при создании, указав их в фигурных скобках
    /*
     var obj = {
     имя_свойства(ключ): значение,
     имя_свойства(ключ): значение,
     имя_свойства(ключ): значение
     }
     // */
    // Названия свойств можно перечислять как в кавычках, так и без, если они удовлетворяют ограничениям для имён переменных.

    user = {
        id: 3,
        login: 'qwerty',
        email: 'nikname@email.com'
    };

    // Хранение по ссылке и хранение по значению
    // хранение по значению

    var size = 9;
    var mySize = size;     // две разных переменных

    console.log('size =', size, 'mySize =', mySize);
    mySize = 165;
    
    console.log('size =', size, 'mySize =', mySize);

    // хранение по ссылке
    var horse = {
        size: 'big'
    };

    var pony = horse;   // ссылки на один объект!!!
    console.log(pony.size);

    pony.size = 'small';
    console.log('horse.size - ' + horse.size + '\npony.size - ' + pony.size);


    // Если в качестве свойства объекта указана функция - получаем МЕТОД объекта
    
    user = {
        id: 3,
        login: 'qwerty',
        email: 'nikname@email.com',
        changeLogin: function (newLogin) {
            console.log("this", this);
            this.login = newLogin;
        }
    };

    user.changeLogin('Gosha');
    console.log(user.login);

    // this используется для получения к свойствам и методам внутри объекта (this.login === user.login)
    
// ПЕРЕБОР ОБЪЕКТОВ

    // let obj = {
    //     name: "ob name" ,
    //     id: 12,
    //     meth: function () {
    //            for (let key in obj) {
    //             console.log("in obj", key, obj[key] );
    //             }
    //     }
    // };

  // ПЕРЕБОР ОБЪЕКТОВ
  // var 
  
  //  for (let key in obj) {
  //       console.log(key, obj[key]);
  //   };


}());