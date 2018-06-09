export class HelloWorldComponentController implements ng.IComponentController {
    public texto: string;

    constructor() {
        this.texto = "Hello World!!!";
    }
} 