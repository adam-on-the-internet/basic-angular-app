import { Endpoint } from "../models/Endpoint.model";

export abstract class RestUrlBuilder {
  public static buildRestUrl(endpoint: Endpoint): string {
    const serviceString = this.getServiceString(endpoint);
    const controllerString = this.getControllerString(endpoint);
    const paramString = this.getParamString(endpoint);
    return serviceString + controllerString + paramString;
  }

  private static getServiceString(endpoint: Endpoint): string {
    if (endpoint.service) {
      return endpoint.service;
    } else {
      return "";
    }
  }

  private static getControllerString(endpoint: Endpoint): string {
    if (endpoint.controller) {
      return "/" + endpoint.controller;
    } else {
      return "";
    }
  }

  private static getParamString(endpoint: Endpoint): string {
    if (endpoint.params) {
      return "/" + endpoint.params;
    } else {
      return "";
    }
  }
}
