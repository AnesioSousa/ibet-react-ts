import * as matchers from "@testing-library/jest-dom/matchers";
import { cleanup } from "@testing-library/react";
import { M } from "vite/dist/node/types.d-aGj9QkWt";
import { afterEach, describe, expect, it } from "vitest";

expect.extend(matchers);

afterEach(() => {
  cleanup();
});

