import { expect, test } from "bun:test";
import { mockJira, MockIssueProject } from "./mock";

// Apply mocks
mockJira.projects.list = MockIssueProject;

const projectId = 123456;

test("should successfully fetch a Jira project by ID", async () => {
    const project = await mockJira.projects.list(projectId);
    expect(project).toBeInstanceOf(Object);
});