import { TestBed } from "@angular/core/testing";

import { DoodadService } from "./doodad.service";

describe("DoodadService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: DoodadService = TestBed.get(DoodadService);
    expect(service).toBeTruthy();
  });
});
