// import "./hello-world-button.css";
import "./hello-world-button2.scss";

class HelloWorldButton {
  /**
   * class properties are not supported by major browsers yet
   * most browser allows js methods inside classes
   */
  buttonCssClass = "hello-world-button";
  render() {
    const button = document.createElement("button");
    const body = document.querySelector("body");
    button.innerHTML = "Hello world";
    button.onclick = function () {
      const p = document.createElement("p");
      p.innerHTML = "Hello world";
      p.classList.add("hello-world-text");
      body.appendChild(p);
    };
    button.classList.add(this.buttonCssClass);
    body.appendChild(button);
  }
}

export default HelloWorldButton;
