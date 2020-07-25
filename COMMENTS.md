# Decisions
I decided to create my own components (containers, papers, controlled accordions, inputs, buttons and toasters ) instead of using those pre-made from Material UI. They are great, but I think creating my own is better to handle everything.

To manage all the states between components I decided to use Context API.

I tried to place the toaster following the Figma layout, but for some screen resolutions, it doesn't fit well, so I created a new one, more cool, floating and animated.

I already left prepared the implementation of react-places-autocomplete but I had to hide it because I had no Google API Key to use it.

# Next Features
- If I had more time I would like to start this applicaton using TDD.
- I would like to implement the validation form and submission handles with different toasters.
- Make a responsive layout.
- Change from React.js to React-Native-Web, so the layout could be more responsive and the code could be reausable in case a mobile version is needed.
- Refactor the code with Redux, in case the application grows up.
