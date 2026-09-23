## Update Nx

To update Nx and migrate the workspace to the latest version, run:

```shell
npx nx migrate latest
```

After the migration package has been generated, apply the migrations with:

```shell
npx nx migrate --run-migrations
```

## Detect MDX2 Issues in Storybook

To identify potential MDX2 compatibility issues in Storybook, run:

```shell
npx @hipster/mdx2-issue-checker
```

Review the reported files and update any incompatible MDX syntax or Storybook configurations as needed.
