import { TestBed } from "@angular/core/testing";

import { RestSampleService } from "./rest-sample.service";
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe("RestSampleService", () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
  }));

  it("should be created", () => {
    const service: RestSampleService = TestBed.get(RestSampleService);
    expect(service).toBeTruthy();
  });
});
