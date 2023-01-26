# Svelte Loaf
Toast notification library for Svelte.

<!-- insert markdown image -->
![Svelte Loaf](/static/Screenshot.png)

## Installation

```bash
npm install svelte-loaf
```

## Configuration

There are 3 toast types: _message_, _error_, and _warning_. The styles for these are themable thru CSS variables. The default values are:

To theme the toast, add the following to global styles (replacing the values with your own):

```css
    --loaf-message-bg: #7bced1;
    --loaf-message-text: #0c1018;
    --loaf-error-bg: #b12232;
    --loaf-error-text: #0c1018;
    --loaf-warning-bg: #f7b6b9;
    --loaf-warning-text: #0c1018;
    --toast-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
```

## Usage

Add the ```<Loaf />``` component somewhere in your app (e.g. a layout):
  
  ```html
  <script>
    import Loaf from 'svelte-loaf';

  </script>

  <Loaf />
  ```


To show a toast, import and call the ```addToast``` function:

```html
<script>
  import { addToast } from 'svelte-loaf'; 
  
  addToast({
    message: 'Hello world!',
    type: 'message',
    duration: 3000
  });
</script>

```

## API

<!-- write API docs for a function -->
### addToast(newToast: Toast, timeout?: number): void

Add a toast to the queue.

#### newToast

<!-- Docs for a typescript type -->
Type: ```Toast```

The toast to add to the queue.

```typescript
type Toast = {
  message: string;
  timeout?: number; // duration in ms (default is 5000)
  autohide?: boolean; // autohide the toast (default is true)
  callback?: () => void; // Optional: run a function on click
  type: 'message' | 'warning' | 'error';
}
```


#### timeout

The duration in ms to show the toast. If not provided, the toast will use the default duration of 5000ms.
