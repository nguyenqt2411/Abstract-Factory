class ThemeFactory {
  createButton() {
    throw new Error("Abstract method! You need to override this in your concrete factory.");
  }

  createHeader() {
    throw new Error("Abstract method! You need to override this in your concrete factory.");
  }
}

// Concrete Factories
class LightThemeFactory extends ThemeFactory {
  createButton() {
    return new LightButton();
  }

  createHeader() {
    return new LightHeader();
  }
}

class DarkThemeFactory extends ThemeFactory {
  createButton() {
    return new DarkButton();
  }

  createHeader() {
    return new DarkHeader();
  }
}

// Abstract Products
class Button {
  render() {
    throw new Error("Abstract method! You need to override this in your concrete product.");
  }
}

class Header {
  render() {
    throw new Error("Abstract method! You need to override this in your concrete product.");
  }
}

// Concrete Products
class LightButton extends Button {
  render() {
    return "<button>Light Button</button>";
  }
}

class DarkButton extends Button {
  render() {
    return '<button style="background-color: #555; color: #fff;">Dark Button</button>';
  }
}

class LightHeader extends Header {
  render() {
    return "<h1>Light Theme Header</h1>";
  }
}

class DarkHeader extends Header {
  render() {
    return '<h1 style="color: #EEE8AA;">Dark Theme Header</h1>';
  }
}

// Client Code
const outputElement = document.getElementById('output');
const lightThemeBtn = document.getElementById('lightThemeBtn');
const darkThemeBtn = document.getElementById('darkThemeBtn');

function applyTheme(factory) {
  const button = factory.createButton();
  const header = factory.createHeader();

  outputElement.innerHTML = button.render() + header.render();
}

// Event Listeners
lightThemeBtn.addEventListener('click', () => applyTheme(new LightThemeFactory()));
darkThemeBtn.addEventListener('click', () => applyTheme(new DarkThemeFactory()));

// Initial Theme
applyTheme(new LightThemeFactory());
// applyTheme(new DarkThemeFactory());