import { mock } from "bun:test";
import JiraAPI from "../api/main";

export const mockJira = new JiraAPI({
  token: "mock-token",
  url: "https://mock.atlassian.net",
});

export const MockRelease = mock(() => {
  return Promise.resolve([
    {
        self: "https://mock.atlassian.net/rest/api/2/version/123456",
        id: 1,
        description: "Created by a unit test",
        name: "Unit Test Release",
        archived: false,
        released: false,
        startDate: "2025-04-14",
        releaseDate: "2025-04-09",
        userStartDate: "04/09/2025",
        userReleaseDate: "04/09/2025",
        projectId: 123456,
      }
  ]) as Promise<IObject>;
});

// Mock the issues.get method
export const MockIssue = mock(() => {
  return Promise.resolve({
    id: "123456",
    key: "MOCK-123",
    fields: {
      comments: {
        comments: [
          {
            self: "https://mock.atlassian.net/rest/api/2/issue/123456/comment/123456",
            id: "123456",
            author: {
              self: "https://mock.atlassian.net/rest/api/2/user?username=mock.user",
              name: "mock.user",
              key: "MOCKUSER-123",
              emailAddress: "mock.user@mock.com",
              avatarUrls: {
                "48x48":
                  "https://mock.atlassian.net/secure/projectavatar?pid=123456&avatarId=123456",
                "24x24":
                  "https://mock.atlassian.net/secure/projectavatar?size=small&pid=123456&avatarId=123456",
                "16x16":
                  "https://mock.atlassian.net/secure/projectavatar?size=xsmall&pid=123456&avatarId=123456",
                "32x32":
                  "https://mock.atlassian.net/secure/projectavatar?size=medium&pid=123456&avatarId=123456",
              },
              displayName: "Mock User",
              active: true,
              timeZone: "America/New_York",
            },
            body: "Test comment",
            updateAuthor: {
              self: "https://mock.atlassian.net/rest/api/2/user?username=mock.user",
              name: "mock.user",
              key: "MOCKUSER-123",
              emailAddress: "mock.user@mock.com",
              avatarUrls: {
                "48x48":
                  "https://mock.atlassian.net/secure/projectavatar?pid=123456&avatarId=123456",
                "24x24":
                  "https://mock.atlassian.net/secure/projectavatar?size=small&pid=123456&avatarId=123456",
                "16x16":
                  "https://mock.atlassian.net/secure/projectavatar?size=xsmall&pid=123456&avatarId=123456",
                "32x32":
                  "https://mock.atlassian.net/secure/projectavatar?size=medium&pid=123456&avatarId=123456",
              },
              displayName: "Mock User",
              active: true,
              timeZone: "America/New_York",
            },
            created: "2025-04-14T12:56:51.543-0400",
            updated: "2025-04-14T12:56:51.543-0400",
          },
        ],
        maxResults: 2,
        total: 2,
        startAt: 0,
      },
      summary: "Unit Test Functionality - DO NOT DELETE",
      description: "This is a test issue for the Jira API. DO NOT DELETE.",
      assignee: {
        self: "https://mock.atlassian.net/rest/api/2/user?username=mock.user",
        name: "mock.user",
        key: "MOCKUSER-123",
        emailAddress: "mock.user@mock.com",
        avatarUrls: {
          "48x48":
            "https://mock.atlassian.net/secure/projectavatar?pid=123456&avatarId=123456",
          "24x24":
            "https://mock.atlassian.net/secure/projectavatar?size=small&pid=123456&avatarId=123456",
          "16x16":
            "https://mock.atlassian.net/secure/projectavatar?size=xsmall&pid=123456&avatarId=123456",
          "32x32":
            "https://mock.atlassian.net/secure/projectavatar?size=medium&pid=123456&avatarId=123456",
        },
        displayName: "Mock User",
        active: true,
        timeZone: "America/New_York",
      },
      status: {
        name: "Open",
        id: "1",
      },
      reporter: {
        self: "https://mock.atlassian.net/rest/api/2/user?username=mock.user",
        name: "mock.user",
        key: "MOCKUSER-123",
        emailAddress: "mock.user@mock.com",
        avatarUrls: {
          "48x48":
            "https://mock.atlassian.net/secure/projectavatar?pid=123456&avatarId=123456",
          "24x24":
            "https://mock.atlassian.net/secure/projectavatar?size=small&pid=123456&avatarId=123456",
          "16x16":
            "https://mock.atlassian.net/secure/projectavatar?size=xsmall&pid=123456&avatarId=123456",
          "32x32":
            "https://mock.atlassian.net/secure/projectavatar?size=medium&pid=123456&avatarId=123456",
        },
        displayName: "Mock User",
        active: true,
        timeZone: "America/New_York",
      },
      creator: {
        self: "https://mock.atlassian.net/rest/api/2/user?username=mock.user",
        name: "mock.user",
        key: "MOCKUSER-123",
        emailAddress: "mock.user@mock.com",
        avatarUrls: {
          "48x48":
            "https://mock.atlassian.net/secure/projectavatar?pid=123456&avatarId=123456",
          "24x24":
            "https://mock.atlassian.net/secure/projectavatar?size=small&pid=123456&avatarId=123456",
          "16x16":
            "https://mock.atlassian.net/secure/projectavatar?size=xsmall&pid=123456&avatarId=123456",
          "32x32":
            "https://mock.atlassian.net/secure/projectavatar?size=medium&pid=123456&avatarId=123456",
        },
        displayName: "Mock User",
        active: true,
        timeZone: "America/New_York",
      },
      created: new Date().toISOString(),
      updated: new Date().toISOString(),
      lastViewed: new Date().toISOString(),
      watches: {
        self: "https://mock.atlassian.net/rest/api/2/issue/MOCK-123/watchers",
        watchCount: 1,
        isWatching: true,
      },
      priority: {
        self: "https://mock.atlassian.net/rest/api/2/priority/1",
        iconUrl:
          "https://mock.atlassian.net/images/icons/priorities/blocker.svg",
        name: "Blocker",
        id: "1",
      },
      fixVersions: {
        values: [
          {
            self: "https://mock.atlassian.net/rest/api/2/version/123456",
            id: "123456",
            description: "Unit Testing",
            name: "Unit Testing",
            archived: false,
            released: false,
            releaseDate: "2025-04-14",
          },
        ],
      },
      votes: {
        self: "https://mock.atlassian.net/rest/api/2/issue/MOCK-123/votes",
        votes: 1,
        hasVoted: true,
      },
      labels: {
        labels: ["Unit Testing"],
      },
      tags: [],
      project: {
        self: "https://mock.atlassian.net/rest/api/2/project/123456",
        id: "123456",
        key: "MOCK-123",
        name: "Mock Project",
        projectTypeKey: "software",
        projectCategory: {
          self: "https://mock.atlassian.net/rest/api/2/projectCategory/123456",
          id: "123456",
          description: "Mock Project Category",
          name: "Mock Project Category",
        },
        avatarUrls: {
          "48x48":
            "https://mock.atlassian.net/secure/projectavatar?pid=123456&avatarId=123456",
          "24x24":
            "https://mock.atlassian.net/secure/projectavatar?size=small&pid=123456&avatarId=123456",
          "16x16":
            "https://mock.atlassian.net/secure/projectavatar?size=xsmall&pid=123456&avatarId=123456",
          "32x32":
            "https://mock.atlassian.net/secure/projectavatar?size=medium&pid=123456&avatarId=123456",
        },
      },
    },
    error: undefined,
  }) as Promise<IObject>;
});

