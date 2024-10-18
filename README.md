# Clean Architecture with Node.js

## About Clean Architecture

Clean Architecture is a software architectural pattern that emphasizes separation of concerns and maintainability by organizing code into layers with clear boundaries. It promotes decoupling of dependencies and simplifies testing and scalability. Next, we will see how it is applied to Node.js.


### Layers

![Clean](/CleanArchitecture.jpg)

- **Entity Layer:** Contains the business entities and their associated business logic. It represents the core of the application and should be independent of other layers.
- **Use Case Layer:** Implements the application’s business use cases or business rules. It defines the interactions between external systems and the entity layer.
- **Interface Adapters Layer:** Converts data received from external systems into a format that the use case layer can understand and vice versa. It includes controllers, presenters, and gateways or repositories.
- **Frameworks & Drivers Layer:** Contains external frameworks, libraries, and tools such as databases, web servers, or external APIs.


## This Node.js Project

### Project structure

- **Application folder:** This folder represents the use case layer, meaning that here we will see all the business logic, forgetting about how the data is obtained, or how it is presented to clients.
- **Entities folder:** This folder contains all our business entities, which is the core of our structure.
- **Infrastructure:** It represents the outermost layer of our application and is responsible for interacting with frameworks, libraries or external tools.
- **Interface:** Finally, in this folder we will have our connections to the frameworks and libraries. These components allow us to "standardize" the communications coming from the database, the web, frameworks, among others.

### Advantages

- **Migrations**: This structure allows us to migrate certain components of our application without having to make changes to the entire repository. A clear example would be migrating from one database to another without any problems. You would only need to add a new folder (/databases/postgresql) and its own configuration.
- **Responsabilities**: Each component only does what it is supposed to do based on the layer it is in. This allows us to not have spaghetti components that do everything.
- **Testing**: Since each component has reduced responsibilities, they are simpler to test, allowing for more understandable tests and mocks.
