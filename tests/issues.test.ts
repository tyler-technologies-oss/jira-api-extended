import { expect, test } from "bun:test";
import { mockJira, MockIssue, MockIssueSummary, MockIssueAssignee, MockIssueDescription, MockIssueStatus, MockIssueReporter, MockIssueCreator, MockIssueCreated, MockIssueUpdated, MockIssueLastViewed, MockIssueWatchers, MockIssuePriority, MockIssueFixVersions, MockIssueVotes, MockIssueLabels, MockIssueTags, MockIssueProject, MockIssueComments } from "./mock";

// Apply mocks
mockJira.issues.get = MockIssue;
mockJira.issues.assignee = MockIssueAssignee;
mockJira.issues.summary = MockIssueSummary;
mockJira.issues.description = MockIssueDescription;
mockJira.issues.status = MockIssueStatus;
mockJira.issues.reporter = MockIssueReporter;
mockJira.issues.creator = MockIssueCreator;
mockJira.issues.created = MockIssueCreated;
mockJira.issues.updated = MockIssueUpdated;
mockJira.issues.lastViewed = MockIssueLastViewed;
mockJira.issues.watchers = MockIssueWatchers;
mockJira.issues.priority = MockIssuePriority;
mockJira.issues.fixVersions = MockIssueFixVersions;
mockJira.issues.votes = MockIssueVotes;
mockJira.issues.labels = MockIssueLabels;
mockJira.issues.tags = MockIssueTags;
mockJira.issues.project = MockIssueProject;
mockJira.issues.comments = MockIssueComments;

const issueId = "MOCK-123";
const issue = await mockJira.issues.get(issueId);
test("should successfully fetch a Jira issue by ID", async () => {
  expect(issue).toBeInstanceOf(Object);
  expect(issue.id).toBeDefined();
  expect(issue.fields).toBeInstanceOf(Object);
  expect(issue.fields.summary).toBeDefined();
  expect(issue.fields.description).toBeDefined();
  expect(issue.fields.status).toBeDefined();
  expect(issue.fields.assignee).toBeDefined();
  expect(issue.fields.reporter).toBeDefined();
  expect(issue.fields.creator).toBeDefined();
  expect(issue.fields.created).toBeDefined();
  expect(issue.fields.updated).toBeDefined();
  expect(issue.fields.lastViewed).toBeDefined();
  expect(issue.fields.watches).toBeDefined();
  expect(issue.fields.priority).toBeDefined();
  expect(issue.fields.fixVersions).toBeDefined();
  expect(issue.fields.votes).toBeDefined();
  expect(issue.fields.labels).toBeDefined();
  expect(issue.fields.tags).toBeDefined();
  expect(issue.fields.comments).toBeDefined();
  expect(issue.fields.project).toBeDefined();
});

test("should successfully fetch the assignee of a Jira issue", async () => {
  const assignee = await mockJira.issues.assignee(issueId);
  expect(assignee).toBeInstanceOf(Object);
});

test("should successfully fetch the summary of a Jira issue", async () => {
  const summary = await mockJira.issues.summary(issueId);
  expect(typeof summary).toBe("string");
});

test("should successfully fetch the description of a Jira issue", async () => {
  const description = await mockJira.issues.description(issueId);
  expect(typeof description).toBe("string");
});

test("should successfully fetch the status of a Jira issue", async () => {
  const status = await mockJira.issues.status(issueId);
  expect(status).toBeInstanceOf(Object);
});

test("should successfully fetch the reporter of a Jira issue", async () => {
  const reporter = await mockJira.issues.reporter(issueId);
  expect(reporter).toBeInstanceOf(Object);
});

test("should successfully fetch the creator of a Jira issue", async () => {
  const creator = await mockJira.issues.creator(issueId);
  expect(creator).toBeInstanceOf(Object);
});

test("should successfully fetch the created date of a Jira issue", async () => {
  const created = await mockJira.issues.created(issueId);
  expect(typeof created).toBe("string");
});

test("should successfully fetch the updated date of a Jira issue", async () => {
  const updated = await mockJira.issues.updated(issueId);
  expect(typeof updated).toBe("string");
});

test("should successfully fetch the last viewed date of a Jira issue", async () => {
  const lastViewed = await mockJira.issues.lastViewed(issueId);
  expect(typeof lastViewed).toBe("string");
});

test("should successfully fetch the watchers of a Jira issue", async () => {
  const watchers = await mockJira.issues.watchers(issueId);
  expect(watchers).toBeInstanceOf(Object);
});

test("should successfully fetch the priority of a Jira issue", async () => {
  const priority = await mockJira.issues.priority(issueId);
  expect(priority).toBeInstanceOf(Object);
});

test("should successfully fetch the fix versions of a Jira issue", async () => {
  const fixVersions = await mockJira.issues.fixVersions(issueId);
  expect(fixVersions).toBeInstanceOf(Object);
});

test("should successfully fetch the votes of a Jira issue", async () => {
  const votes = await mockJira.issues.votes(issueId);
  expect(votes).toBeInstanceOf(Object);
});

test("should successfully fetch the labels of a Jira issue", async () => {
  const labels = await mockJira.issues.labels(issueId);
  expect(labels).toBeInstanceOf(Object);
});

test("should successfully fetch the tags of a Jira issue", async () => {
  const tags = await mockJira.issues.tags(issueId);
  expect(tags).toBeInstanceOf(Object);
});

test("should successfully fetch the comments of a Jira issue", async () => {
  const comments = await mockJira.issues.comments(issueId);
  expect(comments).toBeInstanceOf(Object);
});

test("should successfully fetch the project of a Jira issue", async () => {
  const project = await mockJira.issues.project(issueId);
  expect(project).toBeInstanceOf(Object);
});