// Mock the issues.assignee method
export const MockIssueAssignee = mock(async () => {
  const issue = await MockIssue();
  return issue.fields.assignee;
});

// Mock the issues.summary method
export const MockIssueSummary = mock(async () => {
  const issue = await MockIssue();
  return issue.fields.summary;
});

// Mock the issues.description method
export const MockIssueDescription = mock(async () => {
  const issue = await MockIssue();
  return issue.fields.description;
});

// Mock the issues.status method
export const MockIssueStatus = mock(async () => {
  const issue = await MockIssue();
  return issue.fields.status;
});

// Mock the issues.reporter method
export const MockIssueReporter = mock(async () => {
  const issue = await MockIssue();
  return issue.fields.reporter;
});

// Mock the issues.creator method
export const MockIssueCreator = mock(async () => {
  const issue = await MockIssue();
  return issue.fields.creator;
});

// Mock the issues.created method
export const MockIssueCreated = mock(async () => {
  const issue = await MockIssue();
  return issue.fields.created;
});

// Mock the issues.updated method
export const MockIssueUpdated = mock(async () => {
  const issue = await MockIssue();
  return issue.fields.updated;
});

// Mock the issues.watchers method
export const MockIssueWatchers = mock(async () => {
  const issue = await MockIssue();
  return issue.fields.watches;
});

