# Blaise REST API Node Client

A robust, type-safe Node.js client for interacting with our Blaise REST API. Designed for high-reliability service-to-service communication, this library provides immutable data contracts and standardised interaction patterns for Blaise resources.

## 📝 Usage

Add this repository to your project as a dependency:

```shell
yarn add git+https://github.com/ONSdigital/blaise-api-node-client#<RELEASE_VERSION>
```

Release versions can be found on this repo's [GitHub releases](https://github.com/ONSdigital/blaise-api-node-client/releases).

### Implementation Example

The client is designed for dependency injection. It exposes strongly-typed methods and interfaces, ensuring that data structures returned by the API are consistent and immutable.

```typescript
import BlaiseApiClient from "blaise-api-node-client";

// Initialise the client with the Base URL of your Blaise REST API
const BLAISE_API_URL = process.env.BLAISE_API_URL || "";
const TIMEOUT_MS = 1000;

// The client accepts a configuration object for extended settings
const blaiseApiClient = new BlaiseApiClient(`http://${BLAISE_API_URL}`, TIMEOUT_MS);

export async function fetchQuestionnaires() {
  try {
    // Methods are strongly typed, returning immutable interfaces
    const questionnaires = await blaiseApiClient.getQuestionnaires("gusty");
    return questionnaires;
  } catch (error) {
    console.error("Failed to fetch questionnaires", error);
    throw error;
  }
}
```

### Type-Safe Mocks

To support local testing and ensure your mock data stays in sync with production contracts, the library exports validated mock objects. These are defined using readonly modifiers to prevent state pollution between tests.

```typescript
import { mockQuestionnaires } from "blaise-api-node-client";

console.log(mockQuestionnaires[0].name);
```

## 🛠️ Development

### Getting Started

Clone the repository:

```shell
git clone https://github.com/ONSdigital/blaise-api-node-client.git
```

Install dependencies:

```shell
yarn install
```

### Architectural Principles

This library follows strict clean-code principles:

* **Domain-Driven Layout**: API calls are logically grouped by entity within the resources/ directory (e.g., Cases, Users, Questionnaires), rather than by generic functions.

* **Centralised Contracts**: All data contracts (types and interfaces) reside in the types/ directory to prevent circular dependencies and maintain a single source of truth.

* **Strict Typing**: Union types and strict mapping are used for dynamic values (e.g., UserRole and CaseOutcome), providing IDE autocomplete and compile-time safety.

* **Barrel Exports**: The public API surface is strictly controlled via index.ts, ensuring consumers only access intended interfaces, enums, and client classes.

### Quality Control

Ensure any changes to token management or caching logic are covered by unit tests.

To run tests:

```Shell
yarn test
```

To run linting:

```Shell
yarn lint
```

To automatically fix standard linting issues:

```Shell
yarn lint-fix
```

### Releasing

After merging to main, [create a new release](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository) with appropriate release notes. The `package.json` version is automatically updated via GitHub Actions when a release is published.
