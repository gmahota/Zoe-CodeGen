### Quick Type

## Installation

There are many ways to use `quicktype`. [app.quicktype.io](https://app.quicktype.io) is the most powerful and complete UI. The web app also works offline and doesn't send your sample data over the Internet, so paste away!

For the best CLI, we recommend installing `quicktype` globally via `npm`:

```bash
npm install -g quicktype
```

Other options:

- [Homebrew](http://formulae.brew.sh/formula/quicktype) _(infrequently updated)_
- [Xcode extension](https://itunes.apple.com/us/app/paste-json-as-code-quicktype/id1330801220?mt=12)\*
- [VSCode extension](https://marketplace.visualstudio.com/items/quicktype.quicktype)\*
- [Visual Studio extension](https://marketplace.visualstudio.com/items?itemName=typeguard.quicktype-vs)\*

### Generating code from Json

```bash
quicktype example/c#/person.template.json -o content/sampleperson/Person.cs
```