// Mock the issues.lastViewed method
export const MockIssueLastViewed = mock(async () => {
  const issue = await MockIssue();
  return issue.fields.lastViewed;
});

// Mock the issues.priority method
export const MockIssuePriority = mock(async () => {
  const issue = await MockIssue();
  return issue.fields.priority;
});

// Mock the issues.fixVersions method
export const MockIssueFixVersions = mock(async () => {
  const issue = await MockIssue();
  return issue.fields.fixVersions;
});

// Mock the issues.votes method
export const MockIssueVotes = mock(async () => {
  const issue = await MockIssue();
  return issue.fields.votes;
});

// Mock the issues.labels method
export const MockIssueLabels = mock(async () => {
  const issue = await MockIssue();
  return issue.fields.labels;
});

// Mock the issues.tags method
export const MockIssueTags = mock(async () => {
  const issue = await MockIssue();
  return issue.fields.tags;
});

// Mock the issues.project method
export const MockIssueProject = mock(async () => {
  const issue = await MockIssue();
  return issue.fields.project;
});

// Mock the issues.comments method
export const MockIssueComments = mock(async () => {
  const issue = await MockIssue();
  return issue.fields.comments;
});

// Mock the issues.field method
export const MockIssueField = mock(async (field: string) => {
  const issue = await MockIssue();
  return issue.fields[field];
});

// Mock the comments methods
export const MockCommentsList = mock(async () => {
  const issue = await MockIssue();
  return issue.fields.comments;
});

export const MockCommentAdd = mock(async (_issueId: string, body: string) => {
  const issue = await MockIssue();
  const comment = {
    self: "https://mock.atlassian.net/rest/api/2/issue/123456/comment/123456",
    id: "123456",
    author: {
      self: "https://mock.atlassian.net/rest/api/2/user?username=mock.user",
      name: "mock.user",
      key: "MOCKUSER-123",
      emailAddress: "mock.user@mock.com",
      displayName: "Mock User",
      active: true,
      timeZone: "America/New_York",
    },
    body: body,
    updateAuthor: {
      self: "https://mock.atlassian.net/rest/api/2/user?username=mock.user",
      name: "mock.user",
      key: "MOCKUSER-123",
      emailAddress: "mock.user@mock.com",
      displayName: "Mock User",
      active: true,
      timeZone: "America/New_York",
    },
    created: "2025-04-14T12:56:51.543-0400",
    updated: "2025-04-14T12:56:51.543-0400",
  };
  issue.fields.comments.comments.push(comment);
  return comment;
});

export const MockCommentUpdate = mock(
  async (_issueId: string, commentId: number, body: string) => {
    const issue = await MockIssue();

    issue.fields.comments.comments.find(
      // eslint-disable-next-line  @typescript-eslint/no-explicit-any
      (comment: any) => comment.id === commentId
    ).body = body;
    return issue.fields.comments.comments.find(
      // eslint-disable-next-line  @typescript-eslint/no-explicit-any
      (comment: any) => comment.id === commentId
    );
  } 
);

export const MockCommentRemove = mock(
  async (_issueId: string, commentId: number) => {
    const issue = await MockIssue();
    issue.fields.comments.comments = issue.fields.comments.comments.filter(
      // eslint-disable-next-line  @typescript-eslint/no-explicit-any
      (comment: any) => comment.id !== commentId
    );
    return issue.fields.comments.comments.find(
      // eslint-disable-next-line  @typescript-eslint/no-explicit-any
      (comment: any) => comment.id === commentId
    );
  }
);

// Mock releases.create method
export const MockReleaseCreate = mock(async (options: IReleaseOptions): Promise<IObject> => {
    const mockRelease = await MockRelease();
    const versionId = mockRelease.length + 1;
    mockRelease.push({
        self: `https://mock.atlassian.net/rest/api/2/version/${versionId}`,
        id: versionId,
        userStartDate: options.startDate,
        userReleaseDate: options.releaseDate,
        ...options,
    });
    return mockRelease;
});

// Mock releases.update method
export const MockReleaseUpdate = mock(async (options: IReleaseOptions, version: number): Promise<IObject> => {
    const mockRelease = await MockRelease();
    return {
        ...mockRelease[0],
        ...options,
        id: version
    };
});

// Mock releases.delete
export const MockReleaseDelete = mock(
  async (id: number) => {
    const mockRelease = await MockRelease();
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    mockRelease.splice(mockRelease.findIndex((release: any) => release.id === id), 1);
    return mockRelease;
  }
);

