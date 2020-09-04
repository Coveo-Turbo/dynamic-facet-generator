# DynamicFacetGenerator

Generates Facets dynamicaly for a specific category

Disclaimer: This component was built by the community at large and is not an official Coveo JSUI Component. Use this component at your own risk.

## Usage

```
<div class="coveo-facet-column">
  <div class="CoveoDynamicFacetManager">
    <div class="CoveoDynamicFacet" data-field="@prd_brand" data-title="Brand"></div>
    <div class="CoveoDynamicFacet" data-field="@prd_category" data-title="Category Type"></div>
    <div class="CoveoDynamicFacetGenerator" data-depends-on="@prd_category"></div>
  </div>
</div>
```

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