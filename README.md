# DynamicFacetGenerator

Generates Facets dynamicaly for a specific category

Disclaimer: This component was built by the community at large and is not an official Coveo JSUI Component. Use this component at your own risk.

## Documentation

Visit [documentation page](https://coveo-turbo.github.io/dynamic-facet-generator/classes/dynamicfacetgenerator.html) for full component detail:

## Getting Started

1. Install the component into your project.

```
npm i @coveops/dynamic-facet-generator
```

2. Use the Component or extend it

Typescript:

```javascript
import { DynamicFacetGenerator, IDynamicFacetGeneratorOptions } from '@coveops/dynamic-facet-generator';
```

Javascript

```javascript
const DynamicFacetGenerator = require('@coveops/dynamic-facet-generator').DynamicFacetGenerator;
```

3. You can also expose the component alongside other components being built in your project.

```javascript
export * from '@coveops/dynamic-facet-generator'
```

4. Include the component in your template as follows:

Place the component in your markup:

```html
<div class="CoveoDynamicFacetGenerator"></div>
```

## Usage

Add the `CoveoDynamicFacetGenerator` along with the rest of the Facets.

```html
<div class="coveo-facet-column">
  <div class="CoveoDynamicFacetManager">
    <div class="CoveoDynamicFacet" data-field="@prd_brand" data-title="Brand"></div>
    <div class="CoveoDynamicFacet" data-field="@prd_category" data-title="Category Type"></div>
    <div class="CoveoDynamicFacetGenerator" data-depends-on="@prd_category"></div>
  </div>
</div>
```

Before you initialize the UI, make sure you pass the dictionary to the DynamicFacetGenerator component

```javascript
document.addEventListener('DOMContentLoaded', function () {
  Coveo.SearchEndpoint.configureSampleEndpointV2();
  Coveo.init(document.body, {
    DynamicFacetGenerator: {
      dictionary: {
        "Computer": ["Total Storage", "Processor Type"],
        "Phone": ["Screen Size", "Battery Life", "Color"]
      },
      transformer: (value) => {
        return { field: (`@prd_${value.replace(/\W/g, '')}` || '').toLowerCase(), facetTitle: value };
      },
    }
  });
})
```

### Dictionary
If the dictionary is not defined at the moment you configure the component options, use the [getDictionaryPromise](https://coveo-turbo.github.io/dynamic-facet-generator/interfaces/idynamicfacetgeneratoroptions.html#getdictionarypromise) option.
That way, instead of passing the facet dictionary as an object, it is being passed as asynchronous function.


### Transfomer
This function allows to transform the dictionary values into fields available in the index. In the above example, the component will generate Facets for `@prd_total_storage` and `@prd_processor_type` whenever the user selects the computer category.

Refer to the [Reference Documentation page](https://coveo-turbo.github.io/dynamic-facet-generator/interfaces/idynamicfacetgeneratoroptions.html) for more options.

## Extending

Extending the component can be done as follows:

```javascript
import { DynamicFacetGenerator, IDynamicFacetGeneratorOptions } from "@coveops/dynamic-facet-generator";

export interface IExtendedDynamicFacetGeneratorOptions extends IDynamicFacetGeneratorOptions {}

export class ExtendedDynamicFacetGenerator extends DynamicFacetGenerator {}
```

## Contribute

1. Clone the project
2. Copy `.env.dist` to `.env` and update the COVEO_ORG_ID and COVEO_TOKEN fields in the `.env` file to use your Coveo credentials and SERVER_PORT to configure the port of the sandbox - it will use 8080 by default.
3. Build the code base: `npm run build`
4. Serve the sandbox for live development `npm run serve`