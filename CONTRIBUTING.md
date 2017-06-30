First of all, I really appreciate your consideration for contributing to Handy-gi package. So, let's get started :)

Read the following sections in order to know what and how to work on something. If you get stuck at any point you can create an [issue] on GitHub.

All contributors are expected to follow our [Code of Conduct]. Please make sure you are welcoming and friendly in all of our spaces.

## Submitting a Pull Request

For now, most of the core functionalities are considered stable, however, PRs for refactoring/performance boost are very welcomed!

In addition, you can add a missing matcher that matches one of the official GitHub's [gitignore collection]. You can see the currently supported templates [here](https://github.com/ahmed-taj/handy-gi/tree/master/templates).

Also, I would really appreciate PRs that fix missing doc/tests and typos :)

#### Coding style

This project follows [JavaScript Standard Code] Style, please make sure your changes follow the same convention.

#### Committing your changes

This repository is [Commitizen] friendly, and it's already configured with commit, pre-commit, pre-push ..etc scripts to ensure consistency.

To commit your changes, stage them then run:

```sh
$ npm run co
```
Which will open dialog similar to this one

![commitizen](https://github.com/commitizen/cz-cli/raw/master/meta/screenshots/add-commit.png)

The dialog will guide you for the rest. Also, see [Commitizen] website for more info.

**NOTE:** You wouldn't be able to commit your changes if they don't follow our code style or have failing tests, thanks to [husky].

## Reporting bugs & features requests

If you would like to suggest a new feature or you have found any bug, please create an [issue] discussing the feature/bug.

[issue]: https://github.com/ahmed-taj/handy-gi/issues/new
[Code of Conduct]: https://github.com/ahmed-taj/handy-gi/blob/master/CODE_OF_CONDUCT.md
[gitignore collection]: https://github.com/github/gitignore
[JavaScript Standard Code]: https://standardjs.com
[Commitizen]: https://github.com/commitizen/cz-cli
[husky]: https://github.com/typicode/husky
