# Contributing guidelines

Before creating any Pull requests please follow the guidelines.

1. Code is clean, formatted, simple and well-organized.
2. All the tests run and perform as expected in the `test` folder.

## TO-DO items
1. Provide TypeScript support
2. Provide log levels(mainly debug, info &  critical) support.
3. Script to archive the logs.

## Steps to publish (For repo admins)

```sh
# keep username, password and 2FA ready
npm login

# update Semver numbers: can user major or minor or patch 
npm version minor
git push && git push --tags
npm publish

```

---
## Testing

To test npm package install and compatibility, can run the bash script.
```sh
chmod +x ./test/setup-log-likho-ts.sh
./test/setup-log-likho-ts.sh
```