import { IStringMap } from 'coveo-search-ui';

export class CustomEvents {
  static udpateCustomerPrice = 'udpateResultTemplatePrice';
  static udpateCustomCoreCharge = 'udpateResultTemplatePrice';
  static vehicleFitSearch = 'vehicleFitSearch';
  static vehicleFitSelect = 'vehicleFitSelect';
  static vehicleFitClear = 'vehicleFitClear';

  static vehicleVinSearch = 'vehicleVinSearch';
  static vehicleVinFound = 'vehicleVinFound';

  static updateFacetDictionary = 'updateFacetDictionary';
}

export interface IUdpateCustomerPriceArgs {
  prices: Array<IStringMap<any>>;
}
