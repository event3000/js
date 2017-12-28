class FieldModel {
    constructor() {
        this.start_coord = [];
        this.finish_coord = [];
    }

    set start(start) {
        this.start_coord = start;
        console.log(this.start_coord);
    }

    set finish(finish) {
        this.finish_coord = finish;
        console.log(this.finish_coord);
    }

    set keyCode(keyCode) {
        console.log(keyCode);

        // проверка клавиши вниз
         if (keyCode === 40) {
             human.generateImage('img/mouse.png', [444, 40] );
        }


    }

}