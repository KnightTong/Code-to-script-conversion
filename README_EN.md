# TongWeiCodePen - HTML Conversion Tools
*[中文说明](./README.md)*

TongWeiCodePen is an online tool designed for converting snippets of HTML, JS, or JSON code into various formats. This project assists developers in efficiently converting code between different formats.

## Features

- **Conversion of HTML into Ajax Strings**: Easily convert HTML code into strings necessary for Ajax requests through a simple interface.

- **Batch Parameter Code Block Generation**: Iterate over user-defined parameters to generate code blocks, supporting efficient development for complex projects.

- **Multiple Conversion Operations**:
  - Convert HTML to JS
  - Convert JS to HTML
  - Convert HTML to JS Array
  - JSON Data Formatting

- **JSON Parsing and Formatting**: 
  Parse and validate JSON data input, with options to format and compress the JSON output.

## Usage Instructions

1. **Input Code**:  
   Enter the HTML/JS/JSON code you wish to convert in the provided input field on the left. Optionally, enter the parameters in the input field on the right.

2. **Choose a Conversion Operation**:
   - `Html to Js`: Convert HTML into a JavaScript string.
   - `Js to Html`: Convert a JavaScript string back to HTML.
   - `Html to Js Array`: Convert HTML into a JavaScript array format.
   - `Free Conversion`: Use custom parameters for format conversion.

3. **JSON Formatting and Validation**:
   - Use the `Json Formatting` button to format and validate the JSON data input.

4. **View Results**:
   The results of the conversion or parsing will be displayed in the result text area on the page.

## Technical Details

- **Dependencies**:
  - [jQuery](https://jquery.com/)
  - [Bootstrap](https://getbootstrap.com/)

- **JavaScript Functions**:
  - `tojs()`: Converts HTML to a JavaScript string.
  - `tohtml()`: Converts a JavaScript string back into HTML.
  - `htmltoarray()`: Converts HTML into a JavaScript array.
  - `tomc()`: Creates scripts using custom parameter replacement and iteration.
  - `validate()`: Validates and formats JSON data.
  - `jsl.parser` and `jsl.format`: Used for parsing and formatting JSON text.

- **Running the Application**:
  This is a simple HTML page that uses jQuery and Bootstrap for interactive functionality. It can be run directly in a browser.

## Contributing

We welcome suggestions for improvements to this tool. If you wish to contribute to the project, please submit your ideas or create a Pull Request with your code.

## License

This project is licensed under the MIT License. Please refer to the LICENSE file for more details.
