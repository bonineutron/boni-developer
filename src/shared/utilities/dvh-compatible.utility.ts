// retrieve the height of the browser window
const windowHeight = window.innerHeight;

// define a custom CSS style using a template string
const customStyle: string = `
  .dvh-compatible {
    height: ${windowHeight}px;
  }
`;

// create a new HTML style element
const styleElement: HTMLStyleElement = document.createElement('style');

// set the custom style as the innerHTML of the created style element
styleElement.innerHTML = customStyle;

// append the style element to the head of the HTML document
document.head.appendChild(styleElement);
