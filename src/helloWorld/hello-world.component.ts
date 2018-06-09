import { HelloWorldComponentController } from './hello-world.controller';

export class HelloWorldComponent implements ng.IComponentOptions {
    public controller: ng.Injectable<ng.IControllerConstructor>;
    public controllerAs: string;
    public template: string;

    constructor() {
        this.controller = HelloWorldComponentController;
        this.controllerAs = "$ctrl";
        this.template = `
            <h1>{{ $ctrl.texto }}</h1>
        `;
    }
}