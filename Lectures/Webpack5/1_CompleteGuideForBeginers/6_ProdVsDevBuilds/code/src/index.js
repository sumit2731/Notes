import HelloWorldButton from "./components/hello-world-button/hello-world-button";
import Heading from "./components/heading/heading.js";

const heading = new Heading();
heading.render();

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();

helloWorldButton.doesNotExist();
