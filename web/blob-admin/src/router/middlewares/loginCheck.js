import { Middleware } from "oh-router";
import { getToken } from "../../config/token";
import { router } from "../index";

export class LoginCheckMiddleware extends Middleware {
  async handler(ctx, next) {
    const token = getToken();
    if (ctx.to.pathname === "/login") {
      if (token) {
        router.navigate("/");
      } else {
        next();
      }
    }

    if (token) {
      next();
    } else {
      router.navigate("/login");
    }
  }
}
