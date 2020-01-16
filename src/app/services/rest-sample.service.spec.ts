import { TestBed } from "@angular/core/testing";

import { RestSampleService } from "./rest-sample.service";

describe("RestSampleService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: RestSampleService = TestBed.get(RestSampleService);
    expect(service).toBeTruthy();
  });
});
