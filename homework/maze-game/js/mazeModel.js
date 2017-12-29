class FieldModel {
    constructor() {
        this.start_coord = [];
        this.finish_coord = [];
        this.x = 444;
        this.y = 11;
    }

    set start(start) {
        this.start_coord = start;
        console.log(this.start_coord);
    }

    set finish(finish) {
        this.finish_coord = finish;
        console.log(this.finish_coord);
    }

    // проверка столкновения 
    contactWall() {
    var imgData = human.canvas_context.getImageData(this.x-1, this.y-1, 15+2, 15+2);
    var pixels = imgData.data;

    for (var i = 0, n = pixels.length; i < n; i += 4) {
        var red = pixels[i];
        var green = pixels[i+1];
        var blue = pixels[i+2];
        var alpha = pixels[i+3];
        if (red == 0 && green == 0 && blue == 0) {
            return true;
            }
         }
        return false;
    }

    set keyCode(keyCode) {
        // проверка клавиши вниз
         if (keyCode === 40 && !this.contactWall() ) {
             human.generateImage('img/clear.png', [this.x, this.y] );
             human.generateImage('img/mouse.png', [this.x, this.y + 3] );
             this.y += 3;
         }
             
        //  проверка клавиши вверх    
        if (keyCode === 38 && !this.contactWall() ) {
             human.generateImage('img/clear.png', [this.x, this.y] );
             human.generateImage('img/mouse.png', [this.x, this.y - 3] );
             this.y -= 3;

        }

        //  проверка клавиши влево    
        if (keyCode === 37 && !this.contactWall() ) {
             human.generateImage('img/clear.png', [this.x, this.y] );
             human.generateImage('img/mouse.png', [this.x - 3, this.y] );
             this.x -= 3;

        }

        //  проверка клавиши влево    
        if (keyCode === 39 && !this.contactWall() ) {
             human.generateImage('img/clear.png', [this.x, this.y] );
             human.generateImage('img/mouse.png', [this.x + 3, this.y] );
             this.x += 3;
        }
    }



}



