import { rest } from "msw";
import { mockUser } from "./empty-user";

export const handlers = [
  // Handles a GET /user request

  rest.get("/api/user", (req, res, ctx) => {
    return res(
      ctx.status(200),

      ctx.json(mockUser())
    );
  })
];
