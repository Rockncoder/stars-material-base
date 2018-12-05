import {TestBed, getTestBed, inject} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {GitHubService} from './git-hub.service';
import { of } from 'rxjs';

class FakeGithubService {
  get() {
    return of(mockRepos);
  }
}

describe('Service: GitHubService', () => {
  let injector: TestBed;
  let service: GitHubService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: GitHubService, useClass: FakeGithubService }
      ]
    }).compileComponents();

    injector = getTestBed();
    service = injector.get(GitHubService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should exist', () => {
    expect(service).toBeDefined();
  });

  it('should return mock data', () => {

    service.get().subscribe(repos => {
      expect(repos.items.length).toBe(1);
      expect(repos).toEqual(mockRepos);
    });

    // const req = httpMock.expectOne(`${service.API_URL}`);
    // expect(req.request.method).toBe('GET');
    // req.flush(mockRepos);
  });
});

it('expects service to fetch data with proper sorting',
  inject([HttpTestingController, GitHubService],
    (httpMock: HttpTestingController, service: GitHubService) => {
      // We call the service
      service.get().subscribe(data => {
        debugger;
        expect(data.pageInfo.totalRecordCount).toBe(21);
        expect(data.pageInfo.pageNumber).toBe(0);
        expect(data.data.length).toBe(7);
      });
      // We set the expectations for the HttpClient mock
      const req = httpMock.expectOne('http://.../data/contacts');
      expect(req.request.method).toEqual('GET');
      // Then we set the fake data to be returned by the mock
      req.flush(mockRepos);
    })
);


const mockRepos = {
  'total_count': 2886593,
  'incomplete_results': false,
  'items': [
    {
      'id': 28457823,
      'node_id': 'MDEwOlJlcG9zaXRvcnkyODQ1NzgyMw==',
      'name': 'freeCodeCamp',
      'full_name': 'freeCodeCamp/freeCodeCamp',
      'private': false,
      'owner': {
        'login': 'freeCodeCamp',
        'id': 9892522,
        'node_id': 'MDEyOk9yZ2FuaXphdGlvbjk4OTI1MjI=',
        'avatar_url': 'https://avatars0.githubusercontent.com/u/9892522?v=4',
        'gravatar_id': '',
        'url': 'https://api.github.com/users/freeCodeCamp',
        'html_url': 'https://github.com/freeCodeCamp',
        'followers_url': 'https://api.github.com/users/freeCodeCamp/followers',
        'following_url': 'https://api.github.com/users/freeCodeCamp/following{/other_user}',
        'gists_url': 'https://api.github.com/users/freeCodeCamp/gists{/gist_id}',
        'starred_url': 'https://api.github.com/users/freeCodeCamp/starred{/owner}{/repo}',
        'subscriptions_url': 'https://api.github.com/users/freeCodeCamp/subscriptions',
        'organizations_url': 'https://api.github.com/users/freeCodeCamp/orgs',
        'repos_url': 'https://api.github.com/users/freeCodeCamp/repos',
        'events_url': 'https://api.github.com/users/freeCodeCamp/events{/privacy}',
        'received_events_url': 'https://api.github.com/users/freeCodeCamp/received_events',
        'type': 'Organization',
        'site_admin': false
      },
      'html_url': 'https://github.com/freeCodeCamp/freeCodeCamp',
      'description': 'The https://www.freeCodeCamp.org open source codebase and curriculum. Learn to code for free together.',
      'fork': false,
      'url': 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp',
      'forks_url': 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/forks',
      'keys_url': 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/keys{/key_id}',
      'collaborators_url': 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/collaborators{/collaborator}',
      'teams_url': 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/teams',
      'hooks_url': 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/hooks',
      'issue_events_url': 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/issues/events{/number}',
      'events_url': 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/events',
      'assignees_url': 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/assignees{/user}',
      'branches_url': 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/branches{/branch}',
      'tags_url': 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/tags',
      'blobs_url': 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/git/blobs{/sha}',
      'git_tags_url': 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/git/tags{/sha}',
      'git_refs_url': 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/git/refs{/sha}',
      'trees_url': 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/git/trees{/sha}',
      'statuses_url': 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/statuses/{sha}',
      'languages_url': 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/languages',
      'stargazers_url': 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/stargazers',
      'contributors_url': 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/contributors',
      'subscribers_url': 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/subscribers',
      'subscription_url': 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/subscription',
      'commits_url': 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/commits{/sha}',
      'git_commits_url': 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/git/commits{/sha}',
      'comments_url': 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/comments{/number}',
      'issue_comment_url': 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/issues/comments{/number}',
      'contents_url': 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/contents/{+path}',
      'compare_url': 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/compare/{base}...{head}',
      'merges_url': 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/merges',
      'archive_url': 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/{archive_format}{/ref}',
      'downloads_url': 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/downloads',
      'issues_url': 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/issues{/number}',
      'pulls_url': 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/pulls{/number}',
      'milestones_url': 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/milestones{/number}',
      'notifications_url': 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/notifications{?since,all,participating}',
      'labels_url': 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/labels{/name}',
      'releases_url': 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/releases{/id}',
      'deployments_url': 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/deployments',
      'created_at': '2014-12-24T17:49:19Z',
      'updated_at': '2018-12-05T07:19:13Z',
      'pushed_at': '2018-12-05T06:23:00Z',
      'git_url': 'git://github.com/freeCodeCamp/freeCodeCamp.git',
      'ssh_url': 'git@github.com:freeCodeCamp/freeCodeCamp.git',
      'clone_url': 'https://github.com/freeCodeCamp/freeCodeCamp.git',
      'svn_url': 'https://github.com/freeCodeCamp/freeCodeCamp',
      'homepage': '',
      'size': 102970,
      'stargazers_count': 296366,
      'watchers_count': 296366,
      'language': 'JavaScript',
      'has_issues': true,
      'has_projects': false,
      'has_downloads': true,
      'has_wiki': false,
      'has_pages': false,
      'forks_count': 20580,
      'mirror_url': null,
      'archived': false,
      'open_issues_count': 8082,
      'license': {
        'key': 'bsd-3-clause',
        'name': 'BSD 3-Clause "New" or "Revised" License',
        'spdx_id': 'BSD-3-Clause',
        'url': 'https://api.github.com/licenses/bsd-3-clause',
        'node_id': 'MDc6TGljZW5zZTU='
      },
      'topics': [
        'careers',
        'certification',
        'community',
        'curriculum',
        'd3',
        'education',
        'javascript',
        'learn-to-code',
        'math',
        'nodejs',
        'nonprofits',
        'programming',
        'react',
        'teachers'
      ],
      'forks': 20580,
      'open_issues': 8082,
      'watchers': 296366,
      'default_branch': 'master',
      'score': 1.0
    },
  ]
};
