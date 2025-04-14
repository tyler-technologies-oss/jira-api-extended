# Jira API Extended

A TypeScript-based extended wrapper for the Jira REST API that provides enhanced functionality and type safety.

## Requirements
- [Bun](https://bun.sh/)
- [Jira Software](https://www.atlassian.com/software/jira)

## Features
- **Comprehensive**: Covers core Jira API functionalities:
  - Issues interface
  - Project interface
  - Release/Version interface
  - Comments interface
  - Account interface
- **Authentication**: Supports both Basic Auth and Bearer Token
- **HTTP Client**: Built-in HTTP client with proper error handling

## Installation
```bash
bun install
```

## Basic Setup
```typescript
import JiraAPI from "jira-api-extended/api/main";

const jira = new JiraAPI({
  url: "https://your-jira-instance.atlassian.net",
  token: "your-api-token",
});
```

## API References
- [Issues v2](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/)
- [Issues v3](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/)
- [Projects v2](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/)
- [Projects v3](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/)
- [Releases v2](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/)
- [Releases v3](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/)
- [Comments v2](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/)
- [Comments v3](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/)
- [Account v2](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/)
- [Account v3](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/)
- [Jira Software](https://developer.atlassian.com/cloud/jira/software/rest/intro/)

## Example Usage
```typescript
const issues = await jira.issues.list();
console.log(issues);
```

## Testing

To run the tests, you need to set the following environment variables:

```bash
JIRA_URL=https://your-jira-instance.atlassian.net
JIRA_TOKEN=your-api-token
JIRA_TEST_PROJECT_ID=your-project-id
JIRA_TEST_ISSUE=your-issue-id
```

Then, run the tests:
```bash
bun test
```

You may need to optionally provide a timeout for the tests:
```bash
bun test --timeout 10000
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the Apache License 2.0. See the [LICENSE](LICENSE) file for details

## Contact

For questions or support, please contact me at [@lillious](https://github.com/lillious).
