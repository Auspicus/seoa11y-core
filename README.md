# seoa11y-core

## Routes

- Routes should live in the `/routes` folder
- Each route should define data about itself in an object
- Routes usually have a container associated with them (ie. Dashboard container for /dashboard)

## Containers vs Components

### Containers
- Containers are special components which are aware of global state
- Containers can use Redux `connect` to attach state and dispatchers
- Containers will usually pass down state and actions into props of "dumb" components

### Components
- Components are "dumb" and only know about local state and props
- Components should not have any interaction with Redux
- Components should be fully testable
- Components should have a `{component_name}.spec.js` file which contains a unit test for their functionality
- Components should have all related styles in a `styles.scss` file
