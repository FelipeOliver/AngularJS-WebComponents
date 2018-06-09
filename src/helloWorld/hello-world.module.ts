import { HelloWorldComponent } from './hello-world.component';

angular.module("app", [])
    .component("helloWorld", new HelloWorldComponent());