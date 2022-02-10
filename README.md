# MakeCode Holiday editor

### Setting up the dev environment

Install pxt:

```
npm install -g pxt
```

Install node_modules:

```
npm install
cd site
npm install
```

### Building the react app

You must manually build this before serving locally or publishing a release

```
cd site
npx webpack
```

### Local serving the target

*Note: To see changes to the webapp, make sure you run webpack first (see above).*

To local serve:

```
pxt serve
```

Then navigate to http://localhost:3232/controller.html


### Publishing an update to GitHub Pages

```
cd site
npx webpack
cd ..
pxt staticpkg --gh --bump
```

## Contributing

This project welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.opensource.microsoft.com.

When you submit a pull request, a CLA bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## Trademarks

This project may contain trademarks or logos for projects, products, or services. Authorized use of Microsoft
trademarks or logos is subject to and must follow
[Microsoft's Trademark & Brand Guidelines](https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks/usage/general).
Use of Microsoft trademarks or logos in modified versions of this project must not cause confusion or imply Microsoft sponsorship.
Any use of third-party trademarks or logos are subject to those third-party's policies.
