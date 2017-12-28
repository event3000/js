class CanvasDrawer {

    constructor(set_canvas_size) {
        this.canvas = null;
        this.canvas_context = null;
        this.set_canvas_size = set_canvas_size;

    }

    initGameCanvas(canvas_id, ctx) {
        this.canvas = document.getElementById(canvas_id);
        this.canvas_context = this.canvas.getContext(ctx);

    }


    generateImage(img_path, coords) {
        let img = document.createElement('img');
        img.setAttribute("src", img_path);

        if (this.set_canvas_size) {
            this.canvas.height = img.height;
            this.canvas.width = img.width;

        }
        

        this.canvas_context.drawImage(img, coords[0], coords[1]);


    }



}

class FieldController extends CanvasDrawer {

    constructor(set_canvas_size) {
        super(set_canvas_size);
        this.fieldModel = new FieldModel();
        this.initListener();
    }


    sendCoordToModel() {
        this.fieldModel.start = [6, 8];
        this.fieldModel.finish = [7, 0];
    }

    initListener() {
        window.addEventListener("keydown", this.getKeyCode.bind(this));
    }

    getKeyCode(event) {
        this.fieldModel.keyCode = event.keyCode;

    }


}

class HumanController extends CanvasDrawer {
    constructor(set_canvas_size) {
        super(set_canvas_size);

    }


}


let fieldController = new FieldController("true");
fieldController.initGameCanvas('maze_canvas', '2d');
fieldController.generateImage('img/maze.png', [0, 0]);




let human = new HumanController(false);
human.initGameCanvas('maze_canvas', '2d');


human.generateImage('img/mouse.png', [444, 11] );





